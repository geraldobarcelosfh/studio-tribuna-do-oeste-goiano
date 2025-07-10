Tribuna Digital: Seu Portal de Notícias Moderno

Bem-vindo ao repositório do Tribuna Digital, um portal de notícias construído com uma arquitetura moderna, focada em performance, flexibilidade e uma experiência de desenvolvimento de alta qualidade.

Visão Geral do Projeto

O Tribuna Digital é uma aplicação web projetada para exibir notícias de forma limpa e organizada. Ele foi construído sobre uma base desacoplada (headless), utilizando Next.js para o frontend e um CMS (Sistema de Gerenciamento de Conteúdo) para o backend, permitindo uma gestão de conteúdo ágil e uma experiência de usuário extremamente rápida.

Arquitetura da Solução

A arquitetura do projeto foi pensada para ser escalável e flexível, separando a camada de apresentação da camada de dados.
Frontend: Desenvolvido com Next.js, um framework React que possibilita a renderização no lado do servidor (SSR) e a geração de sites estáticos (SSG). Isso garante uma performance excepcional e ótima otimização para motores de busca (SEO). A interface é construída com TypeScript e componentizada utilizando shadcn/ui e Tailwind CSS.
Backend (Gerenciamento de Conteúdo): Um Headless CMS (como Sanity, Strapi ou Payload) é responsável por gerenciar todo o conteúdo (artigos, categorias, autores). O frontend consome os dados do CMS através de uma API. Esta abordagem permite que a equipe de conteúdo trabalhe de forma independente da equipe de desenvolvimento.
Hospedagem:
Frontend: Idealmente hospedado em plataformas como a Vercel, que é otimizada para Next.js e oferece um deploy contínuo integrado com o Git.
Backend: O Headless CMS pode ser auto-hospedado em um VPS (como DigitalOcean ou Hostinger) ou em plataformas de PaaS (como Render ou Railway), garantindo controle e escalabilidade.

Identidade Visual e UI

A identidade visual do Tribuna Digital busca transmitir sofisticação e confiança, com uma interface limpa e focada na legibilidade.
Paleta de Cores:
Cor Primária: Um marrom profundo (#3E2723) para transmitir sofisticação.
Cor de Fundo: Um off-white (#FAF9F6) para uma apresentação clássica.
Cor de Destaque: Um marrom mais quente (#795548) para highlights secundários.
Tipografia:
Manchetes: Playfair Display (serifada), para um estilo elegante e legível.
Corpo do Texto: PT Sans (sem serifa), para máxima legibilidade.
UI e Componentes:
A interface utiliza o sistema de componentes shadcn/ui, que são acessíveis e customizáveis.
O layout é baseado em grid, limpo e com uma clara separação entre os artigos e as categorias.
Animações sutis de fade-in são utilizadas para uma experiência de usuário polida durante o carregamento e as transições.

Funcionalidades

O projeto foi planejado com as seguintes funcionalidades em mente:
Exibição de Notícias: Apresentação clara dos artigos com título, resumo, imagem e categoria.
Filtro de Artigos: Os usuários podem filtrar as notícias por categoria, localização e data.
Salvar Artigos: Funcionalidade para os usuários salvarem seus artigos favoritos para leitura posterior.
Customização de Tema: Um seletor de tema permite alternar entre os modos claro (light) e escuro (dark).
Feed Personalizado: Planejado para implementar um feed de notícias personalizado com base nas preferências do usuário.

Setup e Instalação

Para rodar este projeto localmente, siga os passos abaixo:
Clone o repositório:
Bash
git clone [URL_DO_SEU_REPOSITORIO]
cd tribunadigial


Instale as dependências:
Bash
npm install


Configure as Variáveis de Ambiente:
Crie um arquivo .env.local na raiz do projeto e adicione as variáveis para conectar ao seu Headless CMS.
Snippet de código
NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1337
STRAPI_API_TOKEN=seu_token_de_api_do_cms


Rode o projeto em modo de desenvolvimento:
Bash
npm run dev

Abra http://localhost:3000 no seu navegador para ver o resultado.

Estrutura de Pastas

O projeto é organizado da seguinte forma:



/
├── public/           # Arquivos estáticos e imagens
├── src/
│   ├── app/          # Rotas e páginas principais (App Router)
│   ├── components/   # Componentes React reutilizáveis
│   │   ├── ui/       # Componentes base do shadcn/ui
│   │   └── ...       # Outros componentes da aplicação
│   ├── hooks/        # Hooks customizados do React
│   ├── lib/          # Funções utilitárias e lógica de API
│   └── ...
├── .gitignore        # Arquivos e pastas ignorados pelo Git
├── next.config.ts    # Configurações do Next.js
├── package.json      # Dependências e scripts do projeto
└── tsconfig.json     # Configurações do TypeScript



Deploy

Para fazer o deploy do projeto, você precisará publicar o frontend e o backend separadamente.

Frontend (Next.js)

Plataforma Recomendada: Vercel
Processo:
Faça o push do seu código para um repositório no GitHub/GitLab.
Conecte seu repositório à Vercel.
A Vercel detectará automaticamente que é um projeto Next.js e aplicará as configurações de build ideais.
Configure as variáveis de ambiente (NEXT_PUBLIC_STRAPI_API_URL e STRAPI_API_TOKEN) no painel da Vercel para apontar para a sua API do CMS em produção.

Backend (Headless CMS)

Plataformas Recomendadas: Render, Railway, ou um VPS na DigitalOcean/Hostinger.
Processo (Exemplo com Render):
Crie um "Web Service" no Render e conecte-o ao repositório do seu CMS (ex: Strapi).
Configure os comandos de build e start no painel do Render.
Crie um serviço de banco de dados (ex: PostgreSQL) no Render e conecte-o ao seu CMS.
Configure as variáveis de ambiente do CMS (credenciais do banco, chaves de segurança, etc.) no painel do Render.

