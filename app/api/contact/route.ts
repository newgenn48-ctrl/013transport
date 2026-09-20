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

// Formulierinvoer komt ongefilterd van buiten en gaat hieronder de HTML van
// twee mails in. Zonder escaping kan iemand daar eigen opmaak en links in
// injecteren: zowel in de mail naar kantoor als in de bevestigingsmail, die
// vanaf ons eigen domein bij een zelfgekozen adres binnenkomt.
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Escapen gebeurt voor het omzetten van newlines, anders worden de <br>-tags
// die we zelf toevoegen alsnog geescaped.
function escapeHtmlMultiline(value: string): string {
  return escapeHtml(value).replace(/\r?\n/g, '<br>');
}

// Geen witruimte, komma's, puntkomma's, punthaken of aanhalingstekens: die
// kunnen in een adresheader een extra ontvanger of een display name smokkelen.
const EMAIL_PATTERN = /^[^\s@,;:<>"'\\]+@[^\s@,;:<>"'\\]+\.[^\s@,;:<>"'\\]+$/;

const MAX_LENGTH = {
  naam: 200,
  email: 254,
  telefoon: 50,
  bericht: 5000,
} as const;

// JSON levert niet per se strings op, dus alles wat geen string is telt als
// leeg. Controltekens gaan eruit omdat CR/LF in een headerwaarde een nieuwe
// header kan beginnen; alleen in het berichtveld blijven newlines staan.
function readField(value: unknown, max: number, multiline = false): string {
  if (typeof value !== 'string') return '';
  const stripped = multiline
    ? value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    : value.replace(/[\u0000-\u001F\u007F]/g, ' ');
  return stripped.trim().slice(0, max);
}

export async function POST(request: NextRequest) {
  try {
    const body: unknown = await request.json();

    if (typeof body !== 'object' || body === null) {
      return NextResponse.json(
        { error: 'Ongeldige aanvraag' },
        { status: 400 }
      );
    }

    const fields = body as Record<string, unknown>;
    const naam = readField(fields.naam, MAX_LENGTH.naam);
    const email = readField(fields.email, MAX_LENGTH.email);
    const telefoon = readField(fields.telefoon, MAX_LENGTH.telefoon);
    const bericht = readField(fields.bericht, MAX_LENGTH.bericht, true);

    // Validatie
    if (!naam || !email || !bericht) {
      return NextResponse.json(
        { error: 'Naam, email en bericht zijn verplicht' },
        { status: 400 }
      );
    }

    if (!EMAIL_PATTERN.test(email)) {
      return NextResponse.json(
        { error: 'Vul een geldig e-mailadres in' },
        { status: 400 }
      );
    }

    const naamHtml = escapeHtml(naam);
    const emailHtml = escapeHtml(email);
    const telefoonHtml = telefoon ? escapeHtml(telefoon) : 'Niet opgegeven';
    const berichtHtml = escapeHtmlMultiline(bericht);

    // Email naar 013Transport
    await transporter.sendMail({
      from: '"013Transport Website" <info@013transport.eu>',
      to: 'info@013transport.eu',
      replyTo: email,
      subject: `Nieuw contactformulier: ${naam}`,
      html: `
        <h2>Nieuw bericht via contactformulier</h2>
        <p><strong>Naam:</strong> ${naamHtml}</p>
        <p><strong>Email:</strong> ${emailHtml}</p>
        <p><strong>Telefoon:</strong> ${telefoonHtml}</p>
        <hr>
        <p><strong>Bericht:</strong></p>
        <p>${berichtHtml}</p>
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
            <img src="https://013transport.eu/013Transport.webp" alt="013Transport Logo" style="width: 120px; height: auto; margin-bottom: 15px;">
            <h1 style="color: white; margin: 0;">013Transport</h1>
          </div>
          <div style="padding: 30px; background-color: #f9f9f9;">
            <h2 style="color: #6d4233;">Bedankt voor je bericht, ${naamHtml}!</h2>
            <p>We hebben je bericht ontvangen en nemen zo snel mogelijk contact met je op.</p>
            <p>Wil je sneller antwoord? Neem dan contact op via WhatsApp:</p>
            <p style="text-align: center; margin: 20px 0;">
              <a href="https://wa.me/31686411124" style="background-color: #25D366; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold;">
                WhatsApp ons
              </a>
            </p>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
            <p style="color: #666; font-size: 14px;"><strong>Je bericht:</strong></p>
            <p style="color: #666; font-size: 14px; background: white; padding: 15px; border-radius: 8px;">${berichtHtml}</p>
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
