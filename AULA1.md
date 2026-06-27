# Aula 1 — SaborLocal: criando o projeto e a primeira tela (Header + Hero + Footer)

Material de condução da aula. O professor lê este arquivo ao lado enquanto a turma
reconstrói o projeto **do zero**, junto. Ao final de hoje teremos a home rodando com
**cabeçalho (Header) + topo da página (Hero) + rodapé (Footer)**.

> **Stack do projeto:** Next.js 16 (App Router, Turbopack) + React 19 + TypeScript +
> Tailwind CSS **v4**.

---

## ⚠️ Leia antes de começar (avisos para o professor)

1. **Usamos as versões mais recentes**, que são as que o `create-next-app@latest`
   instala por padrão hoje: **Next 16**, **React 19** e **Tailwind v4**. No Tailwind v4
   **não existe** `tailwind.config.js/ts`: o tema (cores e fontes) é declarado **no
   próprio CSS**, dentro de um bloco `@theme` em `app/globals.css`. E o `globals.css`
   começa com **uma linha só** — `@import "tailwindcss";` — em vez das três diretivas
   `@tailwind ...` do Tailwind v3. Se a turma tiver visto tutoriais antigos (v3), avise
   dessa diferença.

2. **A logo do cabeçalho é uma IMAGEM.** No Header usamos o arquivo
   `logo-principal.png` com o componente `<Image>` do Next. Atenção: essa logo precisa
   ter cor **escura**, porque o cabeçalho tem fundo **branco** — uma logo de texto claro
   "some" no branco (é a clássica falta de contraste). Hoje conectamos **duas imagens**:
   a **logo** (`logo-principal.png`, no Header) e a **foto de fundo do Hero**
   (`fundo-hero.jpeg`).

---

## Objetivo da aula de hoje

1. Criar o projeto com `create-next-app` e entender a estrutura de pastas.
2. Limpar o `globals.css` e configurar as cores da marca (no bloco `@theme`).
3. Configurar as fontes no `layout.tsx`.
4. Colocar as imagens em `public/imagens/`.
5. Criar a pasta `components/`.
6. Construir o **Header** (logo em imagem + menu).
7. Construir o **Footer**.
8. Construir o **Hero** (foto de fundo + textos + botão).
9. Fazer o **primeiro commit**.

> Hoje **paramos no Hero**. As seções Sobre, Produtos, Como funciona, Benefícios,
> Entrega e Contato (o formulário) ficam para as próximas aulas.

## Pré-requisitos

- **Node.js 20.9 ou superior** instalado (o Next 16 exige). Confira com `node -v`.
- Um editor de código (VS Code) e um terminal.

> ⚠️ **Onde a turma trava:** versão do Node antiga. Se `node -v` mostrar algo
> abaixo de 20.9, o `create-next-app`/Next 16 falha com uma mensagem de versão
> incompatível. Atualize o Node antes de continuar.

---

## Passo 1 — Criar o projeto com create-next-app

No terminal, dentro da pasta onde o projeto deve ficar, rode:

```bash
npx create-next-app@latest saborlocal
```

O assistente faz algumas perguntas. **Responda exatamente assim** (são as opções que
batem com este projeto):

| Pergunta | Resposta |
| --- | --- |
| Would you like to use **TypeScript**? | **Yes** |
| Would you like to use **ESLint**? | **Yes** |
| Would you like to use **Tailwind CSS**? | **Yes** |
| Would you like your code inside a **`src/` directory**? | **No** |
| Would you like to use **App Router**? | **Yes** |
| Would you like to use **Turbopack**? | **Yes** |
| Would you like to customize the import alias (`@/*`)? | **No** (deixe o padrão `@/*`) |

**O que deve acontecer na tela:** aparece "Installing dependencies..." e, ao final, algo
como `Success! Created saborlocal at ...`. Uma pasta `saborlocal/` foi criada com o
projeto dentro — já com **Next 16**, **React 19** e **Tailwind v4** configurados.

Entre na pasta:

```bash
cd saborlocal
```

> ℹ️ **Bom saber:** como pedimos Tailwind, o `create-next-app` já deixa o
> `app/globals.css` começando com `@import "tailwindcss";` e cria um
> `postcss.config.mjs` apontando para `@tailwindcss/postcss`. **Não há**
> `tailwind.config.ts` — isso é o esperado no v4.

> ⚠️ **Trava comum:** rodar `create-next-app` **dentro de uma pasta que já é um
> projeto**. Sempre crie em uma pasta vazia.

---

## Passo 2 — Entender a estrutura de pastas

Abra o projeto no VS Code. O que importa para nós hoje:

