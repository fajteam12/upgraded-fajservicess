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

/* Global Shimmer Styles & Critical Skeleton Layout (Self-contained so it never waits for async CSS) */
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
    .faj-service-skel-hero {
      width: 100%;
      background: #ffffff;
      padding-block: clamp(1.75rem, 3.2vw, 2.75rem);
      position: relative;
      overflow: hidden;
      box-sizing: border-box;
    }
    .faj-service-skel-container {
      width: 100%;
      max-width: 1440px;
      margin-inline: auto;
      padding-inline: 32px;
      box-sizing: border-box;
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      align-items: center;
      gap: clamp(2rem, 4.5vw, 4rem);
    }
    .faj-service-skel-content {
      min-width: 0;
      display: flex;
      flex-direction: column;
    }
    .faj-service-skel-media-wrap {
      width: 100%;
      display: flex;
      justifyContent: center;
    }
    .faj-service-skel-media {
      width: 100%;
      max-width: 600px;
      aspect-ratio: 4 / 3;
      border-radius: 12px;
      overflow: hidden;
    }
    .faj-service-skel-highlights {
      display: flex;
      gap: 16px;
      margin-top: 14px;
      margin-bottom: 20px;
      flex-wrap: wrap;
    }
    .faj-service-skel-actions {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }
    @media (max-width: 991px) {
      .faj-service-skel-container {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
      .faj-service-skel-media {
        max-width: 650px;
        margin-inline: auto;
      }
    }
    @media (max-width: 768px) {
      .faj-service-skel-hero {
        padding-block: clamp(1.25rem, 3vw, 2rem);
      }
      .faj-service-skel-container {
        padding-inline: 16px;
        gap: 1.5rem;
      }
    }
  `}</style>
);

/* 1. Service, Repair, Brand, & Location Pages: Zero-CLS Skeleton matching AboutHeroSection */
export const ServiceHeroSkeleton = () => (
  <section className="faj-service-skel-hero" aria-hidden="true">
    <ShimmerStyles />
    <div className="faj-service-skel-container">
      <div className="faj-service-skel-content">
        {/* Title */}
        <div className="faj-bone" style={{ width: '85%', maxWidth: '480px', height: '36px', marginBottom: '14px', borderRadius: '6px' }} />
        
        {/* Paragraph (matches 1-paragraph real content) */}
        <div className="faj-bone" style={{ width: '96%', maxWidth: '540px', height: '16px', marginBottom: '10px', borderRadius: '4px' }} />
        <div className="faj-bone" style={{ width: '82%', maxWidth: '440px', height: '16px', marginBottom: '18px', borderRadius: '4px' }} />

        {/* Highlights Row */}
        <div className="faj-service-skel-highlights">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div className="faj-bone" style={{ width: '32px', height: '32px', borderRadius: '6px', flexShrink: 0 }} />
            <div>
              <div className="faj-bone" style={{ width: '120px', height: '13px', marginBottom: '4px', borderRadius: '3px' }} />
              <div className="faj-bone" style={{ width: '140px', height: '11px', borderRadius: '3px' }} />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div className="faj-bone" style={{ width: '32px', height: '32px', borderRadius: '6px', flexShrink: 0 }} />
            <div>
              <div className="faj-bone" style={{ width: '125px', height: '13px', marginBottom: '4px', borderRadius: '3px' }} />
              <div className="faj-bone" style={{ width: '135px', height: '11px', borderRadius: '3px' }} />
            </div>
          </div>
        </div>

        {/* Actions (WhatsApp button) */}
        <div className="faj-service-skel-actions">
          <div className="faj-bone" style={{ width: '160px', height: '46px', borderRadius: '24px' }} />
        </div>
      </div>

      {/* Media Box matching exact 4:3 aspect ratio */}
      <div className="faj-service-skel-media-wrap">
        <div className="faj-service-skel-media">
          <div className="faj-bone" style={{ width: '100%', height: '100%', borderRadius: '12px' }} />
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
