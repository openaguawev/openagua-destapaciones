import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

/**
 * Endpoint para captura de leads (procedente de formularios de contacto)
 * Envía email real usando nodemailer + Gmail SMTP
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, email, telefono, servicio, mensaje, source } = body;

    // Validación básica
    if (!nombre || !telefono) {
      return NextResponse.json(
        { error: 'Faltan campos obligatorios (nombre, telefono)' },
        { status: 400 }
      );
    }

    const timestamp = new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' });

    // Enviar email real si hay credenciales configuradas
    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      });

      const mailOptions = {
        from: process.env.GMAIL_USER,
        to: 'destapacionesopenagua@gmail.com',
        subject: `NUEVO LEAD WEB: ${nombre} — ${servicio || 'Sin servicio especificado'}`,
        html: `
          <h2>Nuevo lead desde la página web</h2>
          <table style="border-collapse: collapse; width: 100%; max-width: 500px;">
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Fecha</td><td style="padding: 8px; border: 1px solid #ddd;">${timestamp}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Nombre</td><td style="padding: 8px; border: 1px solid #ddd;">${nombre}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Teléfono</td><td style="padding: 8px; border: 1px solid #ddd;"><a href="tel:${telefono}">${telefono}</a></td></tr>
            ${email ? `<tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td><td style="padding: 8px; border: 1px solid #ddd;">${email}</td></tr>` : ''}
            ${servicio ? `<tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Servicio</td><td style="padding: 8px; border: 1px solid #ddd;">${servicio}</td></tr>` : ''}
            ${mensaje ? `<tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Mensaje</td><td style="padding: 8px; border: 1px solid #ddd;">${mensaje}</td></tr>` : ''}
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Origen</td><td style="padding: 8px; border: 1px solid #ddd;">${source || 'direct'}</td></tr>
          </table>
        `,
      };

      await transporter.sendMail(mailOptions);
    } else {
      // Fallback: log para entornos sin credenciales
      console.log('Lead recibido (sin credenciales SMTP configuradas):', {
        timestamp,
        nombre,
        email,
        telefono,
        servicio,
        mensaje,
        source: source || 'direct'
      });
    }

    return NextResponse.json(
      { message: 'Lead capturado con éxito', leadId: crypto.randomUUID() },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error procesando lead:', error);
    return NextResponse.json(
      { error: 'Error interno al procesar el lead' },
      { status: 500 }
    );
  }
}