```
saborlocal/
├── app/                 ← o coração do site (App Router)
│   ├── layout.tsx       ← "moldura" que envolve todas as páginas (fontes, Header, Footer)
│   ├── page.tsx         ← a página inicial (a home)
│   └── globals.css      ← @import do Tailwind + tema da marca (@theme)
├── public/              ← arquivos estáticos (imagens) servidos direto
├── package.json         ← lista de dependências e scripts (dev, build...)
└── postcss.config.mjs   ← liga o Tailwind v4 ao build
```

Ideia central do **App Router**: tudo que está em `app/` vira página/estrutura.
O `layout.tsx` é a moldura (aparece em todas as páginas); o `page.tsx` é o conteúdo
de uma página específica.

> Repare: **não existe** um arquivo de configuração do Tailwind. No v4, a configuração
> mora dentro do `globals.css`.

---

## Passo 3 — Rodar o projeto pela primeira vez

```bash
npm run dev
```

**O que deve acontecer na tela:** o terminal mostra algo como:

```
▲ Next.js 16.2.9 (Turbopack)
- Local:  http://localhost:3000
✓ Ready in ...s
```

Abra **http://localhost:3000** no navegador: aparece a página inicial padrão do Next.
Está funcionando! Deixe o servidor rodando — ele atualiza sozinho a cada vez que
salvamos um arquivo.

> Para parar o servidor: `Ctrl + C` no terminal.

---

## Passo 4 — Limpar o globals.css e configurar as cores da marca

No Tailwind v4 **toda a configuração de tema fica aqui no CSS**. Abra `app/globals.css`,
**apague o conteúdo de exemplo** e deixe exatamente assim:

```css
/* Tailwind CSS v4: uma única linha importa base + utilitários. */
@import "tailwindcss";

/* Tema da marca (Tailwind v4 usa CSS, não mais o tailwind.config.ts).
   Cada token --color-* vira uma família de classes: bg-<nome>, text-<nome>, border-<nome>...
   Ex.: --color-verde  ->  bg-verde, text-verde, border-verde */
@theme {
  --color-verde: #2e7d32;        /* verde folha — cor principal */
  --color-verde-claro: #e8f5e9;  /* verde claro — fundos suaves */
  --color-laranja: #e8730c;      /* laranja terra — destaque / CTA / selos */
  --color-cinza: #1f2937;        /* cinza escuro — texto */
  --color-branco: #ffffff;       /* branco neve — fundo */
}

/* Fontes: o valor vem das variáveis criadas pelo next/font (em app/layout.tsx).
   O 'inline' faz o utilitário apontar direto para a variável, evitando referência circular.
   Isso cria as classes font-poppins e font-inter. */
@theme inline {
  --font-poppins: var(--font-poppins);
  --font-inter: var(--font-inter);
}

/* Rolagem suave ao clicar nos links de âncora do menu. */
html {
  scroll-behavior: smooth;
}

/* Compensa o cabeçalho fixo: ao rolar até uma seção pela âncora,
   deixa um respiro no topo para o conteúdo não ficar escondido. */
section {
  scroll-margin-top: 80px;
}
```

O que cada parte faz:

- **`@import "tailwindcss";`** — a única linha que "liga" o Tailwind v4 (substitui as
  três diretivas `@tailwind base/components/utilities` do v3).
- **`@theme { --color-... }`** — é aqui que registramos as **cores da marca**. Definir
  `--color-verde` cria automaticamente as classes `bg-verde`, `text-verde`,
  `border-verde`, etc. (e variações de opacidade como `bg-branco/95` e `text-cinza/70`).
- **`@theme inline { --font-... }`** — cria as classes `font-poppins` e `font-inter`,
  apontando para as variáveis que o `next/font` vai gerar no Passo 5. O `inline` é
  importante: sem ele, daria uma referência circular.
- **`scroll-behavior: smooth`** — clicar num link de menu (`#sobre`) **desliza** a página
  até a seção em vez de "pular".
- **`scroll-margin-top: 80px`** — como o cabeçalho fica fixo, deixamos 80px de respiro ao
  rolar até uma seção, para não esconder o conteúdo atrás dele.

> ⚠️ **Se as cores não funcionarem (`bg-verde` não pinta nada):**
> 1. confira que o nome do token é `--color-verde` (com o prefixo **`--color-`**);
> 2. confira que o `globals.css` está sendo importado no `layout.tsx`
>    (`import "./globals.css";`);
> 3. salve o arquivo. No v4 **não** existe lista `content` para configurar — ele
>    detecta os arquivos sozinho.

---

## Passo 5 — Configurar as fontes no layout

