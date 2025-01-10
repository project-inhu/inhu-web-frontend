// middleware.ts
import { NextResponse } from 'next/server';

export function middleware(request: Request) {
  const url = new URL(request.url);
  if (url.pathname === '/') {
    url.pathname = '/main'; // '/main' 경로로 변경
    return NextResponse.redirect(url);
  }
}
