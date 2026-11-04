import { Suspense } from "react";

const spinnerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '180px',
  width: '100%',
  animation: 'faj-spinner-fade 0.25s ease 0.18s both',
};

const circleStyle = {
  width: '36px',
  height: '36px',
  border: '3px solid #e8e8e8',
  borderTop: '3px solid #007fa3',
  borderRadius: '50%',
  animation: 'faj-spin 0.7s linear infinite',
};

export const LoadingSpinner = () => (
  <>
    <style>{`
      @keyframes faj-spin { to { transform: rotate(360deg); } }
      @keyframes faj-spinner-fade { from { opacity: 0; } to { opacity: 1; } }
    `}</style>
    <div style={spinnerStyle}>
      <div style={circleStyle} />
    </div>
  </>
);

LoadingSpinner.displayName = 'LoadingSpinner';

/* Global Shimmer Styles for Skeletons */
const ShimmerStyles = () => (
  <style>{`
    @keyframes faj-shimmer {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
    .faj-bone {
      background: linear-gradient(90deg, #edf2f5 25%, #f7f9fa 50%, #edf2f5 75%);
      background-size: 200% 100%;
      animation: faj-shimmer 1.5s ease-in-out infinite;
      border-radius: 6px;
    }
    .faj-bone-dark {
      background: linear-gradient(90deg, rgba(255, 255, 255, 0.06) 25%, rgba(255, 255, 255, 0.12) 50%, rgba(255, 255, 255, 0.06) 75%);
      background-size: 200% 100%;
      animation: faj-shimmer 1.5s ease-in-out infinite;
      border-radius: 6px;
    }
  `}</style>
);

/* 1. Service, Repair, Brand, & Location Pages: Zero-CLS Skeleton matching AboutHeroSection */
export const ServiceHeroSkeleton = () => (
  <section className="service-landing__section service-about-hero is-white" aria-hidden="true" style={{ overflow: 'hidden' }}>
    <ShimmerStyles />
    <div className="service-about-hero__container">
      <div className="service-about-hero__content">
        {/* Title */}
        <div className="faj-bone" style={{ width: '85%', height: '36px', marginBottom: '16px' }} />
        <div className="faj-bone" style={{ width: '60%', height: '36px', marginBottom: '22px' }} />

        {/* Paragraphs */}
        <div className="faj-bone" style={{ width: '98%', height: '15px', marginBottom: '10px' }} />
        <div className="faj-bone" style={{ width: '92%', height: '15px', marginBottom: '10px' }} />
        <div className="faj-bone" style={{ width: '86%', height: '15px', marginBottom: '24px' }} />

        {/* Highlights Row */}
        <div className="service-about-hero__highlights">
          <div className="service-about-hero__highlight-item">
            <div className="service-about-hero__highlight-icon faj-bone" style={{ width: '36px', height: '36px', borderRadius: '8px' }} />
            <div className="service-about-hero__highlight-text" style={{ flex: 1 }}>
              <div className="faj-bone" style={{ width: '130px', height: '14px', marginBottom: '6px' }} />
              <div className="faj-bone" style={{ width: '170px', height: '12px' }} />
            </div>
          </div>
          <div className="service-about-hero__highlight-item">
            <div className="service-about-hero__highlight-icon faj-bone" style={{ width: '36px', height: '36px', borderRadius: '8px' }} />
            <div className="service-about-hero__highlight-text" style={{ flex: 1 }}>
              <div className="faj-bone" style={{ width: '140px', height: '14px', marginBottom: '6px' }} />
              <div className="faj-bone" style={{ width: '160px', height: '12px' }} />
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="service-about-hero__actions" style={{ marginTop: '20px' }}>
          <div className="faj-bone" style={{ width: '150px', height: '48px', borderRadius: '30px' }} />
          <div className="faj-bone" style={{ width: '160px', height: '48px', borderRadius: '30px' }} />
        </div>
      </div>

      {/* Media Box matching exact 4:3 aspect ratio */}
      <div className="service-about-hero__media-wrapper">
        <div className="service-about-hero__media">
          <div className="faj-bone" style={{ width: '100%', height: '100%', borderRadius: 'inherit' }} />
        </div>
      </div>
    </div>
  </section>
);

ServiceHeroSkeleton.displayName = 'ServiceHeroSkeleton';
export const HeroSkeleton = ServiceHeroSkeleton; // Backward compatible alias

/* 2. Homepage: Zero-CLS Skeleton matching HomeHero */
export const HomeHeroSkeleton = () => (
  <section className="faj-home-hero" aria-hidden="true" style={{ background: '#0b1f2a' }}>
    <ShimmerStyles />
    <div className="faj-home-hero__container" style={{ maxWidth: '1360px', margin: '0 auto', padding: 'clamp(2rem, 5vw, 4rem) 20px', width: '100%' }}>
      <div style={{ maxWidth: '780px' }}>
        <div className="faj-bone-dark" style={{ width: '150px', height: '18px', marginBottom: '18px', borderRadius: '4px' }} />
        <div className="faj-bone-dark" style={{ width: '90%', height: '44px', marginBottom: '14px', borderRadius: '6px' }} />
        <div className="faj-bone-dark" style={{ width: '75%', height: '44px', marginBottom: '22px', borderRadius: '6px' }} />
        <div className="faj-bone-dark" style={{ width: '96%', height: '16px', marginBottom: '10px', borderRadius: '4px' }} />
        <div className="faj-bone-dark" style={{ width: '82%', height: '16px', marginBottom: '28px', borderRadius: '4px' }} />
        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
          <div className="faj-bone-dark" style={{ width: '180px', height: '50px', borderRadius: '12px' }} />
          <div className="faj-bone-dark" style={{ width: '170px', height: '50px', borderRadius: '12px' }} />
        </div>
      </div>
    </div>
  </section>
);

