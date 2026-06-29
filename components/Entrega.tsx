"use client";
// "use client": esta seção usa estado (useState) e responde a cliques,
// então precisa rodar no navegador, não no servidor.

// Seção "Entrega": a pessoa digita o CEP e descobre na hora se o SaborLocal
// atende a região dela. Consultamos a API pública ViaCEP para descobrir a
// cidade daquele CEP e comparamos com a nossa lista de cidades atendidas.
import { useState } from "react";

// Lista de cidades que o SaborLocal atende hoje.
// Para passar a atender uma nova cidade, basta adicionar um item aqui.
const cidadesAtendidas = [
  { cidade: "Santa Rosa", uf: "RS" },
  { cidade: "Três de Maio", uf: "RS" },
  { cidade: "Horizontina", uf: "RS" },
  { cidade: "Santo Ângelo", uf: "RS" },
];

// Deixa o texto "comparável": remove acentos, espaços extras e maiúsculas.
// Assim "Santo Ângelo" e "santo angelo" são tratados como iguais.
function normalizar(texto: string) {
  return texto
    .normalize("NFD") // separa as letras dos acentos
    .replace(/[̀-ͯ]/g, "") // remove os acentos (faixa unicode dos acentos)
    .toLowerCase()
    .trim();
}

export default function Entrega() {
  // cep: o texto que a pessoa digitou no campo
  const [cep, setCep] = useState("");

  // carregando: true enquanto esperamos a resposta da ViaCEP (desabilita o botão)
  const [carregando, setCarregando] = useState(false);

  // resultado: a mensagem mostrada depois da consulta.
  // tipo ("ok" | "fora" | "erro") define a cor; texto é o que aparece.
  const [resultado, setResultado] = useState<
    { tipo: "ok" | "fora" | "erro"; texto: string } | null
  >(null);

  // Função chamada quando a pessoa clica em "Verificar CEP".
  // async: permite usar await para esperar a resposta da API.
  async function verificarCep() {
    // Mantém só os números do que foi digitado (tira hífen, espaços...).
    const numeros = cep.replace(/\D/g, "");

    // Um CEP válido tem exatamente 8 dígitos.
    if (numeros.length !== 8) {
      setResultado({ tipo: "erro", texto: "Digite um CEP válido com 8 números." });
      return;
    }

    setCarregando(true);
    setResultado(null);

    try {
      // Consulta a API pública ViaCEP (gratuita, sem cadastro).
      const resposta = await fetch(`https://viacep.com.br/ws/${numeros}/json/`);
      const dados = await resposta.json();

      // A ViaCEP devolve { erro: true } quando o CEP não existe.
      if (dados.erro) {
        setResultado({ tipo: "erro", texto: "CEP não encontrado. Confira os números." });
        return;
      }

      // Verifica se a cidade/UF do CEP está na nossa lista de atendidas.
      // .some(): devolve true se ALGUM item da lista bater.
      const atende = cidadesAtendidas.some(
        (c) =>
          normalizar(c.cidade) === normalizar(dados.localidade) && c.uf === dados.uf
      );

      if (atende) {
        setResultado({
          tipo: "ok",
          texto: `Boa notícia! Já atendemos ${dados.localidade} - ${dados.uf}.`,
        });
      } else {
        setResultado({
          tipo: "fora",
          texto: `Ainda não chegamos em ${dados.localidade} - ${dados.uf}, mas estamos crescendo bairro a bairro.`,
        });
      }
    } catch {
      // Cai aqui se faltar internet ou a ViaCEP estiver fora do ar.
      setResultado({ tipo: "erro", texto: "Não consegui consultar agora. Tente novamente." });
    } finally {
      // Aconteça o que acontecer, a consulta terminou — reabilita o botão.
      setCarregando(false);
    }
  }

  return (
    // id="entrega": alvo do link de navegação no Header e Footer
    // bg-branco py-20: fundo branco com padding vertical de 80px
    <section id="entrega" className="bg-branco py-20">

      {/* Container centralizado com largura máxima e padding lateral */}
      <div className="mx-auto max-w-6xl px-6">

        {/* Bloco de conteúdo limitado em largura para não esticar o texto */}
        <div className="max-w-xl">

          {/* Título da seção com pergunta direta ao visitante */}
          <h2 className="font-poppins text-3xl font-bold leading-tight text-cinza sm:text-4xl">
            Será que a gente já chega na sua casa?
          </h2>

          {/* Texto explicativo abaixo do título */}
          <p className="mt-4 text-base leading-relaxed text-cinza/70">
            Digite seu CEP e descubra na hora se o SaborLocal atende a sua
            região. Estamos crescendo bairro a bairro.
          </p>

          {/* Campo de CEP + botão de verificação */}
          {/* flex flex-col gap-3: coluna no celular (campo sobre o botão) */}
          {/* sm:flex-row: linha em telas médias (campo ao lado do botão) */}
          <div className="mt-6 flex max-w-md flex-col gap-3 sm:flex-row">

            {/* Campo controlado: o valor vem do estado `cep` e muda no onChange */}
            <input
              type="text"
              placeholder="00000-000"
              inputMode="numeric" // abre teclado numérico no celular
              aria-label="Digite seu CEP" // texto acessível (sem label visível)
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              className="flex-1 rounded-xl border border-cinza/20 px-4 py-3.5 text-cinza outline-none focus:border-verde"
            />

            {/* Botão que dispara a consulta. */}
            {/* disabled={carregando}: trava o botão enquanto consulta */}
            {/* O texto vira "Verificando..." durante a espera */}
            <button
              type="button"
              onClick={verificarCep}
              disabled={carregando}
              className="rounded-xl bg-verde px-6 py-3.5 font-semibold text-branco transition-colors hover:bg-verde/90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {carregando ? "Verificando..." : "Verificar CEP"}
            </button>
          </div>

          {/* Mensagem do resultado — só aparece depois de consultar. */}
          {/* A cor muda: verde quando atende, laranja quando não atende ou dá erro. */}
          {resultado && (
            <p
              className={
                "mt-4 max-w-md rounded-lg px-4 py-3 text-sm font-medium " +
                (resultado.tipo === "ok"
                  ? "bg-verde-claro text-verde"
                  : "bg-laranja/10 text-laranja")
              }
            >
              {resultado.texto}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
