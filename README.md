# SaborLocal 🥬

Landing page institucional da **SaborLocal**, um delivery fictício de produtores e
comidas da região. Projeto **didático** da disciplina de Front-end (ensino técnico) —
o código foi escrito para ser lido e estudado: limpo, comentado e organizado.

## Tecnologias

- **Next.js 16** (App Router, Turbopack) — estrutura e roteamento
- **React 19** — componentes funcionais
- **TypeScript** — tipagem (`.tsx`)
- **Tailwind CSS v4** — toda a estilização (tema definido por `@theme` no CSS)
- **lucide-react** — ícones

## Como rodar (passo a passo para o aluno)

Você precisa do [Node.js](https://nodejs.org/) (versão 20.9 ou superior) e do
[Git](https://git-scm.com/) instalados. Confira no terminal com `node -v` e `git --version`.

```bash
# 1. Clone o repositório
git clone https://github.com/fanzlaucamilla/site-modelo-sabor-local.git

# 2. Entre na pasta do projeto
cd site-modelo-sabor-local

# 3. Instale as dependências (cria a pasta node_modules automaticamente)
npm install

# 4. Suba o servidor de desenvolvimento
npm run dev
```

Depois abra **http://localhost:3000** no navegador. A cada arquivo salvo, a página
atualiza sozinha. Para parar o servidor: `Ctrl + C` no terminal.

Outros comandos úteis:

```bash
npm run build   # gera a versão de produção
npm run start   # roda a versão de produção (depois do build)
```

## Estrutura de pastas

```
app/
  layout.tsx        Metadata de SEO, fontes e o Header/Footer em volta de tudo
  page.tsx          A landing montada, juntando as seções na ordem
  not-found.tsx     Página de erro 404 personalizada
  globals.css       Tailwind v4 (@import) + tema da marca (@theme): cores e fontes
components/
  Header.tsx        Cabeçalho fixo com logo + menu por âncoras
  Footer.tsx        Rodapé
  Hero.tsx          Seção inicial (#inicio)
  Sobre.tsx         Seção sobre (#sobre)
  Produtos.tsx      Grid de produtos (#produtos), renderizado com .map()
  CardProduto.tsx   Card reutilizável usado pela seção Produtos
  ComoFunciona.tsx  Os três passos (#como-funciona)
  Beneficios.tsx    Quatro benefícios (#beneficios)
  Entrega.tsx       Campo de CEP visual (#entrega)
  Contato.tsx       Formulário com useState (#contato)
public/
  imagens/          Imagens do site (hero, produtor, produtos, logo)
postcss.config.mjs  Liga o Tailwind v4 ao build (@tailwindcss/postcss)
```

> No Tailwind v4 **não existe** `tailwind.config.ts`: o tema (cores e fontes) é
> declarado direto no CSS, dentro do bloco `@theme` em `app/globals.css`.

## Identidade visual

| Cor            | Hex       | Uso                         |
| -------------- | --------- | --------------------------- |
| Verde folha    | `#2E7D32` | Cor principal               |
| Verde claro    | `#E8F5E9` | Fundos suaves               |
| Laranja terra  | `#E8730C` | Destaques / CTA / selos     |
| Cinza escuro   | `#1F2937` | Texto                       |
| Branco neve    | `#FFFFFF` | Fundo                       |

Fontes: **Poppins** (títulos) e **Inter** (texto), carregadas via `next/font/google`.

---

© 2026 SaborLocal — Projeto educacional Setrem
