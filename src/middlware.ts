import { NextRequest, NextResponse } from "next/server";
import css from "styled-jsx/css";

export function middleware(request: NextRequest) {
  console.log("미들웨어 실행중");
  if (request.nextUrl.pathname.startsWith("/products/1004")) {
    console.log("미들웨어 - 경로를 리다이렉팅함");
    return NextResponse.redirect(new URL("/products", request.url));
  }
}

export const config = {
  matcher: ["/products/:path*"],
};
