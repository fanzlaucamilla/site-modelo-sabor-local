/** Configuração do PostCSS para o Tailwind v4.
 *  No v4 toda a integração fica neste único plugin
 *  (não usamos mais 'tailwindcss' + 'autoprefixer' separados). */
const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default config;