O `app/layout.tsx` é a **moldura** do site. Vamos usá-lo para: carregar as fontes
(Poppins para títulos, Inter para texto), definir a metadata de SEO e colocar o
**Header** e o **Footer** em volta de todas as páginas.

Substitua o conteúdo de `app/layout.tsx` por:

```tsx
// Layout raiz: carrega as fontes, define a metadata de SEO/Open Graph
// e envolve todas as páginas com o cabeçalho (Header) e o rodapé (Footer).
import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Fonte dos títulos. A variável CSS (--font-poppins) é ligada ao tema no globals.css (font-poppins).
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

// Fonte do texto corrido. Vira a classe font-inter no Tailwind.
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

// Metadata da página, usada pelo Next para montar as tags <title>, <meta> e Open Graph.
export const metadata: Metadata = {
  title: "SaborLocal — comida de verdade, direto da nossa região",
  description:
    "Delivery que conecta você aos produtores e quitandas da cidade. Fresco, local e sem intermediário, com cupons que cabem no bolso.",
  openGraph: {
    title: "SaborLocal — comida de verdade, direto da nossa região",
    description:
      "Delivery que conecta você aos produtores e quitandas da cidade. Fresco, local e sem intermediário.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // lang pt-BR para acessibilidade e SEO. As variáveis das fontes ficam no <html>.
    <html lang="pt-BR" className={`${poppins.variable} ${inter.variable}`}>
      <body className="bg-branco font-inter text-cinza antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

O que está acontecendo:

- **`next/font/google`** baixa Poppins e Inter automaticamente (sem `<link>` manual).
  Cada fonte expõe uma `variable` CSS (`--font-poppins`, `--font-inter`), que ligamos no
  `@theme inline` do `globals.css` para virar as classes `font-poppins` e `font-inter`.
- **`weight: ["400","500","600","700"]`** carrega os pesos que usamos.
- **`metadata`** vira o `<title>` e as `<meta>` (incluindo Open Graph).
- No `<html>` aplicamos as variáveis das fontes; no `<body>` definimos os **padrões**:
  - `bg-branco` → fundo branco da marca.
  - `font-inter` → texto padrão na fonte Inter.
  - `text-cinza` → cor de texto padrão.
  - `antialiased` → deixa as fontes mais suaves na tela.
- **`<Header />` e `<Footer />` ficam no layout** → aparecem em **todas** as páginas
  automaticamente. O `{children}` no meio é onde cada página (a `page.tsx`) entra.

> Vamos criar `Header` e `Footer` nos Passos 8 e 9. Até lá, o projeto vai acusar erro
> de import — é esperado. Resolve quando os arquivos existirem.

---

## Passo 6 — Importar as imagens para `public/imagens/`

Esta parte costuma gerar confusão, então vamos com calma.

### 6.1 — Crie a pasta

Dentro de `public/`, crie uma pasta chamada **`imagens`**. No VS Code: clique com o
botão direito em `public/` → **New Folder** → digite `imagens`.

Resultado esperado: existe o caminho `public/imagens/`.

### 6.2 — Arraste as imagens para dentro

Arraste as imagens fornecidas para dentro de `public/imagens/`. Hoje o código usa
**duas** imagens:

| Onde aparece | Nome exato do arquivo | Para que serve |
| --- | --- | --- |
| Header (Passo 8) | `logo-principal.png` | a logo da marca |
| Hero (Passo 10) | `fundo-hero.jpeg` | a foto de fundo do topo da página |

Os caminhos finais precisam ser **exatamente** estes:

```
public/imagens/logo-principal.png
public/imagens/fundo-hero.jpeg
```

> ⚠️ **Trava número 1 da turma — nome/caminho da imagem.** O código procura por
> `"/imagens/logo-principal.png"` e `"/imagens/fundo-hero.jpeg"`. Se o arquivo tiver
> outro nome (`Logo-Principal.png`, `fundo hero.jpg`, `fundo-hero.JPEG`...), a imagem
> **não aparece**. Regras:
> - tudo em **minúsculas**;
> - **sem espaços** (use hífen);
> - a **extensão** tem que bater **exatamente** — repare que o fundo é `.jpeg`
>   (e não `.jpg`!) e a logo é `.png`.
>
> Em muitos servidores (e na publicação final) o nome é **sensível a maiúsculas** —
> `Fundo-Hero.jpeg` ≠ `fundo-hero.jpeg`. Padronize em minúsculas desde já.

> ⚠️ **Cuidado com o contraste da logo.** O cabeçalho tem fundo **branco**. Se a logo
> tiver o texto claro/branco, ele "some" no branco (só sobra o desenho da folha). Use
> uma versão de logo com texto **escuro**.

### 6.3 — "Colocar na pasta" ≠ "conectar no código"

Esta é a ideia mais importante do passo:

- **Colocar a imagem na pasta** (`public/imagens/logo-principal.png`) apenas a torna
  *disponível*. Tudo dentro de `public/` é servido na raiz do site: o arquivo passa a
  existir na URL `http://localhost:3000/imagens/logo-principal.png`. Mas **nada aparece**
  na tela só por estar lá.
