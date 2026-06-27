// Seção "Produtos": mostra um grid de cards com as categorias de comida.
// Os dados ficam num array e são renderizados com .map(),
// reaproveitando o componente CardProduto para cada item.

// Importa o componente de card e sua interface de tipagem
import CardProduto, { CardProdutoProps } from "@/components/CardProduto";

// Array com os dados de cada produto exibido na seção.
// Tipado com CardProdutoProps para garantir que todos os campos obrigatórios existam.
// Para adicionar um novo card, basta incluir mais um objeto aqui — o .map() abaixo cuida do resto.
const produtos: CardProdutoProps[] = [
  {
    imagem: "/imagens/hortifruti.png",
    nome: "Hortifruti",
    produtor: "Sítio Boa Vista",
    desconto: "-20%",
  },
  {
    imagem: "/imagens/padaria.png",
    nome: "Padaria",
    produtor: "Padaria da Vó Alzira",
    desconto: "-15%",
  },
  {
    imagem: "/imagens/cozinha-caseira.png",
    nome: "Cozinha caseira",
    produtor: "Dona Marlene",
    desconto: "-10%",
  },
  {
    imagem: "/imagens/doces.png",
    nome: "Doces",
    produtor: "Doceria Colonial",
    desconto: "-25%",
  },
  {
    imagem: "/imagens/conservas.png",
    nome: "Conservas",
    produtor: "Família Kunzler",
    desconto: "-15%",
  },
];

export default function Produtos() {
  return (
    // id="produtos": alvo dos links do Header, Hero e Sobre
    // bg-verde-claro py-20: fundo verde bem claro com padding vertical de 80px
    <section id="produtos" className="bg-verde-claro py-20">

      {/* Container centralizado com largura máxima e padding lateral */}
      <div className="mx-auto max-w-6xl px-6">

        {/* Cabeçalho da seção: título, subtítulo e botão CTA */}
        {/* max-w-2xl: limita a largura do bloco de texto para não esticar demais */}
        <div className="max-w-2xl">

          {/* Título da seção */}
          {/* font-poppins text-3xl font-bold leading-tight text-cinza: Poppins negrita e compacta */}
          {/* sm:text-4xl: cresce em telas maiores que 640px */}
          <h2 className="font-poppins text-3xl font-bold leading-tight text-cinza sm:text-4xl">
            Da horta, da padaria e da cozinha da vizinhança.
          </h2>

          {/* Subtítulo explicando o que o usuário vai encontrar */}
          {/* mt-4 text-base leading-relaxed text-cinza/70: margem acima, texto normal, cinza 70% */}
          <p className="mt-4 text-base leading-relaxed text-cinza/70">
            Navegue pelas categorias e descubra o que está fresco hoje. Cada
            item mostra o produtor de origem e o desconto disponível no app.
          </p>

          {/* Botão CTA laranja que leva para o formulário de contato */}
          {/* mt-6 inline-block rounded-full: margem, exibe como bloco inline, bordas pílula */}
          {/* bg-laranja px-7 py-3.5: fundo laranja com padding confortável */}
          {/* font-semibold text-branco: semi-negrito branco */}
          {/* transition-colors hover:bg-laranja/90: hover suavizado com leve transparência */}
          <a
            href="#contato"
            className="mt-6 inline-block rounded-full bg-laranja px-7 py-3.5 font-semibold text-branco transition-colors hover:bg-laranja/90"
          >
            Quero meu cupom
          </a>
        </div>

        {/* Grid de cards de produto */}
        {/* mt-10: espaço acima separando do cabeçalho */}
        {/* grid grid-cols-1: 1 coluna em mobile */}
        {/* sm:grid-cols-2: 2 colunas em telas médias (640px+) */}
        {/* lg:grid-cols-3: 3 colunas em telas grandes (1024px+) */}
        {/* gap-6: espaçamento entre os cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {/* Itera sobre o array de produtos e renderiza um CardProduto para cada um */}
          {produtos.map((produto) => (
            <CardProduto
              key={produto.nome}        // chave única para o React identificar cada card
              imagem={produto.imagem}   // caminho da foto
              nome={produto.nome}       // nome do produto
              produtor={produto.produtor} // nome do produtor
              desconto={produto.desconto} // selo de desconto (opcional)
            />
          ))}
        </div>
      </div>
    </section>
  );
}
