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
