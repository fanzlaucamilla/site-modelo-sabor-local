// Seção "Benefícios": quatro cards curtos explicando por que vale a pena
// comprar no SaborLocal (Fresco, Econômico, Justo, Sustentável).

// Importa ícones da lucide-react para representar visualmente cada benefício
// Sprout = broto (fresco), Wallet = carteira (econômico),
// Scale = balança (justo), Leaf = folha (sustentável)
import { Sprout, Wallet, Scale, Leaf } from "lucide-react";

// Array com os dados dos quatro benefícios renderizados com .map().
// Cada objeto tem: componente de ícone, título e texto descritivo.
const beneficios = [
  {
    Icone: Sprout,  // ícone de broto — representa frescor dos produtos
    titulo: "Fresco",
    texto: "Mais fresco, porque vem direto da região.",
  },
  {
    Icone: Wallet,  // ícone de carteira — representa economia para o comprador
    titulo: "Econômico",
    texto: "Mais barato, com cupons dos próprios produtores.",
  },
  {
    Icone: Scale,   // ícone de balança — representa justiça na cadeia produtiva
    titulo: "Justo",
    texto: "Mais justo, porque o produtor recebe melhor sem atravessador.",
  },
  {
    Icone: Leaf,    // ícone de folha — representa sustentabilidade ambiental
    titulo: "Sustentável",
    texto: "Mais sustentável, com entregas curtas e menos desperdício.",
  },
];

export default function Beneficios() {
  return (
    // id="beneficios": alvo do link de navegação no Header e Footer
    // bg-verde-claro py-20: fundo verde bem claro com padding vertical de 80px
    <section id="beneficios" className="bg-verde-claro py-20">

      {/* Container centralizado com largura máxima e padding lateral */}
      <div className="mx-auto max-w-6xl px-6">

        {/* Título da seção alinhado à esquerda */}
        {/* max-w-xl: limita a largura do título para melhor leitura */}
        {/* font-poppins text-3xl font-bold leading-tight text-cinza: Poppins negrita e compacta */}
        {/* sm:text-4xl: aumenta em telas maiores que 640px */}
        <h2 className="max-w-xl font-poppins text-3xl font-bold leading-tight text-cinza sm:text-4xl">
          Por que comprar no SaborLocal.
        </h2>

        {/* Grid de cards de benefícios */}
        {/* mt-10: espaço acima separando do título */}
        {/* grid grid-cols-1: 1 coluna em mobile */}
        {/* sm:grid-cols-2: 2 colunas em telas médias */}
        {/* lg:grid-cols-4: 4 colunas lado a lado em desktop (1024px+) */}
        {/* gap-5: espaçamento entre os cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {/* Itera sobre o array de benefícios e renderiza um card para cada um */}
          {beneficios.map((beneficio) => (
            <div
              key={beneficio.titulo}
              // rounded-2xl: bordas bem arredondadas
              // border border-verde-claro: borda verde claro fina
              // bg-branco p-7: fundo branco com padding interno de 28px
              className="rounded-2xl border border-verde-claro bg-branco p-7"
            >
              {/* Container do ícone: quadrado arredondado verde claro */}
              {/* flex h-12 w-12 items-center justify-center: centraliza o ícone dentro do quadrado */}
              {/* rounded-xl: bordas arredondadas (menos que o card — efeito quadrado suavizado) */}
              {/* bg-verde-claro text-verde: fundo verde claro e ícone verde mais escuro */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-verde-claro text-verde">
                {/* Ícone com 24px; aria-hidden oculta do leitor de tela (decorativo) */}
                <beneficio.Icone size={24} aria-hidden="true" />
              </div>

              {/* Título do benefício */}
              {/* mt-4: margem acima para separar do ícone */}
              {/* font-poppins text-lg font-semibold text-cinza: Poppins, tamanho lg, semi-negrito, cinza */}
              <h3 className="mt-4 font-poppins text-lg font-semibold text-cinza">
                {beneficio.titulo}
              </h3>

              {/* Descrição do benefício */}
              {/* mt-2 text-sm leading-relaxed text-cinza/60: margem acima, texto pequeno, cinza 60% */}
              <p className="mt-2 text-sm leading-relaxed text-cinza/60">
                {beneficio.texto}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
