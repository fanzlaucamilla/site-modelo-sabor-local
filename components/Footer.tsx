// Rodapé do site: nome da marca, uma frase curta, navegação,
// e-mail de contato e ícones de redes sociais (placeholders).

// Importa ícones da lucide-react para Instagram, Facebook e e-mail

export default function Footer() {
  return (
    // border-t border-verde-claro: linha verde fina separando o footer do conteúdo acima
    // bg-branco: fundo branco
    <footer className="border-t border-verde-claro bg-branco">
      {/* Container do grid com 4 colunas em desktop */}
      {/* mx-auto max-w-6xl: centraliza com largura máxima de 1152px */}
      {/* gap-8 px-6 py-12: espaçamento interno generoso entre colunas e bordas */}
      {/* sm:grid-cols-2: 2 colunas em telas médias */}
      {/* md:grid-cols-4: 4 colunas em desktop */}
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:grid-cols-2 md:grid-cols-4">
        {/* Coluna 1: logo + descrição da marca */}
        {/* sm:col-span-2 md:col-span-1: ocupa 2 colunas em sm para dar mais espaço ao texto,
            volta a 1 coluna em md quando há 4 colunas disponíveis */}
        <div className="sm:col-span-2 md:col-span-1">
          {/* Logotipo em texto: "Sabor" negrito + "Local" normal, ambos em verde */}
          <p className="font-poppins text-lg">
            <span className="font-bold text-verde">Sabor</span>
            <span className="font-normal text-verde">Local</span>
          </p>
          {/* Frase curta de posicionamento da marca */}
          {/* max-w-xs: limita a largura para não ficar muito largo */}
          {/* text-sm leading-relaxed text-cinza/70: texto pequeno, altura de linha confortável, cinza com 70% de opacidade */}
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cinza/70">
            Delivery de produtores e comidas da região. Fresco, local e sem
            intermediário, do produtor para a sua mesa.
          </p>
        </div>

        {/* Coluna 2: links de navegação do site */}
        <div>
          {/* Título da coluna: fonte Poppins, pequeno, semi-negrito, cinza */}
          <h3 className="mb-3 font-poppins text-sm font-semibold text-cinza">
            Navegue
          </h3>
          {/* Lista vertical de links: flex-col gap-2 espaça cada item */}
          {/* text-sm text-cinza/70: texto pequeno e cinza semitransparente */}
          {/* hover:text-verde: muda a cor para verde ao passar o mouse */}
          <ul className="flex flex-col gap-2 text-sm text-cinza/70">
            <li>
              <a href="#sobre" className="hover:text-verde">
                Sobre
              </a>
            </li>
            <li>
              <a href="#produtos" className="hover:text-verde">
                Produtos
              </a>
            </li>
            <li>
              <a href="#como-funciona" className="hover:text-verde">
                Como funciona
              </a>
            </li>
            <li>
              <a href="#beneficios" className="hover:text-verde">
                Benefícios
              </a>
            </li>
          </ul>
        </div>

        {/* Coluna 3: links de atendimento */}
        <div>
          <h3 className="mb-3 font-poppins text-sm font-semibold text-cinza">
            Atendimento
          </h3>
          <ul className="flex flex-col gap-2 text-sm text-cinza/70">
            <li>
              <a href="#entrega" className="hover:text-verde">
                Área de entrega
              </a>
            </li>
            <li>
              <a href="#contato" className="hover:text-verde">
                Contato
              </a>
            </li>
            <li>
              <a href="#contato" className="hover:text-verde">
                Seja um produtor
              </a>
            </li>
          </ul>
        </div>

        {/* Coluna 4: e-mail de contato + ícones de redes sociais */}
        <div>
          <h3 className="mb-3 font-poppins text-sm font-semibold text-cinza">
            Fale com a gente
          </h3>

          {/* Link de e-mail com ícone ao lado */}
          {/* inline-flex items-center gap-2: coloca ícone e texto na mesma linha alinhados */}
          {/* hover:text-verde: muda para verde ao passar o mouse */}

          {/* Ícones de redes sociais lado a lado */}
          {/* mt-4 flex gap-3: margem acima e espaçamento entre os botões */}
          <div className="mt-4 flex gap-3">
            {/* Botão do Instagram: círculo com borda verde claro */}
            {/* rounded-full border border-verde-claro p-2: formato circular com borda e padding */}
            {/* hover:border-verde hover:text-verde: destaca a borda e o ícone no hover */}
          </div>
        </div>
      </div>

      {/* Barra inferior com copyright */}
      {/* border-t border-verde-claro: separa o copyright do grid acima */}
      <div className="border-t border-verde-claro">
        {/* Texto centralizado, pequeno e cinza semitransparente */}
        <div className="mx-auto max-w-6xl px-6 py-5 text-center text-sm text-cinza/60">
          © 2026 SaborLocal — Projeto educacional Setrem
        </div>
      </div>
    </footer>
  );
}
