import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import Script from "next/script";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { MetaPixel } from "@/components/layout/MetaPixel";
import { HydrationFlag } from "@/components/ui/HydrationFlag";
import { RouteGate } from "@/components/layout/RouteGate";
import { regalosRuta } from "@/content/regalos";
import { metaPixelId } from "@/lib/meta-config";
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
        {/* Única instalación del Pixel. beforeInteractive define fbq antes de hidratar,
            así los eventos de los componentes quedan en cola. El PageView de la
            primera carga sale aquí; MetaTracker cubre las navegaciones. */}
        <Script id="meta-pixel" strategy="beforeInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${metaPixelId}');fbq('track','PageView');`}
        </Script>
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important;clip-path:none!important;stroke-dasharray:none!important;stroke-dashoffset:0!important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-full flex-col font-sans">
        <MetaPixel />
        <HydrationFlag />
        <ScrollProgress />
        <RouteGate hideOn={[regalosRuta]}>
          <Header />
        </RouteGate>
        <main className="flex-1">{children}</main>
        <RouteGate hideOn={[regalosRuta]}>
          <Footer />
        </RouteGate>
        <WhatsAppButton />
      </body>
    </html>
  );
}
