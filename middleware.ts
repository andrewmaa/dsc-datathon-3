import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get('auth-token')
  const { pathname } = request.nextUrl

  // Allow access to registration and login pages
  if (pathname === '/register' || pathname === '/login' || pathname === '/') {
    return NextResponse.next()
  }

  // Always check for authentication for all other routes
  if (!authToken) {
    const loginUrl = new URL('/login', request.url)
    loginUrl.searchParams.set('redirectTo', pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - spline directory within public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|spline).*)',
  ],
} 