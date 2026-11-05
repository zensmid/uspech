import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { HydrationFlag } from "@/components/ui/HydrationFlag";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Uspech — Agencia de publicidad 360° en Mérida",
    template: "%s · Uspech",
  },
  description:
    "Uspech es una agencia de publicidad 360° con sede en Mérida, Yucatán, con 21 años de experiencia, +350 clientes e infraestructura propia para producir cualquier idea.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${anton.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Si el JS no hidrata en 4 s, mostramos el contenido sin animaciones. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "setTimeout(function(){var d=document.documentElement;if(!d.dataset.hydrated)d.classList.add('no-hydrate')},4000)",
          }}
        />
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important;clip-path:none!important;stroke-dasharray:none!important;stroke-dashoffset:0!important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-full flex-col font-sans">
        <HydrationFlag />
        <ScrollProgress />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
