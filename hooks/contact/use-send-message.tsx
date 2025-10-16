import { ContactFormValues } from "@/types";
import { useState } from "react";
import { toast } from "sonner";

export const useSendMessage = (): [
  (values: ContactFormValues) => Promise<void>,
  boolean
] => {
  const [loading, setLoading] = useState(false);

  const sendMessage = async (values: ContactFormValues) => {
    setLoading(true);
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (data.success) {
        toast.success(
          data.data || "¡Mensaje enviado exitosamente! Te responderemos pronto."
        );
      } else {
        toast.error(data.error || "Error al enviar el mensaje");
        throw new Error(data.error);
      }
    } catch (error) {
      if (!(error instanceof Error && error.message)) {
        toast.error("Error de conexión");
      }
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return [sendMessage, loading];
};
