import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const { naam, email, telefoon, bericht } = await request.json();

    // Validatie
    if (!naam || !email || !bericht) {
      return NextResponse.json(
        { error: 'Naam, email en bericht zijn verplicht' },
        { status: 400 }
      );
    }

    // Email naar 013Transport
    await transporter.sendMail({
      from: '"013Transport Website" <info@013transport.eu>',
      to: 'info@013transport.eu',
      replyTo: email,
      subject: `Nieuw contactformulier: ${naam}`,
      html: `
        <h2>Nieuw bericht via contactformulier</h2>
        <p><strong>Naam:</strong> ${naam}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefoon:</strong> ${telefoon || 'Niet opgegeven'}</p>
        <hr>
        <p><strong>Bericht:</strong></p>
        <p>${bericht.replace(/\n/g, '<br>')}</p>
      `,
    });

    // Bevestigingsmail naar klant
    await transporter.sendMail({
      from: '"013Transport" <info@013transport.eu>',
      to: email,
      subject: 'Bedankt voor je bericht - 013Transport',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #6d4233; padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0;">013Transport</h1>
          </div>
          <div style="padding: 30px; background-color: #f9f9f9;">
            <h2 style="color: #6d4233;">Bedankt voor je bericht, ${naam}!</h2>
            <p>We hebben je bericht ontvangen en nemen zo snel mogelijk contact met je op.</p>
            <p>Wil je sneller antwoord? Neem dan contact op via WhatsApp:</p>
            <p style="text-align: center; margin: 20px 0;">
              <a href="https://wa.me/31686411124" style="background-color: #25D366; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold;">
                WhatsApp ons
              </a>
            </p>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
            <p style="color: #666; font-size: 14px;"><strong>Je bericht:</strong></p>
            <p style="color: #666; font-size: 14px; background: white; padding: 15px; border-radius: 8px;">${bericht.replace(/\n/g, '<br>')}</p>
          </div>
          <div style="background-color: #6d4233; padding: 20px; text-align: center;">
            <p style="color: white; margin: 0; font-size: 14px;">
              013Transport BV | 06 86 41 1124 | info@013transport.eu
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Er ging iets mis bij het versturen' },
      { status: 500 }
    );
  }
}