HomeHeroSkeleton.displayName = 'HomeHeroSkeleton';

/* 3. Text Pages (Privacy Policy, Terms, Refund, FAQs): Clean Text Skeleton with zero false images */
export const TextPageSkeleton = () => (
  <div className="faj-text-page-skeleton" aria-hidden="true" style={{ width: '100%' }}>
    <ShimmerStyles />
    <section className="section cs_py_30" style={{ padding: '30px 0', borderBottom: '1px solid #f0f0f0' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="faj-bone" style={{ width: '220px', height: '32px' }} />
      </div>
    </section>
    <div className="container" style={{ padding: '30px 15px', maxWidth: '1140px', margin: '0 auto' }}>
      <div className="faj-bone" style={{ width: '100%', height: '15px', marginBottom: '12px' }} />
      <div className="faj-bone" style={{ width: '94%', height: '15px', marginBottom: '12px' }} />
      <div className="faj-bone" style={{ width: '97%', height: '15px', marginBottom: '12px' }} />
      <div className="faj-bone" style={{ width: '88%', height: '15px', marginBottom: '26px' }} />
      <div className="faj-bone" style={{ width: '100%', height: '15px', marginBottom: '12px' }} />
      <div className="faj-bone" style={{ width: '91%', height: '15px', marginBottom: '12px' }} />
      <div className="faj-bone" style={{ width: '85%', height: '15px', marginBottom: '12px' }} />
    </div>
  </div>
);

TextPageSkeleton.displayName = 'TextPageSkeleton';

/* 4. Sub-Pages Hero Skeleton matching PageHero (About, Career, History, Portfolio) */
export const PageHeroSkeleton = () => (
  <section className="cs_page_heading cs_bg_filed cs_center" aria-hidden="true" style={{ background: '#0b1f2a', minHeight: '260px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <ShimmerStyles />
    <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
      <div className="faj-bone-dark" style={{ width: '280px', height: '40px', borderRadius: '6px' }} />
      <div className="faj-bone-dark" style={{ width: '160px', height: '16px', borderRadius: '4px' }} />
    </div>
  </section>
);

PageHeroSkeleton.displayName = 'PageHeroSkeleton';

/* Route Detection Helpers */
export function isTextPageRoute(pathname = '') {
  if (!pathname) return false;
  const path = pathname.toLowerCase();
  return (
    path.includes('/privacy') ||
    path.includes('/refund') ||
    path.includes('/terms') ||
    path.includes('/faqs') ||
    path.includes('/orphan') ||
    path.includes('/ac-tonnage-calculator') ||
    path.includes('/faj-price-list')
  );
}

export function isPageHeroRoute(pathname = '') {
  if (!pathname) return false;
  const path = pathname.toLowerCase();
  return (
    path.startsWith('/about') ||
    path.startsWith('/who-we-are') ||
    path.startsWith('/our-') ||
    path.startsWith('/career') ||
    path.startsWith('/blog') ||
    path.startsWith('/contact') ||
    path.startsWith('/portfolio') ||
    path.startsWith('/b2b-services')
  );
}

export function isServiceOrLocationOrBrandRoute(pathname = '') {
  if (!pathname) return false;
  const path = pathname.toLowerCase();

  if (
    path === '/' ||
    path === '' ||
    path === '/home' ||
    isTextPageRoute(path) ||
    isPageHeroRoute(path)
  ) {
    return false;
  }

  return (
    path.startsWith('/services') ||
    path.startsWith('/dubai/') ||
    path.includes('/brands/') ||
    path.includes('/coverage-area/') ||
    path.includes('/location/') ||
    path.includes('-in-dubai') ||
    path.includes('repair-in-') ||
    path.includes('service-in-')
  );
}

/* Master Adaptive Fallback that dynamically renders the pixel-matching skeleton */
export const AdaptiveFallback = () => {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  
  if (pathname === '/' || pathname === '' || pathname === '/home') {
    return <HomeHeroSkeleton />;
  }
  if (isTextPageRoute(pathname)) {
    return <TextPageSkeleton />;
  }
  if (isPageHeroRoute(pathname)) {
    return <PageHeroSkeleton />;
  }
  return <ServiceHeroSkeleton />;
};

AdaptiveFallback.displayName = 'AdaptiveFallback';

/* withSuspense HoC with Zero-CLS Adaptive Skeleton */
export const withSuspense = (Component) => {
  const WrappedComponent = (props) => (
    <Suspense fallback={<AdaptiveFallback />}>
      <Component {...props} />
    </Suspense>
  );

  WrappedComponent.displayName = `withSuspense(${Component.displayName || Component.name || 'Component'})`;

  WrappedComponent.preload = () => {
    if (Component && Component._init && Component._payload) {
      try {
        Component._init(Component._payload);
      } catch (p) {
        return p;
      }
    }
  };

  return WrappedComponent;
};
