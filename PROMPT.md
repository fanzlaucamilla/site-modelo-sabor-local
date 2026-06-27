# Instruções para construção do site — SaborLocal

## Contexto
Você vai construir o site institucional (landing page) da startup fictícia **SaborLocal**, um delivery de produtores e comidas da região. Este site é um **material didático modelo** para uma disciplina de Front-end do ensino técnico. O código precisa ser **limpo, comentado e didático** — alunos do ensino médio vão ler este código para aprender. Prefira clareza a esperteza.

## O que já existe nesta pasta
- `design/index.html` — o layout visual de referência, exportado do Claude Design (HTML + Tailwind). **Use como referência visual** (cores aplicadas, espaçamentos, ordem das seções, conteúdo dos textos). NÃO copie o HTML cru para dentro do projeto: reconstrua na stack abaixo.
- `imagens/` — todas as imagens já separadas (hero, produtor, produtos, logo). Use estes arquivos, não baixe outros.

## Stack obrigatória (é a linguagem da disciplina)
- **Next.js** (App Router, com a pasta `app/`).
- **React** com componentes funcionais.
- **Tailwind CSS** para toda a estilização (nada de CSS solto ou styled-components).
- **TypeScript** (`.tsx`).

## Identidade visual (aplicar via Tailwind)
Configure estas cores como tema no `tailwind.config`:
- Verde folha (principal): `#2E7D32`
- Verde claro (secundária): `#E8F5E9`
- Laranja terra (destaque/CTA): `#E8730C`
- Cinza escuro (texto): `#1F2937`
- Branco neve (fundo): `#FFFFFF`

Fontes (via `next/font/google`):
- Títulos: **Poppins**
- Texto: **Inter**

## Estrutura de arquivos esperada
```
app/
  layout.tsx        ← metadata de SEO, fontes, <Header> e <Footer> envolvendo o conteúdo
  page.tsx          ← a landing montada juntando as seções
  not-found.tsx     ← página de erro 404 personalizada (tema SaborLocal)
  globals.css       ← diretivas do Tailwind
components/
  Header.tsx        ← cabeçalho com logo + navegação por âncoras
  Footer.tsx        ← rodapé
  Hero.tsx
  Sobre.tsx
  Produtos.tsx
  ComoFunciona.tsx
  Beneficios.tsx
  Entrega.tsx
  Contato.tsx       ← contém o formulário
public/
  imagens/          ← mover as imagens para cá
tailwind.config.ts
```

## Seções da landing (uma página só, navegação por âncoras)
Cada seção é um componente próprio, com um `id` para o menu rolar até ela. Conteúdo de cada seção (use exatamente estes textos):

1. **Home (Hero)** — id `inicio`
   - Título: "Comida de verdade, direto da nossa região."
   - Texto: "O SaborLocal conecta você aos produtores e quitandas da cidade. Fresco, local e sem intermediário, do produtor para a sua mesa, com cupons que cabem no bolso."
   - Botão: "Ver produtos" (rola até #produtos)
   - Imagem: hero da feira.

2. **Sobre** — id `sobre`
   - Título: "Nascemos pra encurtar a distância entre a colônia e a sua cozinha."
   - Texto: "Na nossa região, muita gente produz comida boa e tem dificuldade de vender. E muita gente quer comprar fresco, mas não tem tempo de ir à feira. O SaborLocal resolve os dois lados: dá vitrine ao produtor e leva o melhor da região até a sua casa."
   - Botão: "Conhecer os produtores" (rola até #produtos)
   - Imagem: retrato do produtor.

3. **Produtos** — id `produtos`
   - Título: "Da horta, da padaria e da cozinha da vizinhança."
   - Texto: "Navegue pelas categorias e descubra o que está fresco hoje. Cada item mostra o produtor de origem e o desconto disponível no app."
   - Botão: "Quero meu cupom"
   - Conteúdo: grid de cards. Crie um componente `CardProduto` reutilizável (foto, nome, produtor, selo de desconto em laranja) e renderize uma lista com `.map()`. Categorias: Hortifruti, Padaria, Cozinha caseira, Doces e conservas.

4. **Como funciona** — id `como-funciona`
   - Título: "Em três passos, sua comida da região chega em casa."
   - Texto: três passos — "1) Escolha os produtos e aplique seu cupom. 2) Faça o pedido pelo app ou site. 3) Receba em casa, direto de quem produziu."
   - Botão: "Começar agora"

5. **Benefícios** — id `beneficios`
   - Título: "Por que comprar no SaborLocal."
   - Quatro cards (ícone + título curto): "Fresco", "Econômico", "Justo", "Sustentável". Texto de apoio: "Mais fresco, porque vem direto da região. Mais barato, com cupons dos próprios produtores. Mais justo, porque o produtor recebe melhor sem atravessador. E mais sustentável, com entregas curtas e menos desperdício."

6. **Entrega** — id `entrega`
   - Título: "Será que a gente já chega na sua casa?"
   - Texto: "Digite seu CEP e descubra na hora se o SaborLocal atende a sua região. Estamos crescendo bairro a bairro."
   - Por enquanto deixe um campo de CEP visual (sem lógica). Comente no código: `// TODO: consumo de API entra em aula futura`.

7. **Contato** — id `contato`
   - Título: "Fala com a gente."
   - Texto: "É produtor e quer vender no SaborLocal? Tem uma dúvida ou sugestão? Mande sua mensagem, respondemos rápido."
   - **Formulário** com campos: nome, e-mail, mensagem, e botão "Enviar mensagem".
   - Para o envio, deixe a estrutura pronta com um handler `onSubmit` que por enquanto só faz `console.log` dos dados e mostra uma mensagem de sucesso na tela. Comente claramente: `// O envio real via API será implementado em aula.` NÃO use a tag `<form>` com action externa; use estado do React (useState) e um handler.

## Cabeçalho e rodapé
- `Header.tsx`: logo "SaborLocal" (Sabor em bold verde, Local em regular) + menu com links âncora para todas as seções. Fixo no topo (`sticky top-0`).
- `Footer.tsx`: nome, "© 2026 SaborLocal — Projeto educacional Setrem", e-mail de contato e ícones de redes sociais (podem ser placeholders).

## SEO e metadata (no layout.tsx)
Inclua metadata básica usando a API de metadata do Next:
- `title`: "SaborLocal — comida de verdade, direto da nossa região"
- `description`: uma frase resumindo a proposta.
- `lang="pt-BR"` no html.
- Open Graph básico (title, description, type website).

## Página de erro
- `not-found.tsx`: página 404 com a identidade do SaborLocal, mensagem amigável ("Essa página saiu para entrega e não voltou") e um botão para voltar à Home.

## Qualidade do código (porque é material didático)
- Comente o topo de cada componente explicando, em uma frase, o que ele faz.
- Use nomes de variáveis em português ou inglês claros, consistentes.
- Indente corretamente e mantenha cada componente em seu arquivo.
- Não instale bibliotecas extras além de Next, React, Tailwind. Para ícones, pode usar `lucide-react`.

## Passos
1. Inicialize um projeto Next com TypeScript, Tailwind e App Router.
2. Configure tema (cores) e fontes.
3. Mova as imagens de `imagens/` para `public/imagens/`.
4. Crie os componentes de seção, o Header e o Footer.
5. Monte `page.tsx` e `layout.tsx`.
6. Crie a `not-found.tsx`.
7. Rode o projeto e confirme que sobe sem erros.
8. Ao final, escreva um `README.md` curto explicando como rodar (`npm install`, `npm run dev`) e a estrutura de pastas.
