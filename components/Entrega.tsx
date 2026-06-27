// Seção "Entrega": pergunta se o SaborLocal já atende a região do visitante.
// O campo de CEP é apenas visual — sem lógica de busca implementada ainda.
// A integração com uma API de CEP será feita em aula futura.

export default function Entrega() {
  return (
    // id="entrega": alvo do link de navegação no Header e Footer
    // bg-branco py-20: fundo branco com padding vertical de 80px
    <section id="entrega" className="bg-branco py-20">

      {/* Container centralizado com largura máxima e padding lateral */}
      <div className="mx-auto max-w-6xl px-6">

        {/* Bloco de conteúdo limitado em largura para não esticar o texto */}
        {/* max-w-xl: largura máxima de ~576px */}
        <div className="max-w-xl">

          {/* Título da seção com pergunta direta ao visitante */}
          {/* font-poppins text-3xl font-bold leading-tight text-cinza: Poppins negrita e compacta */}
          {/* sm:text-4xl: aumenta em telas maiores que 640px */}
          <h2 className="font-poppins text-3xl font-bold leading-tight text-cinza sm:text-4xl">
            Será que a gente já chega na sua casa?
          </h2>

          {/* Texto explicativo abaixo do título */}
          {/* mt-4 text-base leading-relaxed text-cinza/70: margem acima, texto normal, cinza 70% */}
          <p className="mt-4 text-base leading-relaxed text-cinza/70">
            Digite seu CEP e descubra na hora se o SaborLocal atende a sua
            região. Estamos crescendo bairro a bairro.
          </p>

          {/* Campo de CEP + botão de verificação — apenas visual por enquanto */}
          {/* TODO: integração com API de CEP será implementada em aula futura */}

          {/* mt-6: margem acima separando do texto */}
          {/* flex flex-col gap-3: coluna em mobile (campo sobre o botão) */}
          {/* sm:flex-row: linha em telas médias (campo ao lado do botão) */}
          {/* max-w-md: limita a largura total do grupo a ~448px */}
          <div className="mt-6 flex max-w-md flex-col gap-3 sm:flex-row">

            {/* Campo de texto para digitar o CEP */}
            {/* flex-1: ocupa todo o espaço disponível na linha (deixando o botão com tamanho fixo) */}
            {/* rounded-xl border border-cinza/20: bordas arredondadas com borda cinza suave */}
            {/* px-4 py-3.5: padding interno confortável */}
            {/* text-cinza: cor do texto digitado */}
            {/* outline-none focus:border-verde: remove o outline padrão do browser e
                coloca uma borda verde quando o campo está em foco */}
            <input
              type="text"
              placeholder="00000-000"
              inputMode="numeric"   // abre teclado numérico em dispositivos móveis
              aria-label="Digite seu CEP" // texto acessível para leitores de tela (sem label visível)
              className="flex-1 rounded-xl border border-cinza/20 px-4 py-3.5 text-cinza outline-none focus:border-verde"
            />

            {/* Botão de verificação */}
            {/* type="button": evita comportamento de submit acidental dentro de um form */}
            {/* rounded-xl bg-verde px-6 py-3.5: bordas arredondadas, fundo verde, padding */}
            {/* font-semibold text-branco: semi-negrito branco */}
            {/* transition-colors hover:bg-verde/90: hover suavizado com leve transparência */}
            <button
              type="button"
              className="rounded-xl bg-verde px-6 py-3.5 font-semibold text-branco transition-colors hover:bg-verde/90"
            >
              Verificar CEP
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
