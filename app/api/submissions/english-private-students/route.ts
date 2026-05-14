import { NextRequest, NextResponse } from 'next/server'
import { saveSubmission } from '@/lib/submissions'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const data: Record<string, string> = {}
    formData.forEach((value, key) => {
      data[key] = value.toString()
    })
    const submission = saveSubmission('english-private-students', data)
    return NextResponse.json({
      success: true,
      message: 'Inquiry submitted successfully',
      id: submission.id,
    })
  } catch (error) {
    console.error('Error saving english-private-students submission:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to submit inquiry' },
      { status: 500 }
    )
  }
}
