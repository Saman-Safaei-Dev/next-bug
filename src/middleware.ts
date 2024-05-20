import { NextRequest, NextResponse } from "next/server";

export default function Middleware(request: NextRequest) {
  const cookie = request.cookies.get("token");
  
  if (cookie !== undefined && request.nextUrl.pathname === "/")
    return NextResponse.redirect(new URL("/dashboard", request.url));

  return NextResponse.next();
}
