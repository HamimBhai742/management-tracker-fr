import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { baseUrl } from './hooks/useAxiosSecure';

export async function proxy(request: NextRequest) {
  const cookieStore = await cookies();
  const token = cookieStore.get('accessToken')?.value;
  console.log(token);
  if (!token) {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }
  try {
    //Call your backend to verify token

    const res = await fetch(`${baseUrl}/auth/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
      credentials: 'include',
      cache: 'no-store',
    });
    if (!res.ok) {
      // Backend bolse token invalid/expired
      return NextResponse.redirect(new URL('/sign-in', request.url));
    }
    //Valid token → continue
    return NextResponse.next();
  } catch (err) {
    console.log(err);
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }
}

export const config = {
  matcher: ['/dashboard/:path*'], // protect dashboard routes
};