- **Conectar a imagem no código** é quando, num componente, escrevemos
  `<Image src="/imagens/logo-principal.png" ... />`. **É essa linha** que faz a imagem
  realmente aparecer na página. Repare que o caminho começa em `/imagens/...`
  (a partir da raiz do site) — **não** se escreve `/public/...`.

> ⚠️ **Trava traiçoeira — troquei a imagem e ela NÃO atualizou.** Se você substituir um
> arquivo **mantendo o mesmo nome** e a tela continuar mostrando a versão antiga, quase
> sempre é **cache**. Tente, do mais leve ao mais pesado:
> 1. recarregar a página com `Ctrl + Shift + R` (ignora o cache do navegador);
> 2. o Next guarda versões otimizadas em `.next/cache/images` — apague essa pasta e
>    reinicie o `npm run dev`;
> 3. em último caso, salve a imagem com um **nome novo** e atualize o `src` no código.
> Outra causa comum: salvar na pasta **errada** (uma pasta de origem em vez de
> `public/imagens/`). O site só enxerga o que está em `public/imagens/`.

---

## Passo 7 — Criar a pasta `components/`

Na **raiz** do projeto (no mesmo nível de `app/`, **não** dentro de `app/`), crie a
pasta `components/`. É onde vão morar nossas peças reutilizáveis: `Header.tsx`,
`Footer.tsx`, `Hero.tsx`...

Resultado esperado: existe o caminho `components/` (e o alias `@/components/...`
do layout passa a encontrá-lo).

---

## Passo 8 — Construir o Header (cabeçalho)

Crie o arquivo **`components/Header.tsx`** com este conteúdo:

```tsx
// Cabeçalho fixo no topo: mostra a logo "SaborLocal" e o menu de navegação
// por âncoras, que rola suavemente até cada seção da página.
import Image from "next/image"; // componente de imagem otimizada do Next

// Lista dos itens do menu. Cada link aponta para o id de uma seção da landing.
const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#produtos", label: "Produtos" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#entrega", label: "Entrega" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  return (
    // sticky top-0: gruda no topo ao rolar a página.
    // z-50: fica acima de outros elementos (não é coberto pelo conteúdo).
    // w-full: largura total.
    // border-b border-verde-claro: linha fininha verde claro embaixo do cabeçalho.
    // bg-branco/95: fundo branco com 95% de opacidade (deixa "vazar" um pouco do fundo).
    // backdrop-blur: desfoca o que passa atrás do cabeçalho (efeito vidro fosco).
    <header className="sticky top-0 z-50 w-full border-b border-verde-claro bg-branco/95 backdrop-blur">
      {/* mx-auto: centraliza horizontalmente. max-w-6xl: largura máxima (~1152px). */}
      {/* flex items-center: alinha os itens em linha e centralizados na vertical. */}
      {/* gap-6: espaço entre os itens. px-6 py-4: espaçamento interno (laterais/topo). */}
      <nav className="mx-auto flex max-w-6xl items-center gap-6 px-6 py-4">
        {/* Logo da marca (IMAGEM). Clicando, volta para o topo (#inicio). */}
        {/* flex-shrink-0: impede a logo de encolher quando falta espaço. */}
        <a href="#inicio" className="flex-shrink-0">
          {/* width/height = dimensões REAIS do arquivo (1119x395); o Next usa esses
              números para reservar o espaço e evitar o "pulo" no carregamento. */}
          {/* h-10 w-auto: na tela, fixa a altura em 40px e deixa a largura proporcional. */}
          {/* priority: carrega cedo, pois a logo aparece logo no topo. */}
          <Image
            src="/imagens/logo-principal.png"
            alt="SaborLocal"
            width={1119}
            height={395}
            priority
            className="h-10 w-auto"
          />
        </a>

        {/* Menu de âncoras. */}
        {/* ml-4: margem à esquerda separando da logo. */}
        {/* hidden md:flex: escondido no celular, vira linha (flex) a partir de telas médias. */}
        {/* items-center gap-6: itens alinhados com espaço entre eles. */}
        <ul className="ml-4 hidden items-center gap-6 md:flex">
          {/* .map() gera um <li> para cada item da lista `links`. */}
          {links.map((link) => (
            // key={link.href}: identificador único que o React exige em listas.
            <li key={link.href}>
              {/* text-sm font-medium: texto pequeno e de peso médio. */}
              {/* text-cinza: cor padrão. transition-colors: anima a mudança de cor. */}
              {/* hover:text-verde: fica verde ao passar o mouse. */}
              <a
                href={link.href}
                className="text-sm font-medium text-cinza transition-colors hover:text-verde"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Botão de destaque (CTA), sempre à direita. */}
        {/* ml-auto: empurra o botão para a extrema direita. */}
        {/* rounded-full: cantos totalmente arredondados (formato pílula). */}
        {/* bg-verde px-5 py-2.5: fundo verde com espaçamento interno. */}
        {/* text-sm font-semibold text-branco: texto pequeno, semi-negrito, branco. */}
        {/* transition-colors hover:bg-verde/90: escurece levemente no hover. */}
        <a
          href="#contato"
          className="ml-auto rounded-full bg-verde px-5 py-2.5 text-sm font-semibold text-branco transition-colors hover:bg-verde/90"
        >
          Quero meu cupom
        </a>
      </nav>
    </header>
  );
}
```

