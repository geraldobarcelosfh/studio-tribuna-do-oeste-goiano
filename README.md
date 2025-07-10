# Tribuna Digital: Seu Portal de Notícias Moderno

Bem-vindo ao repositório do Tribuna Digital, um portal de notícias construído com Next.js, Sanity.io e Tailwind CSS, focado em performance, flexibilidade e uma experiência de desenvolvimento e editorial de alta qualidade.

## Visão Geral do Projeto

O Tribuna Digital é uma aplicação web projetada para exibir notícias de forma limpa, organizada e moderna. Ele utiliza uma arquitetura desacoplada (headless):
*   **Frontend:** Next.js (React) para uma interface rápida e otimizada para SEO.
*   **Backend (CMS):** Sanity.io para gerenciamento de conteúdo ágil e estruturado.

## Arquitetura da Solução

*   **Frontend:** Desenvolvido com Next.js (usando App Router) e TypeScript. A interface é construída com Tailwind CSS para estilização e componentização.
*   **Backend (Gerenciamento de Conteúdo):** Sanity.io é o Headless CMS responsável por gerenciar artigos, categorias, autores, etc. O frontend consome os dados do Sanity Studio através de sua API GROQ.
*   **Hospedagem:**
    *   **Frontend (Next.js):** Recomendado Vercel (otimizado para Next.js) ou plataformas similares que suportem Node.js (ex: VPS Hostinger).
    *   **Backend (Sanity.io):** O Content Lake do Sanity é gerenciado pela Sanity.io. O Sanity Studio (interface de edição) pode ser hospedado na Vercel, Netlify, ou auto-hospedado em um ambiente Node.js (ex: VPS Hostinger).

## Identidade Visual e UI

A identidade visual busca transmitir sofisticação e confiança, com foco na legibilidade.

*   **Paleta de Cores (Configurada no Tailwind CSS):**
    *   Primária (Manchetes, Acentos): Marrom profundo (`#3E2723`, `primary`)
    *   Fundo (Claro): Off-white (`#FAF9F6`, `app-bg`)
    *   Destaque (Links hover, tags): Marrom mais quente (`#795548`, `highlight`)
    *   Texto Principal (Claro): Cinza escuro (`#1F1F1F`, `text-main`)
    *   **Modo Escuro:** Cores correspondentes configuradas (`dark-primary`, `dark-app-bg`, etc.)
*   **Tipografia (Google Fonts via `next/font`):**
    *   Manchetes: Playfair Display (serifada, `font-serif`)
    *   Corpo do Texto: PT Sans (sem serifa, `font-sans`)
