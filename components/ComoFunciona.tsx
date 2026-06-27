// Seção "Como funciona": explica o serviço em três passos simples,
// cada um num card com número, ícone, título e descrição.

// Importa ícones da biblioteca lucide-react para representar visualmente cada passo
import { ShoppingCart, Smartphone, Home } from "lucide-react";

// Array com os dados dos três passos do fluxo do serviço.
// Cada objeto contém: número do passo, componente de ícone, título e texto descritivo.
const passos = [
  {
    numero: "1",
    Icone: ShoppingCart, // Ícone de carrinho de compras — representa a escolha dos produtos
    titulo: "Escolha e use o cupom",
    texto: "Escolha os produtos e aplique seu cupom.",
  },
  {
    numero: "2",
    Icone: Smartphone, // Ícone de celular — representa o pedido pelo app ou site
    titulo: "Faça o pedido",
    texto: "Faça o pedido pelo app ou site.",
  },
  {
    numero: "3",
    Icone: Home, // Ícone de casa — representa a entrega no endereço do cliente
    titulo: "Receba em casa",
    texto: "Receba em casa, direto de quem produziu.",
  },
];

// Componente principal da seção "Como Funciona"
export default function ComoFunciona() {
  return (
    // Seção com id para âncora de navegação; fundo branco e padding vertical generoso
    <section id="como-funciona" className="bg-branco py-20">

      {/* Container centralizado com largura máxima e padding horizontal */}
      <div className="mx-auto max-w-6xl px-6">

        {/* Título da seção: centralizado, fonte Poppins bold, responsivo entre 3xl e 4xl */}
        <h2 className="mx-auto max-w-2xl text-center font-poppins text-3xl font-bold leading-tight text-cinza sm:text-4xl">
          Em três passos, sua comida da região chega em casa.
        </h2>

        {/* Grid responsivo: 1 coluna em mobile, 3 colunas a partir de md (768px) */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">

          {/* Itera sobre o array de passos e renderiza um card para cada um */}
          {passos.map((passo) => (
            <div
              key={passo.numero} // Chave única para o React rastrear cada item da lista
              // Card com bordas arredondadas, borda verde claro, padding interno e texto centralizado
              className="rounded-2xl border border-verde-claro p-8 text-center"
            >
              {/* Círculo verde claro que envolve o ícone do passo;
                  centralizado horizontalmente, tamanho fixo 56x56px */}
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-verde-claro text-verde">
                {/* Ícone do passo com tamanho 26px; aria-hidden oculta do leitor de tela (decorativo) */}
                <passo.Icone size={26} aria-hidden="true" />
              </div>

              {/* Label do número do passo: fonte mono, minúsculo, maiúsculas, espaçamento amplo, cor laranja */}
              <p className="mt-5 font-mono text-xs font-semibold uppercase tracking-wider text-laranja">
                Passo {passo.numero}
              </p>

              {/* Título do passo: fonte Poppins semibold, tamanho lg, cor cinza */}
              <h3 className="mt-2 font-poppins text-lg font-semibold text-cinza">
                {passo.titulo}
              </h3>

              {/* Descrição curta do passo: texto pequeno (sm), altura de linha relaxada, cinza com 60% de opacidade */}
              <p className="mt-2 text-sm leading-relaxed text-cinza/60">
                {passo.texto}
              </p>
            </div>
          ))}
        </div>

        {/* Área do botão CTA (call to action) centralizada abaixo dos cards */}
        <div className="mt-10 text-center">
          {/* Link âncora para a seção de contato; estilo de botão pill (rounded-full),
              fundo verde, texto branco, transição suave de cor no hover (90% de opacidade) */}
          <a
            href="#contato"
            className="inline-block rounded-full bg-verde px-8 py-4 font-semibold text-branco transition-colors hover:bg-verde/90"
          >
            Começar agora
          </a>
        </div>
      </div>
    </section>
  );
}