Pontos para destacar na aula:

- **Logo com `next/image`:** importamos `Image` e apontamos o `src` para
  `/imagens/logo-principal.png`. O `width`/`height` são as dimensões reais do arquivo
  (o Next usa para reservar espaço); o tamanho **na tela** quem manda é a classe
  `h-10 w-auto` (40px de altura, largura proporcional).
- **Lista + `.map()`:** em vez de escrever 6 links na mão, guardamos os itens num array
  `links` e geramos os `<li>` com `.map()`. Para adicionar um item ao menu, basta
  acrescentar um objeto na lista.
- **`key`** é obrigatório em listas no React — ajuda o React a saber qual item é qual.
- **Responsivo:** `hidden md:flex` esconde o menu no celular (onde quebraria) e mostra
  a partir de telas médias.

> Os links apontam para seções que ainda não existem (`#sobre`, `#produtos`...). Tudo
> bem: hoje eles só não vão rolar para lugar nenhum. As seções chegam nas próximas aulas.

---

## Passo 9 — Construir o Footer (rodapé)

O rodapé usa ícones da biblioteca **lucide-react**. Instale-a (com o servidor parado,
ou em outro terminal):

```bash
npm install lucide-react
```

**O que deve acontecer:** o terminal mostra `added 1 package` (aproximadamente) e a
dependência aparece no `package.json`.

Agora crie **`components/Footer.tsx`**:

