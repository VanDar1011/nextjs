import { getSession } from "./lib/session";
import { NextResponse } from "next/server";
export const middleware = async (req) => {
  const session = await getSession();
  console.log("session", session);
  if (!session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return null;
};
export const config = {
  // matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
  matcher: ["/", "/profile"],
};