*   **UI e Componentes:**
    *   Estilização primariamente com Tailwind CSS.
    *   Layout responsivo, limpo, com separação clara entre os elementos.
    *   Animações sutis de fade-in para carregamento de página.
    *   Ícones de [Lucide React](https://lucide.dev/) para elementos de UI como o botão de "favoritar".

## Funcionalidades Implementadas

*   **Exibição de Notícias:** Artigos são apresentados com título, resumo (excerpt), imagem principal e categorias.
*   **Fluxo de Verificação de Notícias:** Posts no Sanity possuem um status (`rascunho`, `em revisão`, `publicado`). Apenas posts `publicados` são visíveis no site.
*   **Filtro de Artigos por Categoria:** Usuários podem filtrar as notícias selecionando uma categoria em um menu dropdown.
*   **Salvar Artigos (Favoritos):** Usuários podem salvar/remover artigos favoritos. Os favoritos são armazenados no `localStorage` do navegador e podem ser visualizados em uma página dedicada (`/favoritos`).
*   **Tema Claro/Escuro:** O site suporta tema claro e escuro, respeitando a preferência do sistema e preparado para um seletor manual (não implementado).

## Funcionalidades Planejadas (Roadmap)

*   Filtro de artigos por data e localização.
*   Feed de notícias personalizado com base nas preferências do usuário.
*   Autenticação de usuários para funcionalidades avançadas.
*   Seletor manual de tema (claro/escuro).

## Setup e Instalação (Projeto Next.js Frontend)

1.  **Clone o repositório:**
    ```bash
    git clone [URL_DO_SEU_REPOSITORIO]
    cd tribunadigital # Ou o nome da pasta raiz do projeto
    ```

2.  **Navegue até a pasta do projeto Next.js:**
    O projeto Next.js está localizado em `nextjs-tribuna-do-oeste-goiano/`.
    ```bash
    cd nextjs-tribuna-do-oeste-goiano
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    # ou yarn install
    ```
    Será necessário instalar `lucide-react` se ainda não estiver no `package.json`:
    ```bash
    npm install lucide-react
    # ou yarn add lucide-react
    ```

4.  **Configure as Variáveis de Ambiente:**
    Crie um arquivo `.env.local` na pasta `nextjs-tribuna-do-oeste-goiano/` (copiando de `env.local.example` na raiz do repositório, se ele for movido para dentro da pasta do Next.js ou adaptado).
    Popule com suas credenciais do Sanity:
    ```ini
    NEXT_PUBLIC_SANITY_PROJECT_ID="seu_project_id_do_sanity"
    NEXT_PUBLIC_SANITY_DATASET="seu_dataset (ex: production)"
    NEXT_PUBLIC_SANITY_API_VERSION="2024-01-01" # Ou a versão desejada

    # Opcional: Token para preview de rascunhos (se implementado)
    # NEXT_PUBLIC_SANITY_TOKEN="seu_token_read_only_para_preview"
    ```
    *Nota: O arquivo `env.local.example` na raiz do repositório contém exemplos de variáveis para o Next.js e para o Sanity Studio.*

5.  **Rode o projeto Next.js em modo de desenvolvimento:**
    ```bash
    npm run dev
    # ou yarn dev
    ```
    Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## Configuração e Uso do Sanity Studio

Os arquivos de configuração do Sanity Studio (`sanity.config.ts`, `sanity.cli.ts`, `schemaTypes/`) estão na raiz do repositório.

1.  **Instale as dependências do Sanity Studio (se ainda não o fez na raiz):**
    Certifique-se que o `package.json` na raiz do repositório lista as dependências do Sanity (como `sanity`, `@sanity/vision`, etc.).
    ```bash
    npm install # na raiz do repositório
    # ou yarn install
    ```

2.  **Rode o Sanity Studio localmente:**
    A partir da raiz do repositório:
    ```bash
    npx sanity dev
    # ou yarn sanity dev
    ```
    Abra o Studio (geralmente [http://localhost:3333](http://localhost:3333)) e gerencie seu conteúdo. Certifique-se de que os tipos de post (`postType.ts`) incluam os campos `excerpt` e `status`.

## Estrutura de Pastas (Projeto Next.js em `nextjs-tribuna-do-oeste-goiano/`)

```
nextjs-tribuna-do-oeste-goiano/
├── public/           # Arquivos estáticos e imagens
├── src/
│   ├── app/          # Rotas e páginas principais (App Router)
│   ├── components/   # Componentes React reutilizáveis (PostList, CategoryFilter, etc.)
│   │   └── ui/       # (Planejado para componentes base shadcn/ui)
│   ├── hooks/        # Hooks customizados (useFavoriteArticles)
│   └── lib/          # Funções utilitárias e lógica de API Sanity (client, queries)
├── .gitignore
├── next.config.js    # (Ou .ts) Configurações do Next.js
├── package.json
├── tailwind.config.js
└── tsconfig.json
```
**Nota:** Os arquivos de configuração do Sanity Studio (`sanity.config.ts`, etc.) residem na pasta raiz do repositório, separados do projeto Next.js.

## Deploy

### Frontend (Next.js)

*   **Plataforma Recomendada:** Vercel
*   **Processo:**
    1.  Faça o push do seu código para um repositório Git (GitHub, GitLab).
    2.  Conecte seu repositório à Vercel. A Vercel detectará automaticamente que é um projeto Next.js.
    3.  Configure o "Root Directory" nas configurações do projeto Vercel para apontar para `nextjs-tribuna-do-oeste-goiano`.
    4.  Configure as variáveis de ambiente (listadas acima em "Configure as Variáveis de Ambiente") no painel da Vercel.

### Backend (Sanity Studio)

*   **Opções de Hospedagem:**
    *   **Vercel/Netlify:** Podem hospedar o build estático do Sanity Studio.
    *   **Sanity.io:** O Content Lake é sempre hospedado pela Sanity.
    *   **VPS (ex: Hostinger):** Você pode buildar o Studio e servi-lo como um conjunto de arquivos estáticos, ou se você tiver customizações que exijam um servidor Node.js para o Studio.
*   **Processo (Exemplo com Vercel para o Studio):**
    1.  No seu projeto Vercel, você pode adicionar um novo projeto ou configurar um monorepo.
    2.  Aponte para a raiz do seu repositório Git.
    3.  Configure o "Root Directory" para a raiz (onde estão os arquivos do Sanity).
    4.  Comandos de Build: `npx sanity build` ou `yarn sanity build`. O diretório de output geralmente é `dist/` (verifique seu `sanity.cli.ts` ou `sanity.json`).
    5.  Configure as variáveis de ambiente do Studio se necessário (ex: `SANITY_STUDIO_PROJECT_ID`, `SANITY_STUDIO_DATASET`) no painel da Vercel, embora geralmente sejam lidas do `sanity.config.ts`.

Lembre-se de que o **Content Lake (seus dados)** é gerenciado pela Sanity.io na nuvem. O deploy do "backend" refere-se principalmente ao **Sanity Studio** (a interface de edição).
```