```tsx
// Rodapé do site: nome da marca, uma frase curta, navegação,
// e-mail de contato e ícones de redes sociais (placeholders).
import { Instagram, Facebook, Mail } from "lucide-react";

export default function Footer() {
  return (
    // border-t border-verde-claro: linha fininha verde claro no topo do rodapé.
    // bg-branco: fundo branco.
    <footer className="border-t border-verde-claro bg-branco">
      {/* mx-auto max-w-6xl: bloco centralizado com largura máxima. */}
      {/* grid: layout em grade. gap-8: espaço entre as colunas. px-6 py-12: espaçamentos. */}
      {/* sm:grid-cols-2 md:grid-cols-4: 1 coluna no celular, 2 em telas pequenas, 4 em médias. */}
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:grid-cols-2 md:grid-cols-4">
        {/* Coluna 1: marca + descrição curta */}
        {/* sm:col-span-2 md:col-span-1: ocupa 2 colunas em telas pequenas e volta a 1 em médias. */}
        <div className="sm:col-span-2 md:col-span-1">
          {/* font-poppins text-lg: logo em texto, fonte de título, tamanho grande. */}
          <p className="font-poppins text-lg">
            <span className="font-bold text-verde">Sabor</span>
            <span className="font-normal text-verde">Local</span>
          </p>
          {/* mt-3: margem acima. max-w-xs: largura máxima estreita. */}
          {/* text-sm leading-relaxed: texto pequeno com altura de linha confortável. */}
          {/* text-cinza/70: cinza com 70% de opacidade (texto secundário, mais suave). */}
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cinza/70">
            Delivery de produtores e comidas da região. Fresco, local e sem
            intermediário, do produtor para a sua mesa.
          </p>
        </div>

        {/* Coluna 2: navegação */}
        <div>
          {/* mb-3: margem abaixo. font-poppins text-sm font-semibold: título da coluna. */}
          <h3 className="mb-3 font-poppins text-sm font-semibold text-cinza">
            Navegue
          </h3>
          {/* flex flex-col gap-2: links empilhados na vertical com pequeno espaço. */}
          <ul className="flex flex-col gap-2 text-sm text-cinza/70">
            {/* hover:text-verde: cada link fica verde ao passar o mouse. */}
            <li><a href="#sobre" className="hover:text-verde">Sobre</a></li>
            <li><a href="#produtos" className="hover:text-verde">Produtos</a></li>
            <li><a href="#como-funciona" className="hover:text-verde">Como funciona</a></li>
            <li><a href="#beneficios" className="hover:text-verde">Benefícios</a></li>
          </ul>
        </div>

        {/* Coluna 3: atendimento */}
        <div>
          <h3 className="mb-3 font-poppins text-sm font-semibold text-cinza">
            Atendimento
          </h3>
          <ul className="flex flex-col gap-2 text-sm text-cinza/70">
            <li><a href="#entrega" className="hover:text-verde">Área de entrega</a></li>
            <li><a href="#contato" className="hover:text-verde">Contato</a></li>
            <li><a href="#contato" className="hover:text-verde">Seja um produtor</a></li>
          </ul>
        </div>

        {/* Coluna 4: contato + redes sociais (links placeholder) */}
        <div>
          <h3 className="mb-3 font-poppins text-sm font-semibold text-cinza">
            Fale com a gente
          </h3>
          {/* inline-flex items-center gap-2: ícone e texto lado a lado, alinhados. */}
          <a
            href="mailto:oi@saborlocal.com.br"
            className="inline-flex items-center gap-2 text-sm text-cinza/70 hover:text-verde"
          >
            {/* Ícone de e-mail (lucide). aria-hidden: decorativo, leitores de tela ignoram. */}
            <Mail size={16} aria-hidden="true" />
            oi@saborlocal.com.br
          </a>
          {/* mt-4 flex gap-3: os dois botões redondos de rede social, lado a lado. */}
          <div className="mt-4 flex gap-3">
            {/* rounded-full border ...: botão redondo com borda; aria-label nomeia o link. */}
            <a
              href="#"
              aria-label="Instagram"
              className="rounded-full border border-verde-claro p-2 text-cinza/70 transition-colors hover:border-verde hover:text-verde"
            >
              <Instagram size={18} aria-hidden="true" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="rounded-full border border-verde-claro p-2 text-cinza/70 transition-colors hover:border-verde hover:text-verde"
            >
              <Facebook size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {/* Linha final com o aviso de copyright. */}
      <div className="border-t border-verde-claro">
        {/* text-center text-sm text-cinza/60: centralizado, pequeno, cinza suave. */}
        <div className="mx-auto max-w-6xl px-6 py-5 text-center text-sm text-cinza/60">
          © 2026 SaborLocal — Projeto educacional Setrem
        </div>
      </div>
    </footer>
  );
}
```

Destaques:

- **`lucide-react`** dá ícones prontos como componentes (`<Mail />`, `<Instagram />`).
  `size` define o tamanho e `aria-hidden="true"` diz aos leitores de tela para ignorar.
- **`text-cinza/70`** usa a sintaxe de **opacidade** do Tailwind: a mesma cor `cinza`,
  com 70% de opacidade — ótimo para textos secundários.
- O grid **responsivo** reorganiza as colunas conforme a largura da tela.

> Aqui, no rodapé, a logo é **texto** ("SaborLocal" com `<span>`), diferente do Header,
> que usa a imagem. As duas formas convivem bem.

---

## Passo 10 — Construir o Hero (topo da página)

O Hero é a primeira coisa que o visitante vê: **foto de fundo** + **título** + **texto**
+ **botão**. Crie **`components/Hero.tsx`**:

