// API de contato (Route Handler do Next.js).
// Este arquivo roda no SERVIDOR, não no navegador. O formulário (Contato.tsx)
// envia os dados para cá com um fetch para "/api/contato".
// O endereço do endpoint vem do caminho da pasta: app/api/contato/route.ts -> /api/contato

// A função precisa se chamar POST para responder a requisições POST
// (POST é o método HTTP usado para ENVIAR dados).
export async function POST(request: Request) {
  // Lê o corpo da requisição: o JSON que o formulário mandou.
  const { nome, email, mensagem } = await request.json();

  // Validação no servidor: nunca confie apenas na validação do navegador.
  if (!nome || !email || !mensagem) {
    // Response.json devolve uma resposta em JSON.
    // status 400 = "Bad Request" (faltou alguma informação).
    return Response.json(
      { ok: false, erro: "Preencha nome, e-mail e mensagem." },
      { status: 400 }
    );
  }

  // Por enquanto, apenas registramos a mensagem no servidor.
  // Em desenvolvimento aparece no terminal; publicado na Vercel,
  // aparece nos Logs do projeto.
  console.log("Nova mensagem de contato:", { nome, email, mensagem });

  // TODO (aula futura): enviar a mensagem por e-mail de verdade aqui,
  // por exemplo com o serviço Resend e a chave guardada num arquivo .env.

  // Deu tudo certo: respondemos sucesso (status 200 por padrão).
  return Response.json({ ok: true });
}
