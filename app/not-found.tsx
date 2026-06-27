// Página de erro 404 personalizada: aparece quando a rota não existe.
// Mantém a identidade do SaborLocal e oferece um caminho de volta à Home.
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-verde-claro px-6 py-20">
      <div className="max-w-md text-center">
        <p className="font-poppins text-6xl font-bold text-verde">404</p>
        <h1 className="mt-4 font-poppins text-2xl font-bold text-cinza">
          Essa página saiu para entrega e não voltou.
        </h1>
        <p className="mt-3 text-base leading-relaxed text-cinza/70">
          O endereço que você procurou não existe ou foi movido. Que tal voltar
          para a página inicial e continuar de onde parou?
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full bg-verde px-8 py-4 font-semibold text-branco transition-colors hover:bg-verde/90"
        >
          Voltar para a Home
        </Link>
      </div>
    </section>
  );
}