```tsx
// Seção inicial (Hero): primeira coisa que o visitante vê.
// Mostra a imagem da feira ao fundo, o título principal, o texto de apoio
// e o botão que rola até a seção de produtos.
import Image from "next/image";

export default function Hero() {
  return (
    // id="inicio": alvo do link da logo e do menu "início".
    // relative: vira referência de posição para os elementos "absolute" filhos.
    // flex items-center justify-center: centraliza o conteúdo na vertical e horizontal.
    // min-h-[600px]: altura mínima de 600px (a seção sempre tem esse tamanho no mínimo).
    // overflow-hidden: corta o que vazar das bordas (a foto não "escapa").
    <section
      id="inicio"
      className="relative flex min-h-[600px] items-center justify-center overflow-hidden"
    >
      {/* Imagem de fundo da feira. */}
      {/* fill: faz a imagem preencher todo o elemento pai (a <section>). */}
      {/* priority: carrega com prioridade (é a imagem principal, "acima da dobra"). */}
      {/* object-cover: a foto cobre a área inteira sem distorcer (corta o excesso). */}
      <Image
        src="/imagens/fundo-hero.jpeg"
        alt="Mesa com produtos frescos da região: tomates, pães, ovos, milho e conservas"
        fill
        priority
        className="object-cover"
      />

      {/* Camada escura por cima da foto para o texto branco ficar legível. */}
      {/* absolute inset-0: cobre toda a seção (top/right/bottom/left = 0). */}
      {/* bg-cinza/55: cinza escuro com 55% de opacidade — escurece a foto sem escondê-la. */}
      <div className="absolute inset-0 bg-cinza/55" />

      {/* Conteúdo do hero, acima das camadas. */}
      {/* relative z-10: fica ACIMA da foto e da camada escura (senão sumiria atrás). */}
      {/* mx-auto max-w-3xl: bloco centralizado e estreito (boa leitura). */}
      {/* px-6 py-24 text-center: espaçamento e texto centralizado. */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 text-center">
        {/* Título principal. */}
        {/* font-poppins font-bold: fonte de título, negrito. */}
        {/* text-4xl sm:text-5xl: grande no celular, ainda maior em telas médias. */}
        {/* leading-tight: linhas mais juntas. text-branco: cor branca (contraste com o fundo). */}
        <h1 className="font-poppins text-4xl font-bold leading-tight text-branco sm:text-5xl">
          Comida de verdade, direto da nossa região.
        </h1>
        {/* Texto de apoio. */}
        {/* mx-auto max-w-xl: centralizado e com largura de leitura confortável. */}
        {/* mt-5 text-lg leading-relaxed: margem acima, texto grande, linhas espaçadas. */}
        {/* text-branco/90: branco com 90% de opacidade (um tom mais suave que o título). */}
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-branco/90">
          O SaborLocal conecta você aos produtores e quitandas da cidade.
          Fresco, local e sem intermediário, do produtor para a sua mesa, com
          cupons que cabem no bolso.
        </p>
        {/* Botão (CTA) que leva à seção de produtos. */}
        {/* mt-8 inline-block: margem acima; inline-block para respeitar padding/margens. */}
        {/* rounded-full bg-verde px-8 py-4: pílula verde com bom espaçamento interno. */}
        {/* font-semibold text-branco: texto semi-negrito branco. */}
        {/* transition-colors hover:bg-verde/90: escurece levemente no hover. */}
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
```

**Textos reais do Hero** (confira que estão idênticos):

- Título: **"Comida de verdade, direto da nossa região."**
- Parágrafo: **"O SaborLocal conecta você aos produtores e quitandas da cidade. Fresco,
  local e sem intermediário, do produtor para a sua mesa, com cupons que cabem no bolso."**
- Botão: **"Ver produtos"**

Conceitos-chave para explicar:

- **Empilhamento por camadas (`relative` + `absolute` + `z-10`):** a `<section>` é
  `relative`; a foto e a camada escura são `absolute inset-0` (ocupam tudo); o texto é
  `relative z-10` para ficar **na frente**. Sem o `z-10`, o texto ficaria atrás da
  camada escura e **não apareceria**.
- **`next/image` com `fill`:** o `<Image fill>` preenche o elemento pai. Para isso, o
  pai precisa ser `relative` (é o caso da `<section>`).

> ⚠️ **Trava clássica — "o texto sumiu / está ilegível".** Quase sempre é uma destas:
> 1. esqueceram a **camada escura** (`bg-cinza/55`) → texto branco sobre foto clara
>    fica impossível de ler;
> 2. esqueceram o **`z-10`** no bloco de texto → o texto fica **atrás** da foto/camada;
> 3. usaram `text-cinza` (escuro) em vez de `text-branco` no título/parágrafo.

> ⚠️ **Trava — a foto não aparece.** Confira: o arquivo está em
> `public/imagens/fundo-hero.jpeg`? O nome e a extensão batem **exatamente**
> (minúsculas, hífen, `.jpeg` e não `.jpg`)? O `src` é `"/imagens/fundo-hero.jpeg"`
> (começando em `/imagens`, **sem** `/public`)? Se você acabou de trocar a imagem e ela
> não muda, é cache — veja a dica do Passo 6.3.

---

## Passo 11 — Montar a `page.tsx` da aula e ver tudo junto

Hoje a home tem **apenas o Hero** no miolo (o Header e o Footer já vêm do `layout.tsx`).
Deixe `app/page.tsx` assim **por enquanto**:

```tsx
// Página inicial (landing): por enquanto só com o Hero.
// As outras seções (Sobre, Produtos, ...) entram nas próximas aulas.
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
```

