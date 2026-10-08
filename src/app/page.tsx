import { Hero } from "@/components/home/Hero";
import { Numeros } from "@/components/home/Numeros";
import { Divisiones } from "@/components/home/Divisiones";
import { Solucion360 } from "@/components/home/Solucion360";
import { Infraestructura } from "@/components/home/Infraestructura";
import { PortafolioDestacado } from "@/components/home/PortafolioDestacado";
import { Clientes } from "@/components/home/Clientes";
import { ComoTrabajamos } from "@/components/home/ComoTrabajamos";
import { CTAFinal } from "@/components/home/CTAFinal";

export default function Home() {
  return (
    <>
      <Hero />
      <Numeros />
      <Divisiones />
      <Solucion360 />
      <Infraestructura />
      <PortafolioDestacado />
      <Clientes />
      <ComoTrabajamos />
      <CTAFinal />
    </>
  );
}
