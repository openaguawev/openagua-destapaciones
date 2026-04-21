import { NextResponse } from 'next/server';

/**
 * Endpoint para captura de leads (procedente de formularios de contacto)
 * TODO: Integrar con CRM o servicio de notificaciones (Slack/Email)
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

    console.log('Lead recibido:', {
      timestamp: new Date().toISOString(),
      nombre,
      email,
      telefono,
      servicio,
      mensaje,
      source: source || 'direct'
    });

    // Simulamos éxito
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
