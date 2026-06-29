"use client";
// "use client": diretiva obrigatória do Next.js para componentes que usam
// hooks do React (useState, useEffect etc.) — indica que roda no navegador, não no servidor.

// Seção "Contato": formulário controlado pelo React com useState.
// Ao enviar, manda os dados para a nossa API (/api/contato) com fetch
// e mostra uma mensagem de sucesso ou de erro conforme a resposta.

// useState: gerencia o valor de cada campo e o estado de envio
// FormEvent: tipo TypeScript para o evento de submit do formulário
import { useState, FormEvent } from "react";

export default function Contato() {

  // Estados controlados: cada campo do formulário tem seu próprio estado.
  // O valor do input é sempre lido do estado, e muda via onChange.
  const [nome, setNome] = useState("");      // valor do campo nome
  const [email, setEmail] = useState("");    // valor do campo e-mail
  const [mensagem, setMensagem] = useState(""); // valor do campo mensagem

  // Controla a visibilidade da mensagem de sucesso após o envio
  const [enviado, setEnviado] = useState(false);

  // enviando: true enquanto esperamos a resposta da API (desabilita o botão)
  const [enviando, setEnviando] = useState(false);

  // erro: guarda uma mensagem para mostrar caso o envio falhe
  const [erro, setErro] = useState("");

  // Função chamada quando o usuário clica em "Enviar mensagem".
  // async: permite usar await para ESPERAR a resposta da API.
  async function handleSubmit(evento: FormEvent<HTMLFormElement>) {
    // Impede o comportamento padrão do browser (recarregar a página ao submeter o form)
    evento.preventDefault();

    // Reinicia os avisos e marca que o envio começou (botão vira "Enviando...")
    setErro("");
    setEnviado(false);
    setEnviando(true);

    try {
      // Envia os dados para a NOSSA API (arquivo app/api/contato/route.ts).
      // method "POST" + body em JSON: é assim que mandamos dados para um endpoint.
      const resposta = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, mensagem }),
      });

      // Lê a resposta da API, que também vem em JSON.
      const dados = await resposta.json();

      // resposta.ok é false para status de erro (400, 500...). Aí lançamos o erro.
      if (!resposta.ok) {
        throw new Error(dados.erro ?? "Não foi possível enviar agora.");
      }

      // Deu certo: mostra a mensagem de sucesso e limpa os campos.
      setEnviado(true);
      setNome("");
      setEmail("");
      setMensagem("");
    } catch (e) {
      // Se algo falhar (sem internet, erro no servidor...), mostramos um aviso.
      setErro(e instanceof Error ? e.message : "Não foi possível enviar agora.");
    } finally {
      // Aconteça o que acontecer, o envio terminou — reabilita o botão.
      setEnviando(false);
    }
  }

  return (
    // id="contato": alvo dos links de CTA em várias seções e no Header/Footer
    // bg-verde-claro py-20: fundo verde bem claro com padding vertical de 80px
    <section id="contato" className="bg-verde-claro py-20">

      {/* Container centralizado com largura máxima estreita (formulário não deve ser muito largo) */}
      <div className="mx-auto max-w-2xl px-6">

        {/* Card branco que envolve o formulário */}
        {/* rounded-3xl: bordas bem arredondadas */}
        {/* border border-verde-claro: borda verde claro fina */}
        {/* bg-branco p-8: fundo branco com padding de 32px */}
        {/* sm:p-10: padding maior (40px) em telas maiores */}
        <div className="rounded-3xl border border-verde-claro bg-branco p-8 sm:p-10">

          {/* Título da seção */}
          {/* font-poppins text-3xl font-bold leading-tight text-cinza: Poppins negrita e compacta */}
          <h2 className="font-poppins text-3xl font-bold leading-tight text-cinza">
            Fala com a gente.
          </h2>

          {/* Subtítulo explicando para quem é o formulário */}
          {/* mt-3 text-base leading-relaxed text-cinza/70: margem acima, texto normal, cinza 70% */}
          <p className="mt-3 text-base leading-relaxed text-cinza/70">
            É produtor e quer vender no SaborLocal? Tem uma dúvida ou sugestão?
            Mande sua mensagem, respondemos rápido.
          </p>

          {/* Formulário controlado pelo React */}
          {/* onSubmit={handleSubmit}: chama nossa função ao submeter */}
          {/* flex flex-col gap-4: campos empilhados verticalmente com espaço entre eles */}
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">

            {/* Campo: nome completo */}
            {/* flex flex-col gap-1.5: label e input empilhados com espaço pequeno entre eles */}
            <div className="flex flex-col gap-1.5">
              {/* htmlFor="nome": conecta o label ao input pelo id, melhorando acessibilidade */}
              {/* text-xs font-semibold uppercase tracking-wide text-cinza/60:
                  texto bem pequeno, maiúsculas, letras espaçadas — estilo de rótulo de campo */}
              <label htmlFor="nome" className="text-xs font-semibold uppercase tracking-wide text-cinza/60">
                Nome
              </label>
              {/* value={nome} onChange: input controlado — o React é a fonte da verdade do valor */}
              {/* required: validação nativa do browser (não envia se vazio) */}
              {/* rounded-lg border border-cinza/20: bordas levemente arredondadas com borda suave */}
              {/* px-4 py-3: padding interno confortável */}
              {/* outline-none focus:border-verde: remove outline padrão, coloca borda verde no foco */}
              <input
                id="nome"
                type="text"
                required
                placeholder="Seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="rounded-lg border border-cinza/20 px-4 py-3 text-cinza outline-none focus:border-verde"
              />
            </div>

            {/* Campo: endereço de e-mail */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-cinza/60">
                E-mail
              </label>
              {/* type="email": validação nativa do browser para formato de e-mail */}
              <input
                id="email"
                type="email"
                required
                placeholder="voce@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-lg border border-cinza/20 px-4 py-3 text-cinza outline-none focus:border-verde"
              />
            </div>

            {/* Campo: mensagem livre */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="mensagem" className="text-xs font-semibold uppercase tracking-wide text-cinza/60">
                Mensagem
              </label>
              {/* textarea: campo de texto multi-linha */}
              {/* rows={4}: altura inicial de 4 linhas */}
              {/* resize-y: permite redimensionar apenas na vertical (impede redimensionar horizontalmente
                  e quebrar o layout) */}
              <textarea
                id="mensagem"
                required
                rows={4}
                placeholder="Como podemos ajudar?"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                className="resize-y rounded-lg border border-cinza/20 px-4 py-3 text-cinza outline-none focus:border-verde"
              />
            </div>

            {/* Botão de envio */}
            {/* type="submit": aciona o onSubmit do form quando clicado */}
            {/* self-start: alinha o botão à esquerda (não estica para a largura total do flex) */}
            {/* rounded-xl bg-verde px-7 py-3.5: bordas arredondadas, fundo verde, padding */}
            {/* font-semibold text-branco: semi-negrito branco */}
            {/* transition-colors hover:bg-verde/90: hover suavizado com leve transparência */}
            {/* disabled={enviando}: trava o botão enquanto a API responde */}
            {/* disabled:opacity-60 / cursor-not-allowed: visual de botão desabilitado */}
            {/* O texto muda para "Enviando..." durante a espera */}
            <button
              type="submit"
              disabled={enviando}
              className="self-start rounded-xl bg-verde px-7 py-3.5 font-semibold text-branco transition-colors hover:bg-verde/90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {enviando ? "Enviando..." : "Enviar mensagem"}
            </button>
          </form>

          {/* Mensagem de sucesso — renderizada condicionalmente após o envio */}
          {/* {enviado && (...)} : só aparece quando o estado `enviado` for true */}
          {/* rounded-lg bg-verde-claro px-4 py-3: bloco verde claro com padding */}
          {/* text-sm font-medium text-verde: texto pequeno, semi-negrito, verde escuro */}
          {enviado && (
            <p className="mt-4 rounded-lg bg-verde-claro px-4 py-3 text-sm font-medium text-verde">
              Mensagem enviada! Responderemos rápido. ✓
            </p>
          )}

          {/* Mensagem de erro — aparece só se o envio falhar (estado `erro` preenchido) */}
          {erro && (
            <p className="mt-4 rounded-lg bg-laranja/10 px-4 py-3 text-sm font-medium text-laranja">
              {erro}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
