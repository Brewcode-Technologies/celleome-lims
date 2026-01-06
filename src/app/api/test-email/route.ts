import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET() {
  try {
    console.log('Testing email configuration...');
    console.log('EMAIL_USER:', process.env.EMAIL_USER);
    console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? 'Set' : 'Not set');

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'annaboinalaxman6@gmail.com',
      subject: 'Test Email - Contact Form Setup',
      html: `
        <h2>Test Email</h2>
        <p>This is a test email to verify the contact form setup is working.</p>
        <p><strong>Sent at:</strong> ${new Date().toISOString()}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log('Test email sent successfully!');

    return NextResponse.json({
      success: true,
      message: 'Test email sent successfully to annaboinalaxman6@gmail.com'
    });

  } catch (error) {
    console.error('Test email failed:', error);
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}