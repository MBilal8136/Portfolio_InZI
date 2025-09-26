import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import emailjs from '@emailjs/browser'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      )
    }

    // Save to database
    const contactMessage = await prisma.contactMessage.create({
      data: {
        name,
        email,
        message
      }
    })

    // Send email notification (optional - you can remove this if you only want to save to database)
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      if (serviceId && templateId && publicKey) {
        const templateParams = {
          from_name: name,
          from_email: email,
          message: message,
          to_email: 'Info.inzisandhu@gmail.com',
        }

        await emailjs.send(serviceId, templateId, templateParams, publicKey)
      }
    } catch (emailError) {
      console.error('Email sending failed:', emailError)
      // Don't fail the request if email fails
    }

    return NextResponse.json({
      message: 'Message sent successfully',
      id: contactMessage.id
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}
