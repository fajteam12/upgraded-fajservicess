import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const isArabic = /[\u0600-\u06FF]/.test(
    decodeURIComponent(location.pathname)
  );

  const generateBreadcrumbs = () => {
    const pathnames = location.pathname.split("/").filter(Boolean);

    const formatLabel = (segment) => {
      const decoded = decodeURIComponent(segment);

      if (/[\u0600-\u06FF]/.test(decoded)) {
        return decoded.replace(/-/g, " ");
      }

      const acronyms = [
        "ac",
        "jvc",
        "jvt",
        "lg",
        "dip",
        "jafza",
        "difc",
        "impz",
        "jlt",
        "jge",
        "aeg",
        "ifb",
        "jbr",
      ];

      const customWords = {
        kitchenaid: "KitchenAid",
        delonghi: "DeLonghi",
        nespresso: "Nespresso",
        bosch: "Bosch",
        siemens: "Siemens",
        whirlpool: "Whirlpool",
        electrolux: "Electrolux",
        beko: "Beko",
        daikin: "Daikin",
        hitachi: "Hitachi",
        panasonic: "Panasonic",
        sharp: "Sharp",
      };

      return decoded
        .split("-")
        .map((word) => {
          const lower = word.toLowerCase();

          if (customWords[lower]) {
            return customWords[lower];
          }

          if (acronyms.includes(lower)) {
            return word.toUpperCase();
          }

          return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(" ");
    };

    const breadcrumbs = [
      {
        label: isArabic ? "\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629" : "Home",
        path: "/",
      },
    ];

    let currentPath = "";

    pathnames.forEach((segment) => {
      currentPath = `${currentPath.replace(/\/$/, "")}/${segment}/`;

      breadcrumbs.push({
        label: formatLabel(segment),
        path: currentPath,
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <nav
      className="breadcrumb-nav"
      aria-label="Breadcrumb"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="container">
        <ol className="breadcrumb-list">
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1;

            return (
              <li key={crumb.path} className="breadcrumb-item">
                {isLast ? (
                  <span className="breadcrumb-current">{crumb.label}</span>
                ) : (
                  <>
                    <Link to={crumb.path} className="breadcrumb-link">
                      {crumb.label}
                    </Link>

                    <span className="breadcrumb-separator" aria-hidden="true">
                      {isArabic ? "\u2039" : "\u203A"}
                    </span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </div>

      <style>{`
        .breadcrumb-nav {
          padding: 10px 0 6px;
          background-color: #ffffff;
        }

        .breadcrumb-list {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .breadcrumb-item {
          display: flex;
          align-items: center;
          font-size: 14px;
        }

        .breadcrumb-link {
          color: #5db3cd;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .breadcrumb-link:hover {
          color: #078db2;
          text-decoration: underline;
        }

        .breadcrumb-separator {
          margin: 0 8px;
          color: #5db3cd;
          font-size: 12px;
        }

        .breadcrumb-current {
          color: #666666;
        }

        @media (max-width: 576px) {
          .breadcrumb-item {
            font-size: 13px;
          }

          .breadcrumb-separator {
            margin: 0 5px;
          }
        }
      `}</style>
    </nav>
  );
};

export default Breadcrumb;