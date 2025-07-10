import type { Metadata } from "next";
import { PT_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const ptSans = PT_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-pt-sans',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Tribuna Digital", // Atualizando o título
  description: "Seu portal de notícias moderno", // Atualizando a descrição
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning> {/* suppressHydrationWarning é útil com temas */}
      <body
        className={`${ptSans.variable} ${playfairDisplay.variable} font-sans
                   bg-app-bg text-text-main
                   dark:bg-dark-app-bg dark:text-dark-text-main
                   antialiased transition-colors duration-300`}
      >
        {/* Aqui seria um bom lugar para um ThemeProvider e um seletor de tema */}
        <nav className="bg-app-bg dark:bg-dark-app-bg border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto max-w-3xl px-8 py-3 flex justify-between items-center">
            <a href="/" className="text-xl font-serif font-bold text-primary dark:text-dark-primary hover:text-highlight dark:hover:text-dark-highlight">
              Tribuna Digital
            </a>
            <div>
              <a href="/favoritos" className="text-sm text-text-main dark:text-dark-text-main hover:text-primary dark:hover:text-dark-primary">
                Favoritos
              </a>
              {/* Adicionar ThemeSwitcher aqui futuramente */}
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
