// Página inicial (landing): junta todas as seções na ordem do layout.
// Cada seção é um componente próprio, importado da pasta components.
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Produtos from "@/components/Produtos";
import ComoFunciona from "@/components/ComoFunciona";
import Beneficios from "@/components/Beneficios";
import Entrega from "@/components/Entrega";
import Contato from "@/components/Contato";

export default function Home() {
  return (
    <>
      <Hero />
      <Sobre />
      <Produtos />
      <ComoFunciona />
      <Beneficios />
      <Entrega />
      <Contato />
    </>
  );
}
