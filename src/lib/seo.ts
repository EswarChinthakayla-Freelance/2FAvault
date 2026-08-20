import { SITE_CONFIG } from '../content/site';

export type PageMetadata = {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: string;
  robots?: 'index, follow' | 'noindex, nofollow';
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
};

const DEFAULT_TITLE = '2FA Vault — Offline TOTP Authenticator & Secure Recovery';
const DEFAULT_DESCRIPTION =
  'Generate 2FA TOTP codes offline and protect recovery credentials together in one zero-knowledge encrypted vault on your Android device.';
const DEFAULT_IMAGE = SITE_CONFIG.ogImage;
const SITE_URL = SITE_CONFIG.url;

export function updatePageMetadata({
  title,
  description,
  canonical,
  image,
  type = 'website',
  robots,
  structuredData,
}: PageMetadata) {
  const fullTitle = title ? `${title} · 2FA Vault` : DEFAULT_TITLE;
  const metaDescription = description || DEFAULT_DESCRIPTION;
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL;
  const ogImage = image || DEFAULT_IMAGE;
  const isPreview = __VERCEL_ENV__ === 'preview' || __VERCEL_ENV__ === 'development';
  const robotsValue = isPreview ? 'noindex, nofollow' : robots || 'index, follow';

  // Title
  document.title = fullTitle;

  // Update Meta tags
  const setMeta = (name: string, content: string, isProperty = false) => {
    const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
    let element = document.querySelector(selector) as HTMLMetaElement | null;
    if (!element) {
      element = document.createElement('meta');
      if (isProperty) {
        element.setAttribute('property', name);
      } else {
        element.setAttribute('name', name);
      }
      document.head.appendChild(element);
    }
    element.content = content;
  };

  setMeta('description', metaDescription);
  setMeta('robots', robotsValue);
  setMeta('og:title', fullTitle, true);
  setMeta('og:description', metaDescription, true);
  setMeta('og:url', canonicalUrl, true);
  setMeta('og:image', ogImage, true);
  setMeta('og:type', type, true);
  setMeta('og:site_name', SITE_CONFIG.name, true);

  setMeta('twitter:title', fullTitle);
  setMeta('twitter:description', metaDescription);
  setMeta('twitter:image', ogImage);
  setMeta('twitter:url', canonicalUrl);
  setMeta('twitter:card', 'summary_large_image');

  const verification = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION;
  if (verification) setMeta('google-site-verification', verification);

  // Update Canonical Link
  let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!linkCanonical) {
    linkCanonical = document.createElement('link');
    linkCanonical.rel = 'canonical';
    document.head.appendChild(linkCanonical);
  }
  linkCanonical.href = canonicalUrl;

  document.querySelectorAll('script[data-seo-jsonld]').forEach((node) => node.remove());
  const schemas = structuredData ? (Array.isArray(structuredData) ? structuredData : [structuredData]) : [];
  schemas.forEach((schema) => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.dataset.seoJsonld = 'true';
    script.text = JSON.stringify(schema).replace(/</g, '\\u003c');
    document.head.appendChild(script);
  });
}
