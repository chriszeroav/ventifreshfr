import { Footer, Header, TopHeader } from "@/components/layout";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Ventifresh FR - Soluciones en Climatización y Ventilación",
    template: "%s | Ventifresh FR",
  },
  description:
    "Ofrecemos servicios de instalación y mantenimiento de sistemas de climatización y ventilación.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="es">
      <body className={`${inter.variable}`}>
        <div className="min-h-dvh flex flex-col">
          <TopHeader />
          <Header />
          {children}
          <Footer />
        </div>
        <Toaster richColors />
      </body>
    </html>
  );
}
