import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header1 from '../Components/Header/Header1';
import Footer from '../Components/Footer/Footer';
import ScrollToTop from "../Components/ScrollToTop";
import { preloadCommonRoutes } from "../Routes/preloadRoutes";
import ContactSidebar from "../Components/ContactSidebar/ContactSidebar";

const Main = () => {
  useEffect(() => {
    let idleId;
    const preloadWhenIdle = () => {
      const idleCallback = window.requestIdleCallback;

      if (idleCallback) {
        idleId = idleCallback(preloadCommonRoutes, { timeout: 3000 });
        return;
      }

      preloadCommonRoutes();
    };

    const timerId = window.setTimeout(preloadWhenIdle, 6000);

    return () => {
      window.clearTimeout(timerId);
      window.cancelIdleCallback?.(idleId);
    };
  }, []);

  return (
    <>
      <ScrollToTop />
        <div className='main-page-area'>
          <Header1 />
          <div className="page-content-loader" style={{ minHeight: '70vh' }}>
            <Outlet />
          </div>
          <Footer />
          <ContactSidebar />
        </div>
    </>
  );
};

export default Main;
