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
    "Más de 5 años ofreciendo instalación y mantenimiento profesional de sistemas de climatización, ventilación mecánica y tableros eléctricos.",
  keywords: [
    "climatización",
    "ventilación mecánica",
    "mantenimiento",
    "instalación",
    "tableros eléctricos",
  ],
  authors: [{ name: "Ventifresh FR" }],
  creator: "Ventifresh FR",
  publisher: "Ventifresh FR",
  alternates: {
    canonical: "https://ventifreshfr.com",
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://ventifreshfr.com",
    siteName: "Ventifresh FR",
    title: "Ventifresh FR - Soluciones en Climatización y Ventilación",
    description:
      "Especialistas en climatización y ventilación mecánica con más de 5 años de experiencia.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ventifresh FR - Soluciones en Climatización y Ventilación",
    description: "Especialistas en climatización y ventilación mecánica.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ventifresh FR",
  alternateName: "Ventifresh F&R",
  description:
    "Soluciones profesionales en climatización y ventilación mecánica",
  url: "https://ventifreshfr.com",
  logo: "https://ventifreshfr.com/logo.png",
  foundingDate: "2023",
  serviceArea: {
    "@type": "Country",
    name: "Perú",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "PE",
    addressLocality: "Lima",
    addressRegion: "Lima",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: "+51-928-844-947",
    email: "ventifreshfr@gmail.com",
    availableLanguage: ["Spanish"],
    areaServed: "PE",
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "16:00",
    },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Climatización y Ventilación",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Instalación de Aire Acondicionado",
          description:
            "Instalación profesional de sistemas de aire acondicionado residenciales y comerciales",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mantenimiento de Aire Acondicionado",
          description:
            "Servicios de mantenimiento preventivo y correctivo para sistemas de aire acondicionado",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mantenimiento de Ventilación Mecánica",
          description:
            "Mantenimiento y reparación de sistemas de ventilación mecánica para garantizar un ambiente saludable",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Instalación de Tableros Eléctricos",
          description:
            "Diseño e instalación de tableros eléctricos para sistemas de climatización y ventilación",
        },
      },
    ],
  },
  knowsAbout: [
    "Climatización",
    "Ventilación mecánica",
    "Tableros eléctricos",
    "Mantenimiento preventivo",
    "Instalación HVAC",
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
