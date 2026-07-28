// Augment the global Window type for analytics helpers that load
// asynchronously via gtag.js / plausible / cloudflare beacon.
export {};

declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "set",
      eventName: string,
      params?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}