> Nota de fidelidade: no projeto-modelo **final**, esta `page.tsx` importa e empilha
> **todas** as seções (`Hero`, `Sobre`, `Produtos`, `ComoFunciona`, `Beneficios`,
> `Entrega`, `Contato`). Vamos chegar lá adicionando uma seção por aula. Hoje fica só o
> `Hero` — se você importar as outras agora, dá **erro**, porque os arquivos ainda não
> existem.

Repare na divisão de responsabilidades:

- **`layout.tsx`** = moldura → coloca **Header** e **Footer** em volta de tudo.
- **`page.tsx`** = conteúdo da home → por enquanto, só o **Hero**.

Com o servidor rodando (`npm run dev`), abra **http://localhost:3000**.

**O que deve aparecer na tela:**

1. No topo, o **cabeçalho** branco fixo com a logo SaborLocal (imagem), o menu e o
   botão verde "Quero meu cupom".
2. Abaixo, o **Hero**: foto de fundo escurecida, o título "Comida de verdade, direto
   da nossa região.", o parágrafo e o botão verde "Ver produtos".
3. No fim da página, o **rodapé** com as quatro colunas e o aviso
   "© 2026 SaborLocal — Projeto educacional Setrem".

Role a página: o cabeçalho **acompanha** o topo (efeito `sticky`).

---

## Passo 12 — Primeiro commit

Vamos salvar este marco no Git. O `create-next-app` já costuma iniciar um repositório;
se não iniciou, o primeiro comando resolve.

```bash
git init
git add .
git commit -m "Aula 1: estrutura inicial com Header, Hero e Footer"
```

**O que deve acontecer na tela:**

- `git init` → `Initialized empty Git repository in ...` (ou nada, se já existia).
- `git add .` → não mostra saída (apenas prepara os arquivos).
- `git commit ...` → uma linha resumindo, tipo `[main (root-commit) abc1234] Aula 1: ...`
  seguida da contagem de arquivos alterados.

> Confira com `git status` → deve aparecer `nothing to commit, working tree clean`.

> O `create-next-app` já cria um `.gitignore` que exclui `node_modules/` e `.next/` do
> commit — isso é proposital (são pastas geradas, não vão para o Git).

---

## Resolução de problemas comuns

| Sintoma | Causa provável | Como resolver |
| --- | --- | --- |
| `create-next-app` falha logo no início | Node desatualizado | `node -v` precisa ser ≥ 20.9; atualize o Node |
| As classes `bg-verde`, `text-cinza` não pintam nada | Token sem o prefixo `--color-`, ou `globals.css` não importado | Use `--color-verde` no `@theme`; confira `import "./globals.css"` no `layout.tsx` |
| Tutorial mostra `@tailwind base;` e aqui é `@import "tailwindcss";` | Tutorial é do Tailwind v3; este projeto é v4 | Siga a sintaxe v4 deste material |
| Procurei o `tailwind.config.ts` e não existe | Normal no v4 | O tema fica no `@theme` dentro do `globals.css` |
| Erro `Cannot find module '@/components/Header'` | Arquivo não existe ainda, nome/caminho errado, ou pasta `components/` dentro de `app/` | Crie `components/` na **raiz**; confira o nome exato do arquivo |
| A foto do Hero não aparece | Caminho/nome/extensão errados | Arquivo em `public/imagens/fundo-hero.jpeg`; `src="/imagens/fundo-hero.jpeg"` (sem `/public`, e é `.jpeg`) |
| A logo do Header some (só a folha aparece) | Logo com texto claro sobre header branco | Use uma versão de logo com texto **escuro** |
| Troquei a imagem mas a tela mostra a antiga | Cache do navegador ou do Next, ou pasta errada | `Ctrl+Shift+R`; apague `.next/cache/images` e reinicie; confirme que salvou em `public/imagens/` |
| O texto do Hero está ilegível ou sumiu | Falta a camada escura, falta `z-10`, ou texto escuro sobre foto | Mantenha `bg-cinza/55`, `relative z-10` no bloco de texto e `text-branco` no título/parágrafo |
| `Module not found: 'lucide-react'` | Biblioteca não instalada | `npm install lucide-react` |
| Mudei o arquivo e a tela não atualiza | Servidor parado ou arquivo não salvo | Salve (`Ctrl+S`); confirme o `npm run dev` rodando; recarregue a página |

---

### Recapitulando a aula de hoje

Criamos o projeto (Next 16 + React 19 + Tailwind v4), configuramos cores e fontes pelo
`@theme`, organizamos as imagens e construímos **Header + Hero + Footer** — a home já
roda. Na próxima aula começamos a preencher o miolo da página com a seção **Sobre**.
