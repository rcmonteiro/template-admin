import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('admin-template-auth')?.value
 
  if (currentUser && request.nextUrl.pathname.startsWith('/auth')) {
    return Response.redirect(new URL('/', request.url))
  }
 
  if (!currentUser && !request.nextUrl.pathname.startsWith('/auth')) {
    return Response.redirect(new URL('/auth', request.url))
  }
}
 
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png|.*\\.svg$).*)'],
}