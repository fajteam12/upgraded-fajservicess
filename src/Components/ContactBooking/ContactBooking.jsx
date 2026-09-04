import {
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import contactBookingData from "../../data/contactBookingData";
import "./ContactBooking.css";

const RECAPTCHA_SITE_KEY =
  "6Lc3iU4rAAAAAA0jw06XlEnCQsXoc_vxT8piZLLX";

const FORM_ENDPOINT =
  "https://formsubmit.co/ajax/info@fajservices.ae";

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

function Icon({ type }) {
  const paths = {
    pin:
      "M12 21s7-6.1 7-12A7 7 0 0 0 5 9c0 5.9 7 12 7 12Zm0-9.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z",

    phone:
      "M6.6 3.5 8.8 3l2 4.8-2 1.3a14 14 0 0 0 6.1 6.1l1.3-2 4.8 2-.5 2.2a2 2 0 0 1-2.2 1.5A16 16 0 0 1 5.1 5.7 2 2 0 0 1 6.6 3.5Z",

    mail:
      "M3 5h18v14H3V5Zm1 1 8 6 8-6M4 18l5-5m11 5-5-5",

    users:
      "M16 20v-1.5a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V20m7-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm6-5a2.5 2.5 0 0 1 0 5m3 9v-1.5a4 4 0 0 0-3-3.9",

    arrow:
      "M5 12h14m-6-6 6 6-6 6",
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={paths[type]} />
    </svg>
  );
}

function ContactBooking({ data = contactBookingData }) {
  const recaptchaRef = useRef(null);
  const recaptchaLoadingRef = useRef(null);
  const submitRequestRef = useRef(null);
  const fallbackTimerRef = useRef(null);
  const submissionHandledRef = useRef(false);

  const [form, setForm] = useState(emptyForm);

  const [state, setState] = useState({
    submitting: false,
    message: "",
    error: false,
  });

  const loadRecaptcha = useCallback(() => {
    if (window.grecaptcha?.render) {
      return Promise.resolve(window.grecaptcha);
    }

    if (recaptchaLoadingRef.current) {
      return recaptchaLoadingRef.current;
    }

    recaptchaLoadingRef.current = new Promise(
      (resolve, reject) => {
        const callbackName = `fajRecaptcha_${Date.now()}`;

        window[callbackName] = () => {
          const grecaptcha = window.grecaptcha;

          delete window[callbackName];

          if (grecaptcha?.render) {
            resolve(grecaptcha);
          } else {
            reject(
              new Error("Google reCAPTCHA did not initialise.")
            );
          }
        };

        const existingScript = document.querySelector(
          'script[src*="google.com/recaptcha/api.js"]'
        );

        if (existingScript) {
          const waitForRecaptcha = window.setInterval(() => {
            if (window.grecaptcha?.render) {
              window.clearInterval(waitForRecaptcha);
              delete window[callbackName];
              resolve(window.grecaptcha);
            }
          }, 100);

          window.setTimeout(() => {
            window.clearInterval(waitForRecaptcha);

            if (!window.grecaptcha?.render) {
              delete window[callbackName];
              reject(
                new Error("Google reCAPTCHA failed to load.")
              );
            }
          }, 5000);

          return;
        }

        const script = document.createElement("script");

        script.src =
          `https://www.google.com/recaptcha/api.js` +
          `?onload=${callbackName}&render=explicit`;

        script.async = true;
        script.defer = true;

        script.onerror = () => {
          delete window[callbackName];

          reject(
            new Error("Unable to load Google reCAPTCHA.")
          );
        };

        document.head.appendChild(script);
      }
    );

    return recaptchaLoadingRef.current;
  }, []);

  const prepareRecaptcha = useCallback(async () => {
    if (recaptchaRef.current !== null) {
      return;
    }

    const grecaptcha = await loadRecaptcha();

    const node = document.getElementById(
      "contact-recaptcha"
    );

    if (
      node &&
      recaptchaRef.current === null &&
      grecaptcha?.render
    ) {
      recaptchaRef.current = grecaptcha.render(node, {
        sitekey: RECAPTCHA_SITE_KEY,
        size: "invisible",
        badge: "bottomleft",

        callback: (token) => {
          submitRequestRef.current?.(token);
        },

        "error-callback": () => {
          submitRequestRef.current?.("");
        },
      });
    }
  }, [loadRecaptcha]);

  const submitRequest = useCallback(
    async (token = "") => {
      if (submissionHandledRef.current) {
        return;
      }

      submissionHandledRef.current = true;

      if (fallbackTimerRef.current) {
        window.clearTimeout(fallbackTimerRef.current);
        fallbackTimerRef.current = null;
      }

      const payload = new FormData();

      payload.append("Name", form.name);
      payload.append("Email", form.email);
      payload.append("Phone", form.phone);
      payload.append("Service", form.service);
      payload.append("Message", form.message);

      payload.append(
        "_subject",
        "New booking request - FAJ Technical Services"
      );

      // This was present in your old working form.
      payload.append("_captcha", "false");

      payload.append("_template", "table");

      payload.append(
        "_cc",
        "faisaljuma.techservices@gmail.com"
      );

      payload.append(
        "_from_name",
        "FAJ Website Booking"
      );

      payload.append(
        "page_url",
        window.location.href
      );

      if (token) {
        payload.append(
          "g-recaptcha-response",
          token
        );
      }

      try {
        const response = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: payload,
        });

        let result = null;

        try {
          result = await response.json();
        } catch {
          // response.ok is still checked below
        }

        const successValue = result?.success;

        const explicitlyFailed =
          successValue === false ||
          successValue === "false";

        if (!response.ok || explicitlyFailed) {
          throw new Error(
            result?.message ||
              "FormSubmit rejected the request."
          );
        }

        setState({
          submitting: false,
          error: false,
          message:
            "Thank you. Your booking request has been sent.",
        });

        setForm(emptyForm);

        if (
          window.grecaptcha &&
          recaptchaRef.current !== null
        ) {
          try {
            window.grecaptcha.reset(
              recaptchaRef.current
            );
          } catch {
            // nothing to do
          }
        }
      } catch (error) {
        console.error(
          "Booking form submission error:",
          error
        );

        setState({
          submitting: false,
          error: true,
          message:
            "We could not send your request. Please try again or call us directly.",
        });

        // Allow another submission attempt.
        submissionHandledRef.current = false;

        if (
          window.grecaptcha &&
          recaptchaRef.current !== null
        ) {
          try {
            window.grecaptcha.reset(
              recaptchaRef.current
            );
          } catch {
            // nothing to do
          }
        }
      }
    },
    [form]
  );

  useEffect(() => {
    submitRequestRef.current = submitRequest;
  }, [submitRequest]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (state.submitting) {
      return;
    }

    submissionHandledRef.current = false;

    setState({
      submitting: true,
      error: false,
      message: "",
    });

    try {
      await prepareRecaptcha();

      if (
        window.grecaptcha &&
        recaptchaRef.current !== null
      ) {
        // Fallback if reCAPTCHA callback never fires.
        fallbackTimerRef.current =
          window.setTimeout(() => {
            submitRequestRef.current?.("");
          }, 5000);

        try {
          window.grecaptcha.execute(
            recaptchaRef.current
          );
        } catch (error) {
          console.error(
            "reCAPTCHA execution error:",
            error
          );

          if (fallbackTimerRef.current) {
            window.clearTimeout(
              fallbackTimerRef.current
            );
            fallbackTimerRef.current = null;
          }

          await submitRequest("");
        }
      } else {
        await submitRequest("");
      }
    } catch (error) {
      console.error(
        "reCAPTCHA preparation error:",
        error
      );

      await submitRequest("");
    }
  };

  const update = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  useEffect(() => {
    return () => {
      if (fallbackTimerRef.current) {
        window.clearTimeout(
          fallbackTimerRef.current
        );
      }

      if (
        recaptchaRef.current !== null &&
        window.grecaptcha
      ) {
        try {
          window.grecaptcha.reset(
            recaptchaRef.current
          );
        } catch {
          // nothing to do
        }
      }
    };
  }, []);

  return (
    <section
      className="contact-booking"
      aria-labelledby="contact-booking-title"
    >
      <div className="container contact-booking__grid">
        <div className="contact-booking__intro contact-booking__reveal contact-booking__reveal--left">
          {data.eyebrow && (
            <p className="contact-booking__eyebrow">
              {data.eyebrow}
            </p>
          )}

          {data.title && (
            <h2 id="contact-booking-title">
              {data.title}
            </h2>
          )}

          {data.description && (
            <p className="contact-booking__description">
              {data.description}
            </p>
          )}

          <div className="contact-booking__details contact-booking__reveal contact-booking__reveal--delay-1">
            <div className="contact-booking__detail">
              <span>
                <Icon type="pin" />
              </span>

              <div>
                <strong>
                  {data.location.label}
                </strong>

                {data.location.lines.map((line) => (
                  <small key={line}>
                    {line}
                  </small>
                ))}
              </div>
            </div>

            <div className="contact-booking__detail">
              <span>
                <Icon type="phone" />
              </span>

              <div>
                <strong>
                  {data.phone.label}
                </strong>

                {data.phone.lines.map((line) => (
                  <a
                    href={data.phone.href}
                    key={line}
                  >
                    {line}
                  </a>
                ))}
              </div>
            </div>

            <div className="contact-booking__detail">
              <span>
                <Icon type="mail" />
              </span>

              <div>
                <strong>
                  {data.email.label}
                </strong>

                <a href={data.email.href}>
                  {data.email.value}
                </a>
              </div>
            </div>
          </div>

          <div className="contact-booking__stat contact-booking__reveal contact-booking__reveal--delay-2">
            <span>
              <Icon type="users" />
            </span>

            <div>
              <strong>
                {data.stat.value}
              </strong>

              <small>
                {data.stat.label}
              </small>
            </div>
          </div>
        </div>

        <div className="contact-booking__card contact-booking__reveal contact-booking__reveal--right">
          <p className="contact-booking__card-eyebrow">
            Quick booking
          </p>

          <h2>
            Book an Appointment
          </h2>

          <p className="contact-booking__card-note">
            Fill out the form below and our technical representative will reach out to you.
          </p>

          {state.message && (
            <div
              className={`contact-booking__alert${
                state.error ? " is-error" : ""
              }`}
              role="status"
              aria-live="polite"
            >
              {state.message}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            onFocus={prepareRecaptcha}
          >
            <label>
              Full name

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={update}
                placeholder="John Doe"
                autoComplete="name"
                required
              />
            </label>

            <div className="contact-booking__row">
              <label>
                Email address

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={update}
                  placeholder="john@example.com"
                  autoComplete="email"
                  required
                />
              </label>

              <label>
                Phone number

                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={update}
                  placeholder="+971 50 000 0000"
                  autoComplete="tel"
                  required
                />
              </label>
            </div>

            <label>
              Service

              <select
                name="service"
                value={form.service}
                onChange={update}
                required
              >
                <option value="" disabled>
                  Select a service...
                </option>

                {data.services.map((service) => (
                  <option
                    value={service}
                    key={service}
                  >
                    {service}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Your message

              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={update}
                placeholder="How can we help you? Describe your issue or request..."
                required
              />
            </label>

            <div id="contact-recaptcha" />

            <button
              type="submit"
              disabled={state.submitting}
            >
              {state.submitting
                ? "Sending..."
                : "Submit Booking Request"}

              <Icon type="arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default memo(ContactBooking);
