import { Hero } from "@/components/home/Hero";
import { BandaMarquee } from "@/components/home/BandaMarquee";
import { CadenaProduccion } from "@/components/home/CadenaProduccion";
import { Numeros } from "@/components/home/Numeros";
import { Divisiones } from "@/components/home/Divisiones";
import { Solucion360 } from "@/components/home/Solucion360";
import { Infraestructura } from "@/components/home/Infraestructura";
import { PortafolioDestacado } from "@/components/home/PortafolioDestacado";
import { Clientes } from "@/components/home/Clientes";
import { CTAFinal } from "@/components/home/CTAFinal";

export default function Home() {
  return (
    <>
      <Hero />
      <BandaMarquee />
      <Numeros />
      <Divisiones />
      <Solucion360 />
      <CadenaProduccion />
      <Infraestructura />
      <PortafolioDestacado />
      <Clientes />
      <CTAFinal />
    </>
  );
}
