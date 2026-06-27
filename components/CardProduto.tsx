// Card reutilizável de produto: mostra a foto, o nome do item,
// o produtor de origem e um selo de desconto em laranja.
// É usado pela seção Produtos, que renderiza vários cards com .map().

// Image do Next.js para otimização automática das fotos
import Image from "next/image";

// Interface TypeScript que define o contrato de dados do componente.
// Qualquer componente que usar CardProduto precisa passar essas props.
// O "?" em desconto significa que a prop é opcional — o card funciona sem ela.
export interface CardProdutoProps {
  imagem: string;    // caminho da foto, ex.: "/imagens/hortifruti.png"
  nome: string;      // nome do produto ou categoria
  produtor: string;  // nome de quem produziu o item
  desconto?: string; // texto do selo de desconto, ex.: "-20%" (opcional)
}

// Desestruturação das props: extrai cada valor diretamente no parâmetro da função
export default function CardProduto({
  imagem,
  nome,
  produtor,
  desconto,
}: CardProdutoProps) {
  return (
    // article: elemento semântico correto para um item de conteúdo independente
    // group: classe especial do Tailwind que permite estilizar filhos no hover do pai (group-hover)
    // overflow-hidden: garante que o zoom da foto no hover não vaze para fora do card
    // rounded-2xl border border-verde-claro: bordas arredondadas com borda verde claro
    // bg-branco shadow-sm: fundo branco com sombra sutil
    // transition-transform hover:-translate-y-1 hover:shadow-md: sobe 4px e aumenta a sombra no hover
    <article className="group overflow-hidden rounded-2xl border border-verde-claro bg-branco shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">

      {/* Container da foto com altura fixa */}
      {/* relative h-44 w-full: necessário para o Image com fill funcionar (posição e tamanho definidos) */}
      {/* overflow-hidden: recorta o zoom da foto nas bordas do container */}
      <div className="relative h-44 w-full overflow-hidden">

        {/* Foto do produto */}
        {/* fill: preenche todo o container pai (div acima) */}
        {/* object-cover: recorta para cobrir sem distorcer */}
        {/* transition-transform duration-300 group-hover:scale-105: ao passar o mouse no article (group),
            a foto escala para 105% com transição de 300ms — efeito de zoom suave */}
        <Image
          src={imagem}
          alt={nome}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Selo de desconto — só renderiza se a prop `desconto` foi informada */}
        {/* absolute right-3 top-3: posicionado no canto superior direito da foto */}
        {/* rounded-full bg-laranja: pílula laranja de destaque */}
        {/* px-3 py-1 text-xs font-bold text-branco: texto bem pequeno, negrito e branco */}
        {desconto && (
          <span className="absolute right-3 top-3 rounded-full bg-laranja px-3 py-1 text-xs font-bold text-branco">
            {desconto}
          </span>
        )}
      </div>

      {/* Área de texto abaixo da foto */}
      {/* p-5: padding interno uniforme de 20px */}
      <div className="p-5">
        {/* Nome do produto: fonte Poppins, tamanho lg (18px), semi-negrito, cinza */}
        <h3 className="font-poppins text-lg font-semibold text-cinza">{nome}</h3>

        {/* Nome do produtor: texto pequeno (14px), cinza com 60% de opacidade */}
        {/* mt-1: espaço pequeno acima para separar do título */}
        <p className="mt-1 text-sm text-cinza/60">por {produtor}</p>
      </div>
    </article>
  );
}
