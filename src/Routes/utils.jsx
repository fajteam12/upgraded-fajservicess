import { Suspense } from "react";

const spinnerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '220px',
  width: '100%',
  animation: 'faj-spinner-fade 0.25s ease 0.18s both',
};

const circleStyle = {
  width: '40px',
  height: '40px',
  border: '3px solid #e8e8e8',
  borderTop: '3px solid #2e6da4',
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

/* 1. Hero Skeleton for Services, Brands, and Locations (Light 2-column) */
export const HeroSkeleton = () => (
  <div className="faj-page-skeleton" aria-hidden="true">
    <style>{`
      @keyframes faj-skeleton-shimmer {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }
      @keyframes faj-skeleton-fade {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      .faj-page-skeleton {
        width: 100%;
        min-height: calc(100vh - 80px);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        animation: faj-skeleton-fade 0.2s ease 0.08s both;
      }
      .faj-hero-skeleton {
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding-block: clamp(1.75rem, 3.2vw, 2.75rem);
        padding-inline: clamp(16px, 3vw, 32px);
        box-sizing: border-box;
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        align-items: center;
        gap: clamp(2rem, 4.5vw, 4rem);
      }
      .faj-skeleton-bone {
        background: linear-gradient(90deg, #edf2f5 25%, #f7f9fa 50%, #edf2f5 75%);
        background-size: 200% 100%;
        animation: faj-skeleton-shimmer 1.6s ease-in-out infinite;
        border-radius: 8px;
      }
      .faj-skeleton-left {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .faj-skeleton-badge {
        width: 130px;
        height: 18px;
        border-radius: 4px;
        margin-bottom: 8px;
      }
      .faj-skeleton-title-1 {
        width: 92%;
        height: 36px;
        border-radius: 6px;
      }
      .faj-skeleton-title-2 {
        width: 68%;
        height: 36px;
        border-radius: 6px;
        margin-bottom: 8px;
      }
      .faj-skeleton-text-1 {
        width: 98%;
        height: 14px;
        border-radius: 4px;
      }
      .faj-skeleton-text-2 {
        width: 94%;
        height: 14px;
        border-radius: 4px;
      }
      .faj-skeleton-text-3 {
        width: 78%;
        height: 14px;
        border-radius: 4px;
        margin-bottom: 12px;
      }
      .faj-skeleton-actions {
        display: flex;
        gap: 14px;
        margin-top: 8px;
        flex-wrap: wrap;
      }
      .faj-skeleton-btn {
        width: 145px;
        height: 48px;
        border-radius: 30px;
      }
      .faj-skeleton-right {
        display: flex;
        justifyContent: center;
        width: 100%;
      }
      .faj-skeleton-media {
        width: 100%;
        max-width: 580px;
        aspect-ratio: 4 / 3;
        border-radius: 20px;
      }
      .faj-skeleton-sub {
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        padding-inline: clamp(16px, 3vw, 32px);
        padding-top: 1rem;
        display: flex;
        flex-direction: column;
        gap: 14px;
        flex: 1;
      }
      .faj-skeleton-breadcrumb {
        width: 220px;
        height: 20px;
        border-radius: 4px;
      }
      .faj-skeleton-sub-line {
        width: 60%;
        height: 16px;
        border-radius: 4px;
      }
      @media (max-width: 1023px) {
        .faj-hero-skeleton {
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        .faj-skeleton-media {
          max-width: 100%;
        }
      }
    `}</style>

    <div className="faj-hero-skeleton">
      <div className="faj-skeleton-left">
        <div className="faj-skeleton-badge faj-skeleton-bone" />
        <div className="faj-skeleton-title-1 faj-skeleton-bone" />
        <div className="faj-skeleton-title-2 faj-skeleton-bone" />
        <div className="faj-skeleton-text-1 faj-skeleton-bone" />
        <div className="faj-skeleton-text-2 faj-skeleton-bone" />
        <div className="faj-skeleton-text-3 faj-skeleton-bone" />
        <div className="faj-skeleton-actions">
          <div className="faj-skeleton-btn faj-skeleton-bone" />
          <div className="faj-skeleton-btn faj-skeleton-bone" style={{ width: '165px' }} />
        </div>
      </div>

      <div className="faj-skeleton-right">
        <div className="faj-skeleton-media faj-skeleton-bone" />
      </div>
    </div>

    <div className="faj-skeleton-sub">
      <div className="faj-skeleton-breadcrumb faj-skeleton-bone" />
      <div className="faj-skeleton-sub-line faj-skeleton-bone" />
    </div>
  </div>
);

HeroSkeleton.displayName = 'HeroSkeleton';

/* 2. Page Hero Skeleton for About, Contact, Blogs, Career, and Info Pages (Dark Navy Banner) */
export const PageHeroSkeleton = () => (
  <div className="faj-page-hero-skeleton-wrapper" aria-hidden="true">
    <style>{`
      @keyframes faj-dark-shimmer {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }
      @keyframes faj-light-shimmer {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }
      @keyframes faj-page-hero-fade {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      .faj-page-hero-skeleton-wrapper {
        width: 100%;
        min-height: calc(100vh - 80px);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        animation: faj-page-hero-fade 0.2s ease 0.08s both;
      }
      .faj-page-hero-skeleton {
        position: relative;
        background: #0b1f2a;
        min-height: clamp(320px, 34vw, 420px);
        display: grid;
        place-items: center;
        width: 100%;
        overflow: hidden;
      }
      .faj-dark-bone {
        background: linear-gradient(90deg, rgba(255,255,255,0.06) 25%, rgba(255,255,255,0.14) 50%, rgba(255,255,255,0.06) 75%);
        background-size: 200% 100%;
        animation: faj-dark-shimmer 1.8s ease-in-out infinite;
        border-radius: 8px;
      }
      .faj-page-hero-skeleton-container {
        width: min(100% - 32px, 1180px);
        margin: 0 auto;
        padding: clamp(80px, 10vw, 132px) 0 clamp(40px, 6vw, 70px);
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 16px;
      }
      .faj-dark-eyebrow {
        width: 140px;
        height: 32px;
        border-radius: 999px;
        margin-bottom: 8px;
        background: linear-gradient(90deg, rgba(79, 195, 216, 0.15) 25%, rgba(79, 195, 216, 0.3) 50%, rgba(79, 195, 216, 0.15) 75%);
        background-size: 200% 100%;
        animation: faj-dark-shimmer 1.8s ease-in-out infinite;
      }
      .faj-dark-title-1 {
        width: min(100%, 680px);
        height: clamp(32px, 4.5vw, 48px);
        border-radius: 8px;
      }
      .faj-dark-title-2 {
        width: min(75%, 450px);
        height: clamp(32px, 4.5vw, 48px);
        border-radius: 8px;
      }
      .faj-dark-desc {
        width: min(85%, 580px);
        height: 18px;
        border-radius: 4px;
        margin-top: 10px;
      }
      .faj-page-hero-body-skeleton {
        width: min(100% - 32px, 1180px);
        margin: 0 auto;
        padding: clamp(2rem, 4vw, 3.5rem) 0;
        display: flex;
        flex-direction: column;
        gap: 20px;
        flex: 1;
      }
      .faj-body-bone {
        background: linear-gradient(90deg, #edf2f5 25%, #f7f9fa 50%, #edf2f5 75%);
        background-size: 200% 100%;
        animation: faj-light-shimmer 1.6s ease-in-out infinite;
        border-radius: 8px;
      }
      .faj-body-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
      }
      .faj-body-card {
        height: 180px;
        border-radius: 12px;
      }
      @media (max-width: 768px) {
        .faj-body-grid {
          grid-template-columns: 1fr;
        }
        .faj-body-card:nth-child(n+2) {
          display: none;
        }
      }
    `}</style>

    <div className="faj-page-hero-skeleton">
      <div className="faj-page-hero-skeleton-container">
        <div className="faj-dark-eyebrow" />
        <div className="faj-dark-bone faj-dark-title-1" />
        <div className="faj-dark-bone faj-dark-title-2" />
        <div className="faj-dark-bone faj-dark-desc" />
      </div>
    </div>

    <div className="faj-page-hero-body-skeleton">
      <div className="faj-body-bone" style={{ width: '220px', height: '24px', marginBottom: '8px' }} />
      <div className="faj-body-bone" style={{ width: '80%', height: '16px' }} />
      <div className="faj-body-bone" style={{ width: '65%', height: '16px', marginBottom: '16px' }} />
      <div className="faj-body-grid">
        <div className="faj-body-bone faj-body-card" />
        <div className="faj-body-bone faj-body-card" />
        <div className="faj-body-bone faj-body-card" />
      </div>
    </div>
  </div>
);

PageHeroSkeleton.displayName = 'PageHeroSkeleton';

/* 3. Home Hero Skeleton for Homepage (Dark Navy full-height hero) */
export const HomeHeroSkeleton = () => (
  <div className="faj-home-hero-skeleton-wrapper" aria-hidden="true">
    <style>{`
      @keyframes faj-home-shimmer {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }
      @keyframes faj-home-fade {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      .faj-home-hero-skeleton-wrapper {
        width: 100%;
        min-height: calc(100vh - 80px);
        background: #0b1f2a;
        display: flex;
        align-items: center;
        animation: faj-home-fade 0.2s ease 0.08s both;
      }
      .faj-home-hero-skeleton {
        width: min(100% - 32px, 1280px);
        margin-inline: auto;
        padding-block: clamp(70px, 9vw, 92px) 30px;
        box-sizing: border-box;
      }
      .faj-home-content-skeleton {
        width: min(100%, 680px);
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      .faj-home-bone {
        background: linear-gradient(90deg, rgba(255,255,255,0.06) 25%, rgba(255,255,255,0.14) 50%, rgba(255,255,255,0.06) 75%);
        background-size: 200% 100%;
        animation: faj-home-shimmer 1.8s ease-in-out infinite;
        border-radius: 8px;
      }
      .faj-home-eyebrow {
        width: 140px;
        height: 26px;
        border-radius: 999px;
        margin-bottom: 4px;
        background: linear-gradient(90deg, rgba(79, 195, 216, 0.15) 25%, rgba(79, 195, 216, 0.3) 50%, rgba(79, 195, 216, 0.15) 75%);
        background-size: 200% 100%;
        animation: faj-home-shimmer 1.8s ease-in-out infinite;
      }
      .faj-home-title-1 {
        width: 90%;
        height: clamp(30px, 5.2vw, 46px);
        border-radius: 8px;
      }
      .faj-home-title-2 {
        width: 76%;
        height: clamp(30px, 5.2vw, 46px);
        border-radius: 8px;
      }
      .faj-home-title-3 {
        width: 58%;
        height: clamp(30px, 5.2vw, 46px);
        border-radius: 8px;
        margin-bottom: 4px;
      }
      .faj-home-desc {
        width: 95%;
        height: 16px;
        border-radius: 4px;
      }
      .faj-home-desc-2 {
        width: 80%;
        height: 16px;
        border-radius: 4px;
        margin-bottom: 6px;
      }
      .faj-home-features {
        display: flex;
        flex-wrap: wrap;
        gap: 12px 20px;
        padding-block: 14px;
        border-block: 1px solid rgba(255, 255, 255, 0.12);
      }
      .faj-home-feature-pill {
        width: 170px;
        height: 20px;
        border-radius: 4px;
      }
      .faj-home-actions {
        display: flex;
        gap: 14px;
        margin-top: 10px;
        flex-wrap: wrap;
      }
      .faj-home-btn-1 {
        width: 190px;
        height: 50px;
        border-radius: 12px;
      }
      .faj-home-btn-2 {
        width: 180px;
        height: 50px;
        border-radius: 12px;
      }
      @media (max-width: 559px) {
        .faj-home-actions {
          flex-direction: column;
        }
        .faj-home-btn-1,
        .faj-home-btn-2 {
          width: 100%;
        }
      }
    `}</style>

    <div className="faj-home-hero-skeleton">
      <div className="faj-home-content-skeleton">
        <div className="faj-home-eyebrow" />
        <div className="faj-home-bone faj-home-title-1" />
        <div className="faj-home-bone faj-home-title-2" />
        <div className="faj-home-bone faj-home-title-3" />
        <div className="faj-home-bone faj-home-desc" />
        <div className="faj-home-bone faj-home-desc-2" />
        <div className="faj-home-features">
          <div className="faj-home-bone faj-home-feature-pill" />
          <div className="faj-home-bone faj-home-feature-pill" style={{ width: '190px' }} />
          <div className="faj-home-bone faj-home-feature-pill" style={{ width: '160px' }} />
        </div>
        <div className="faj-home-actions">
          <div className="faj-home-bone faj-home-btn-1" />
          <div className="faj-home-bone faj-home-btn-2" />
        </div>
      </div>
    </div>
  </div>
);

HomeHeroSkeleton.displayName = 'HomeHeroSkeleton';



/* 4. Text Page Skeleton for Policy and Text-Only Pages (White, centered title + paragraph bones) */
export const TextPageSkeleton = () => (
  <div className="faj-text-page-skeleton" aria-hidden="true">
    <style>{`
      @keyframes faj-text-shimmer {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }
      @keyframes faj-text-fade {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      .faj-text-page-skeleton {
        width: 100%;
        min-height: calc(100vh - 80px);
        background: #ffffff;
        padding-top: 36px;
        padding-bottom: 60px;
        box-sizing: border-box;
        animation: faj-text-fade 0.2s ease 0.08s both;
      }
      .faj-text-container {
        width: min(100% - 32px, 1140px);
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .faj-text-bone {
        background: linear-gradient(90deg, #edf2f5 25%, #f7f9fa 50%, #edf2f5 75%);
        background-size: 200% 100%;
        animation: faj-text-shimmer 1.6s ease-in-out infinite;
        border-radius: 6px;
      }
      .faj-text-title {
        width: 240px;
        height: 36px;
        border-radius: 8px;
        margin-bottom: 36px;
      }
      .faj-text-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .faj-text-line {
        height: 14px;
        border-radius: 4px;
      }
    `}</style>

    <div className="faj-text-container">
      <div className="faj-text-bone faj-text-title" />
      <div className="faj-text-content">
        <div className="faj-text-bone faj-text-line" style={{ width: '100%' }} />
        <div className="faj-text-bone faj-text-line" style={{ width: '97%' }} />
        <div className="faj-text-bone faj-text-line" style={{ width: '94%' }} />
        <div className="faj-text-bone faj-text-line" style={{ width: '72%', marginBottom: '16px' }} />

        <div className="faj-text-bone faj-text-line" style={{ width: '98%' }} />
        <div className="faj-text-bone faj-text-line" style={{ width: '95%' }} />
        <div className="faj-text-bone faj-text-line" style={{ width: '88%', marginBottom: '16px' }} />

        <div className="faj-text-bone" style={{ width: '220px', height: '20px', marginBottom: '10px' }} />
        <div className="faj-text-bone faj-text-line" style={{ width: '100%' }} />
        <div className="faj-text-bone faj-text-line" style={{ width: '96%' }} />
        <div className="faj-text-bone faj-text-line" style={{ width: '65%' }} />
      </div>
    </div>
  </div>
);

TextPageSkeleton.displayName = 'TextPageSkeleton';

export function isServiceOrLocationOrBrandRoute(pathname = '') {
  if (!pathname) return false;
  const path = pathname.toLowerCase();

  // Exclude non-service pages
  if (
    path === '/' ||
    path === '' ||
    path.startsWith('/about') ||
    path.startsWith('/who-we-are') ||
    path.startsWith('/our-') ||
    path.startsWith('/career') ||
    path.startsWith('/blog') ||
    path.startsWith('/contact') ||
    path.startsWith('/portfolio') ||
    path.startsWith('/privacy') ||
    path.startsWith('/refund') ||
    path.startsWith('/terms') ||
    path.startsWith('/ac-tonnage-calculator') ||
    path.startsWith('/faqs') ||
    path.startsWith('/orphan')
  ) {
    return false;
  }

  // Service, brand, coverage area, and location routes
  if (
    path.startsWith('/services') ||
    path.startsWith('/dubai/') ||
    path.includes('/brands/') ||
    path.includes('/coverage-area/') ||
    path.includes('/location/') ||
    path.includes('-in-dubai') ||
    path.includes('repair-in-') ||
    path.includes('service-in-')
  ) {
    return true;
  }

  return false;
}

export function isTextPageRoute(pathname = '') {
  if (!pathname) return false;
  const path = pathname.toLowerCase();
  return (
    path.startsWith('/privacy') ||
    path.startsWith('/refund') ||
    path.startsWith('/terms')
  );
}

export function isPageHeroRoute(pathname = '') {
  if (!pathname) return false;
  const path = pathname.toLowerCase();

  return (
    path.startsWith('/who-we-are') ||
    path.startsWith('/our-vision') ||
    path.startsWith('/our-history') ||
    path.startsWith('/career') ||
    path.startsWith('/blogs') ||
    path.startsWith('/contact') ||
    path.startsWith('/our-portfolio') ||
    path.startsWith('/b2b-services') ||
    path === '/services' ||
    path === '/services/'
  );
}

export const AdaptiveFallback = () => {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  if (pathname === '/' || pathname === '') {
    return <HomeHeroSkeleton />;
  }
  if (isTextPageRoute(pathname)) {
    return <TextPageSkeleton />;
  }
  if (isServiceOrLocationOrBrandRoute(pathname)) {
    return <HeroSkeleton />;
  }
  if (isPageHeroRoute(pathname)) {
    return <PageHeroSkeleton />;
  }
  return <LoadingSpinner />;
};

AdaptiveFallback.displayName = 'AdaptiveFallback';

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
