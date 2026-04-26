import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Lista de prefijos de rutas legacy de WordPress que deben devolver 410 Gone
  const wpLegacyPaths = [
    '/wp-content/',
    '/wp-admin/',
    '/wp-includes/',
    '/wp-login.php',
    '/wp-json/',
    '/xmlrpc.php',
    '/category/',
    '/tag/',
    '/feed/',
    '/comments/',
    '/trackback/',
  ];

  // Verificar si el pathname actual comienza con alguna de las rutas legacy
  const isLegacyPath = wpLegacyPaths.some(path => pathname.startsWith(path));

  if (isLegacyPath) {
    // Retornar una respuesta directa con estado 410 (Gone)
    return new NextResponse(null, { status: 410, statusText: 'Gone' });
  }

  // Continuar con la petición normal para el resto de rutas
  return NextResponse.next();
}

// Configurar el matcher para interceptar solo las rutas relevantes y optimizar el middleware
export const config = {
  matcher: [
    '/wp-content/:path*',
    '/wp-admin/:path*',
    '/wp-includes/:path*',
    '/wp-login.php',
    '/wp-json/:path*',
    '/xmlrpc.php',
    '/category/:path*',
    '/tag/:path*',
    '/feed/:path*',
    '/comments/:path*',
    '/trackback/:path*',
  ],
};
