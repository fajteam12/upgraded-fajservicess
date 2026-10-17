import React, { lazy, Suspense, memo } from "react";

// Eager exports: Hero sections (first component on page), metadata, and hooks
export { default as AboutHeroSection } from "./AboutHeroSection";
export { default as SplitHeroSection } from "./SplitHeroSection";
export { default as PageMetadata } from "./PageMetadata";
export { default as useBookingRequest } from "./useBookingRequest";

function lazySection(factory) {
  const LazyComponent = lazy(factory);
  const LazyWrapper = (props) =>
    React.createElement(
      Suspense,
      { fallback: null },
      React.createElement(LazyComponent, props)
    );
  return memo(LazyWrapper);
}

export const AccordionSection = lazySection(() => import("./AccordionSection"));
export const ActionCardsSection = lazySection(() => import("./ActionCardsSection"));
export const BeforeAfterSection = lazySection(() => import("./BeforeAfterSection"));
export const BookingModal = lazySection(() => import("./BookingModal"));
export const BookingSection = lazySection(() => import("./BookingSection"));
export const ModernBookingSection = lazySection(() => import("./ModernBookingSection"));
export const ChecklistSection = lazySection(() => import("./ChecklistSection"));
export const CalloutBannerSection = lazySection(() => import("./CalloutBannerSection"));
export const ContentCardSection = lazySection(() => import("./ContentCardSection"));
export const ContentGridSection = lazySection(() => import("./ContentGridSection"));
export const DetailColumnsSection = lazySection(() => import("./DetailColumnsSection"));
export const EmbeddedVideoSection = lazySection(() => import("./EmbeddedVideoSection"));
export const FeatureDetailSection = lazySection(() => import("./FeatureDetailSection"));
export const MediaGallerySection = lazySection(() => import("./MediaGallerySection"));
export const MetricCardsSection = lazySection(() => import("./MetricCardsSection"));
export const NoticeBarSection = lazySection(() => import("./NoticeBarSection"));
export const NumberedGridSection = lazySection(() => import("./NumberedGridSection"));
export const PlanCardsSection = lazySection(() => import("./PlanCardsSection"));
export const PricingCardsSection = lazySection(() => import("./PricingCardsSection"));
export const PricingTableSection = lazySection(() => import("./PricingTableSection"));
export const ProblemSolutionSection = lazySection(() => import("./ProblemSolutionSection"));
export const ProcessCardsSection = lazySection(() => import("./ProcessCardsSection"));
export const ResourceCTASection = lazySection(() => import("./ResourceCTASection"));
export const SearchableDirectorySection = lazySection(() => import("./SearchableDirectorySection"));
export const ServiceTabsNav = lazySection(() => import("./ServiceTabsNav"));
export const SplitListSection = lazySection(() => import("./SplitListSection"));
export const SplitMediaSection = lazySection(() => import("./SplitMediaSection"));
export const SpotlightSection = lazySection(() => import("./SpotlightSection"));
export const StackedServicesPanelSection = lazySection(() => import("./StackedServicesPanelSection"));
export const TestimonialsSection = lazySection(() => import("./TestimonialsSection"));
export const TwoColumnInfoSection = lazySection(() => import("./TwoColumnInfoSection"));