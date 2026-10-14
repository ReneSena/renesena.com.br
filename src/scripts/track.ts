/** Envia evento ao Umami se disponível (no-op com adblock / sem ID). */
export function track(event: string, data?: Record<string, string | number>) {
  try {
    window.umami?.track(event, data);
  } catch {
    /* analytics nunca deve quebrar a página */
  }
}
