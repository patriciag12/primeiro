export function protectResponse(response: Response, requestUrl: string): Response {
  const headers = new Headers(response.headers);
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=(), payment=()");
  // TanStack hydration and the editor have inline scripts; do not introduce an untested script-src restriction.
  headers.set("Content-Security-Policy", "object-src 'none'; base-uri 'self'; form-action 'none'; frame-ancestors 'self' https://lovable.dev https://*.lovable.dev https://*.lovable.app");
  if (new URL(requestUrl).protocol === "https:") {
    headers.set("Strict-Transport-Security", "max-age=31536000");
  }
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}