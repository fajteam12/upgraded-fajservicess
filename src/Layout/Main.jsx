import { useEffect } from "react";
import {
  Outlet,
  useLocation,
  useMatches,
} from "react-router-dom";
import Header1 from "../Components/Header/Header1";
import ClassicHeader from "../Components/Header/ClassicHeader";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/ScrollToTop";
import { preloadCommonRoutes } from "../Routes/preloadRoutes";
import ContactSidebar from "../Components/ContactSidebar/ContactSidebar";
import { toTitleCase } from "../utils/titleCase";

// Switch between "classic" (old site header) and "pill" (new floating pill header) anytime:
const ACTIVE_HEADER = "classic"; // "classic" | "pill"

const Main = () => {
  const { pathname } = useLocation();
  const matches = useMatches();
  const activeMatch = matches[matches.length - 1];

  const headerVariant = activeMatch?.handle?.headerVariant || ACTIVE_HEADER;
  const headerMode =
    activeMatch?.handle?.headerMode || "standard";

  const overlayHeader = headerMode === "overlay";

  useEffect(() => {
    if (pathname === "/") return undefined;

    const root = document.querySelector(".main-page-area");
    if (!root) return undefined;

    const headingSelector = "h1, h2, h3, h4, h5, h6";
    const originalText = new Map();

    const normalizeHeading = (heading) => {
      const walker = document.createTreeWalker(heading, NodeFilter.SHOW_TEXT);
      let textNode = walker.nextNode();

      while (textNode) {
        const text = textNode.nodeValue;
        const shouldSkip = textNode.parentElement?.closest(
          'svg, [aria-hidden="true"]'
        );

        if (text?.trim() && !shouldSkip) {
          const previous = originalText.get(textNode);
          if (!previous || text !== previous.formatted) {
            const formatted = toTitleCase(text);
            if (formatted !== text) {
              originalText.set(textNode, { original: text, formatted });
              textNode.nodeValue = formatted;
            } else {
              originalText.delete(textNode);
            }
          }
        }

        textNode = walker.nextNode();
      }
    };

    const normalizeAffectedHeadings = (mutations) => {
      const headings = new Set();

      const collectHeadings = (node) => {
        const element =
          node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement;
        if (!element) return;

        const parentHeading = element.closest(headingSelector);
        if (parentHeading) headings.add(parentHeading);
        if (element.matches(headingSelector)) headings.add(element);
        element.querySelectorAll(headingSelector).forEach((heading) => {
          headings.add(heading);
        });
      };

      mutations.forEach((mutation) => {
        if (mutation.type === "characterData") {
          collectHeadings(mutation.target);
        } else {
          mutation.addedNodes.forEach(collectHeadings);
        }
      });

      headings.forEach(normalizeHeading);
    };

    root.querySelectorAll(headingSelector).forEach(normalizeHeading);

    const observer = new MutationObserver(normalizeAffectedHeadings);
    observer.observe(root, {
      characterData: true,
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      originalText.forEach(({ original, formatted }, textNode) => {
        if (textNode.nodeValue === formatted) {
          textNode.nodeValue = original;
        }
      });
    };
  }, [pathname]);

  useEffect(() => {
    let idleId;

    const preloadWhenIdle = () => {
      const idleCallback =
        window.requestIdleCallback;

      if (idleCallback) {
        idleId = idleCallback(
          preloadCommonRoutes,
          {
            timeout: 3000,
          }
        );

        return;
      }

      preloadCommonRoutes();
    };

    const timerId = window.setTimeout(
      preloadWhenIdle,
      6000
    );

    return () => {
      window.clearTimeout(timerId);
      window.cancelIdleCallback?.(idleId);
    };
  }, []);

  return (
    <>
      <ScrollToTop />

      <div
        className={`main-page-area ${
          headerVariant === "pill" && overlayHeader
            ? "main-page-area--overlay-header"
            : "main-page-area--standard-header"
        }${pathname === "/" ? "" : " main-page-area--title-case"}`}
      >
        {headerVariant === "classic" ? (
          <ClassicHeader />
        ) : (
          <Header1 overlay={overlayHeader} />
        )}

        <main
          className="page-content-loader"
          style={{ minHeight: "calc(100vh - 80px)" }}
        >
          <Outlet />
        </main>

        <Footer />
        <ContactSidebar />
      </div>
    </>
  );
};

export default Main;