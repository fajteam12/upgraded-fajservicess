import { useEffect } from "react";
import {
  Outlet,
  useMatches,
} from "react-router-dom";
import Header1 from "../Components/Header/Header1";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/ScrollToTop";
import { preloadCommonRoutes } from "../Routes/preloadRoutes";
import ContactSidebar from "../Components/ContactSidebar/ContactSidebar";

const Main = () => {
  const matches = useMatches();
  const activeMatch = matches[matches.length - 1];

  const headerMode =
    activeMatch?.handle?.headerMode || "standard";

  const overlayHeader = headerMode === "overlay";

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
          overlayHeader
            ? "main-page-area--overlay-header"
            : "main-page-area--standard-header"
        }`}
      >
        <Header1 overlay={overlayHeader} />

        <main
          className="page-content-loader"
          style={{ minHeight: "70vh" }}
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