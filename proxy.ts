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

export const config = { matcher: "/((?!api|_next|favicon.ico).*)" };
