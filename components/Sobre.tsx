// Seção "Sobre": conta a missão da SaborLocal em duas colunas —
// texto de um lado e o retrato de um produtor do outro.

// Image do Next.js com otimização automática de tamanho e formato
import Image from "next/image";

export default function Sobre() {
  return (
    // id="sobre": alvo do link de navegação no Header e no Footer
    // bg-branco py-20: fundo branco com padding vertical de 80px
    <section id="sobre" className="bg-branco py-20">

      {/* Container em grid de 2 colunas a partir de md (768px) */}
      {/* mx-auto max-w-6xl px-6: centralizado com largura máxima e padding lateral */}
      {/* items-center: alinha verticalmente texto e imagem pelo centro */}
      {/* gap-12: espaço grande entre as duas colunas */}
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">

        {/* Coluna esquerda: textos da missão */}
        <div>
          {/* Título da seção */}
          {/* font-poppins text-3xl font-bold leading-tight text-cinza: fonte Poppins negrita, compacta e cinza */}
          {/* sm:text-4xl: aumenta o tamanho em telas maiores */}
          <h2 className="font-poppins text-3xl font-bold leading-tight text-cinza sm:text-4xl">
            Nascemos pra encurtar a distância entre a colônia e a sua cozinha.
          </h2>

          {/* Parágrafo explicando o problema que o SaborLocal resolve */}
          {/* mt-5 max-w-md: margem acima e largura máxima para facilitar a leitura */}
          {/* text-base leading-relaxed text-cinza/70: texto normal com boa altura de linha e cinza semitransparente */}
          <p className="mt-5 max-w-md text-base leading-relaxed text-cinza/70">
            Na nossa região, muita gente produz comida boa e tem dificuldade de
            vender. E muita gente quer comprar fresco, mas não tem tempo de ir à
            feira. O SaborLocal resolve os dois lados: dá vitrine ao produtor e
            leva o melhor da região até a sua casa.
          </p>

          {/* Botão CTA que leva para a seção de produtos */}
          {/* mt-7: margem acima para separar do texto */}
          {/* inline-block rounded-full bg-verde: botão pílula verde */}
          {/* px-7 py-3.5: padding confortável */}
          {/* font-semibold text-branco: texto semi-negrito branco */}
          {/* transition-colors hover:bg-verde/90: suaviza o hover com leve transparência */}
          <a
            href="#produtos"
            className="mt-7 inline-block rounded-full bg-verde px-7 py-3.5 font-semibold text-branco transition-colors hover:bg-verde/90"
          >
            Conhecer os produtores
          </a>
        </div>

        {/* Coluna direita: foto do produtor */}
        {/* relative: necessário para o Image com fill funcionar corretamente */}
        {/* h-[440px]: altura fixa de 440px para a imagem */}
        {/* overflow-hidden rounded-3xl: recorta nas bordas muito arredondadas */}
        <div className="relative h-[440px] overflow-hidden rounded-3xl">
          {/* fill: a imagem preenche todo o container pai (div acima) */}
          {/* object-cover: recorta para cobrir o espaço sem distorcer a proporção */}
          <Image
            src="/imagens/produtor.png"
            alt="Produtor da região trabalhando com seu filho"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
