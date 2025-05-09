import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header, TopHeader } from "@/components/layout";
import { Toaster } from "sonner";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ventifresh",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.variable} font-poppins`}>
        <div>
          <TopHeader />
          <Header />
          {children}
        </div>
        <Toaster richColors />
      </body>
    </html>
  );
}
