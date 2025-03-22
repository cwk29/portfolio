import { NextResponse } from 'next/server'
import { EmailTemplate } from '@/components/email-template';
import { ethers } from 'ethers'
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { signature, message, formData } = await req.json()

    // Verify the signature
    const messageData = JSON.parse(message)
    const signerAddress = ethers.verifyMessage(message, signature)

    // Verify that the signer address matches the address in the message
    if (signerAddress.toLowerCase() !== messageData.walletAddress.toLowerCase()) {
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 400 }
      )
    }

    // Send email
    const { name, email, message: content } = formData
    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['cwk29@icloud.com'],
      subject: 'New Message',
      react: EmailTemplate({
        firstName: name,
        email: email,
        message: content,
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data)
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
} 