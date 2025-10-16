"use client";

import React, { FC } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/components/shadcn";
import { Textarea } from "@/components/shadcn/textarea";
import { ContactFormValues } from "@/types";
import { useSendMessage } from "@/hooks/contact";

const formSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres").max(50),
  email: z.email(),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

interface ContactProps {}

export const Contact: FC<ContactProps> = () => {
  const [sendMessage, loading] = useSendMessage();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    try {
      await sendMessage(values);
      form.reset();
    } catch (error) {
      console.error("Error sending message:", error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-8"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-neutral-500 ml-1">Nombre</FormLabel>
              <FormControl>
                <Input
                  className="h-12 bg-white shadow placeholder:text-neutral-400 text-neutral-900"
                  placeholder="Ingresa tu nombre"
                  disabled={loading}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center gap-1">
                <FormLabel className="text-neutral-500 ml-1">Correo*</FormLabel>
                <span className="text-xs text-primary-800">
                  (correo donde le llegara la respuesta)
                </span>
              </div>
              <FormControl>
                <Input
                  className="h-12 bg-white shadow placeholder:text-neutral-400 text-neutral-900"
                  placeholder="Ingresa tu correo"
                  disabled={loading}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-neutral-500 ml-1">Mensaje</FormLabel>
              <FormControl>
                <Textarea
                  className="resize-none bg-white shadow placeholder:text-neutral-400 text-neutral-900"
                  placeholder="Ingresa tu mensaje"
                  disabled={loading}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="h-12 text-lg" type="submit" disabled={loading}>
          {loading ? "Enviando..." : "Enviar Mensaje"}
        </Button>
      </form>
    </Form>
  );
};
