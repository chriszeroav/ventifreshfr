import { EmailTemplate } from "@/components/templates";
import { Resend } from "resend";
import z from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.email(),
  message: z.string().min(10),
});

export async function POST(req: Request) {
  const body = await req.json();

  const parsedBody = contactSchema.safeParse(body);

  if (!parsedBody.success) {
    return Response.json({
      data: null,
      success: false,
      error: "Error al validar los datos",
    });
  }

  const { name, email, message } = parsedBody.data;

  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["chris.zeroav@gmail.com"],
      subject: "Mensaje de prueba desde Ventifresh FR",
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      return Response.json({
        data: null,
        success: false,
        error: "Error al enviar el correo",
      });
    }

    return Response.json({
      data: "Mensaje enviado exitosamente",
      success: true,
      error: null,
    });
  } catch (error) {
    return Response.json({
      data: null,
      success: false,
      error: "Error interno del servidor",
    });
  }
}
