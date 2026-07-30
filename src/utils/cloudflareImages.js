export const CLOUDFLARE_IMAGE_DELIVERY_URL =
  "https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA";

export const DEFAULT_CLOUDFLARE_VARIANTS = {
  mobile: 480,
  tablet: 768,
  desktop: 1200,
  large: 1600,
};

const isAbsoluteUrl = (value) =>
  /^https?:\/\//i.test(String(value || ""));

export const getCloudflareImageUrl = (
  imageId,
  variant = "public"
) => {
  if (!imageId) {
    return "";
  }

  if (isAbsoluteUrl(imageId)) {
    return imageId;
  }

  return `${CLOUDFLARE_IMAGE_DELIVERY_URL}/${imageId}/${variant}`;
};

export const getCloudflareImageSrcSet = (
  imageId,
  variants = DEFAULT_CLOUDFLARE_VARIANTS
) => {
  if (!imageId || isAbsoluteUrl(imageId)) {
    return undefined;
  }

  return Object.entries(variants)
    .map(([variant, width]) => {
      const url = getCloudflareImageUrl(imageId, variant);
      return `${url} ${width}w`;
    })
    .join(", ");
};