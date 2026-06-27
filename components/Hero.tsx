// Seção inicial (Hero): primeira coisa que o visitante vê.
// Mostra a imagem da feira ao fundo, o título principal, o texto de apoio
// e o botão que rola até a seção de produtos.

// Image do Next.js otimiza automaticamente o carregamento das imagens
import Image from "next/image";

export default function Hero() {
  return (
    // id="inicio": alvo do link da logo no Header
    // relative: necessário para posicionar as camadas filhas com absolute
    // flex items-center justify-center: centraliza o conteúdo vertical e horizontalmente
    // min-h-[600px]: garante altura mínima mesmo sem conteúdo suficiente
    // overflow-hidden: esconde qualquer parte da imagem que ultrapasse a seção
    <section
      id="inicio"
      className="relative flex min-h-[600px] items-center justify-center overflow-hidden"
    >
      {/* Imagem de fundo da feira */}
      {/* fill: faz a imagem preencher 100% do container pai (a section) */}
      {/* priority: carrega essa imagem antes das outras (LCP — maior elemento visível) */}
      {/* object-cover: recorta a imagem para cobrir o espaço sem distorcer */}
      <Image
        src="/imagens/fundo-hero.jpeg"
        alt="Mesa com produtos frescos da região: tomates, pães, ovos, milho e conservas"
        fill
        priority
        className="object-cover"
      />

      {/* Camada de overlay escura por cima da foto */}
      {/* absolute inset-0: cobre toda a section (top/right/bottom/left = 0) */}
      {/* bg-cinza/55: cor cinza com 55% de opacidade — escurece a foto para o texto ficar legível */}
      <div className="absolute inset-0 bg-cinza/55" />

      {/* Conteúdo principal do hero: fica acima das camadas de imagem e overlay */}
      {/* relative z-10: sai do fluxo normal e fica na frente das camadas absolutas */}
      {/* mx-auto max-w-3xl: centraliza e limita a largura do bloco de texto */}
      {/* px-6 py-24: padding horizontal e vertical generoso */}
      {/* text-center: todo o texto centralizado */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 text-center">

        {/* Título principal da página */}
        {/* font-poppins text-4xl font-bold leading-tight: fonte grande, negrita e compacta */}
        {/* text-branco: texto branco para contraste com o overlay escuro */}
        {/* sm:text-5xl: aumenta para 5xl em telas maiores que 640px */}
        <h1 className="font-poppins text-4xl font-bold leading-tight text-branco sm:text-5xl">
          Comida de verdade, direto da nossa região.
        </h1>

        {/* Parágrafo de apoio que complementa o título */}
        {/* mx-auto max-w-xl: centraliza e limita a largura para facilitar a leitura */}
        {/* mt-5: espaço acima para separar do título */}
        {/* text-lg leading-relaxed: texto um pouco maior que o padrão, com boa altura de linha */}
        {/* text-branco/90: branco com 90% de opacidade (levemente suavizado) */}
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-branco/90">
          O SaborLocal conecta você aos produtores e quitandas da cidade.
          Fresco, local e sem intermediário, do produtor para a sua mesa, com
          cupons que cabem no bolso.
        </p>

        {/* Botão CTA que leva o usuário para a seção de produtos */}
        {/* mt-8: espaço acima para separar do parágrafo */}
        {/* inline-block: permite padding e margem como bloco, mas não ocupa a linha toda */}
        {/* rounded-full bg-verde px-8 py-4: botão pílula verde com padding generoso */}
        {/* font-semibold text-branco: texto semi-negrito branco */}
        {/* transition-colors hover:bg-verde/90: suaviza a mudança de cor no hover */}
        <a
          href="#produtos"
          className="mt-8 inline-block rounded-full bg-verde px-8 py-4 font-semibold text-branco transition-colors hover:bg-verde/90"
        >
          Ver produtos
        </a>
      </div>
    </section>
  );
}
