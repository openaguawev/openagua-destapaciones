import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { nombre, telefono, servicio, descripcion, direccion } = data;

    // Configurar el transportador SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Configurar el email
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'destapacionesopenagua@gmail.com',
      subject: `NUEVO CONTACTO WEB: ${nombre}`,
      html: `
        <h2>Nuevo contacto desde la página web</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Teléfono:</strong> <a href="tel:${telefono}">${telefono}</a></p>
        <p><strong>Dirección/Localidad:</strong> ${direccion}</p>
        <p><strong>Servicio solicitado:</strong> ${servicio}</p>
        <br/>
        <h3>Mensaje:</h3>
        <p>${descripcion.replace(/\n/g, '<br/>')}</p>
      `,
    };

    // Enviar el email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
