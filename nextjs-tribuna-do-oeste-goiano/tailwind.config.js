/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Habilita o modo escuro baseado em classe
  theme: {
    extend: {
      colors: {
        'primary': '#3E2723',      // Marrom profundo
        'app-bg': '#FAF9F6',       // Off-white para fundo (modo claro)
        'highlight': '#795548',    // Marrom mais quente para destaque
        'text-main': '#1F1F1F',    // Cinza escuro para texto principal (modo claro)

        // Cores para o modo escuro
        'dark-primary': '#A1887F', // Um tom mais claro do marrom para contraste no escuro
        'dark-app-bg': '#1e1e1e',  // Cinza bem escuro para fundo (modo escuro)
        'dark-highlight': '#E6A757', // Um destaque mais vibrante para o modo escuro
        'dark-text-main': '#E0E0E0', // Cinza claro para texto principal (modo escuro)
      },
      fontFamily: {
        sans: ['PT Sans', 'Arial', 'Helvetica', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      // Adicionando animação de fade-in como sugerido no README
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
