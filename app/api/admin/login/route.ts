import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { password } = body

    const adminPassword = process.env.ADMIN_PASSWORD?.trim() ?? ''
    if (!adminPassword) {
      return NextResponse.json(
        { error: 'Admin login is not configured (set ADMIN_PASSWORD).' },
        { status: 503 }
      )
    }

    if (password === adminPassword) {
      const cookieStore = await cookies()
      cookieStore.set('admin-auth', adminPassword, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
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
  cookieStore.delete('admin-auth')
  return NextResponse.json({ success: true })
}
