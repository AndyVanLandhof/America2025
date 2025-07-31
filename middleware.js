export function middleware(req) {
  const basicAuth = req.headers.get('authorization')

  const USER = 'admin'
  const PASS = '260501'

  if (basicAuth) {
    const [scheme, encoded] = basicAuth.split(' ')
    const decoded = atob(encoded)
    const [user, pass] = decoded.split(':')

    if (user === USER && pass === PASS) {
      return new Response(null, { status: 200 })
    }
  }

  return new Response('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  })
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
} 