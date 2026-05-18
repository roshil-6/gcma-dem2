import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { getConfiguredAdminPassword, normalizeAdminPassword } from '@/lib/admin-auth'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const submitted = normalizeAdminPassword(
      typeof body?.password === 'string' ? body.password : ''
    )

    const adminPassword = getConfiguredAdminPassword()
    if (!adminPassword) {
      return NextResponse.json(
        { error: 'Admin login is not configured (set ADMIN_PASSWORD).' },
        { status: 503 }
      )
    }

    if (submitted.length === 0) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
    }

    if (submitted === adminPassword) {
      const cookieStore = await cookies()
      cookieStore.set('admin-auth', adminPassword, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 30 // 30 days - admin stays logged in
      })

      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json(
        { error: 'Invalid password' },
        { status: 401 }
      )
    }
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Login failed' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  const cookieStore = await cookies()
  cookieStore.set('admin-auth', '', {
    path: '/',
    maxAge: 0,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
  })
  return NextResponse.json({ success: true })
}
