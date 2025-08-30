import { NextRequest, NextResponse } from "next/server";

export default async function middleware(
  request: NextRequest,
): Promise<NextResponse> {
  if (!request.cookies) return NextResponse.next();
  const sessionCookie = request.cookies.get(process.env.SESSION_COOKIE!);

  if (sessionCookie) return NextResponse.next();

  if (
    request.nextUrl.pathname.startsWith("/login") ||
    request.nextUrl.pathname.startsWith("/signup") ||
    request.nextUrl.pathname.startsWith("/_next")
  ) {
    return NextResponse.next();
  }

  if (!sessionCookie) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// not needed for now as only one redirect is needed
// export const config = {
//     matcher: ['/:path'],
// }
