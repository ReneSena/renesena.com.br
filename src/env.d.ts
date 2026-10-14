interface ImportMetaEnv {
  readonly PUBLIC_UMAMI_WEBSITE_ID?: string;
}
interface Window {
  umami?: { track: (event: string, data?: Record<string, string | number>) => void };
}
