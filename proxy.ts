import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const shouldRedirect =
    process.env.NODE_ENV === "production" || !host.includes("localhost");
  if (shouldRedirect && !host.startsWith("www.")) {
    const wwwUrl = new URL(request.url);
    wwwUrl.host = `www.${host}`;
    return NextResponse.redirect(wwwUrl, 301);
  }
}

// Run only on page navigations. Exclude API routes, Next internals, and any
// path containing a file extension (e.g. /logo-icon.png, /og-image.png,
// /images/*.png, /sitemap.xml, /robots.txt, /favicon.ico). This is critical:
// the next/image optimizer fetches its source image over HTTP, and if the proxy
// intercepts that fetch it can 301-redirect it (when the internal host is not
// "localhost"), which strips the content-type and makes the optimizer fail with
// "The requested resource isn't a valid image ... received null".
export const config = { matcher: "/((?!api|_next|.*\\..*).*)" };
