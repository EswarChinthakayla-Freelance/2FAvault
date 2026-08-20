/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL?: string;
  readonly VITE_PUBLIC_SITE_URL?: string;
  readonly VITE_GOOGLE_SITE_VERIFICATION?: string;
  readonly VITE_PLAY_STORE_URL?: string;
  readonly VITE_LATEST_APK_URL?: string;
}

declare const __VERCEL_ENV__: string;

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
