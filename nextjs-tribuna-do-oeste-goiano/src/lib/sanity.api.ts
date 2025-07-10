export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'y3gukre0'

// Adicionando uma variável para o token, caso seja necessário para preview ou escritas
// Este token NÃO deve ser exposto publicamente no lado do cliente se for um token com permissões de escrita.
// Para dados de preview, um token read-only pode ser usado e exposto via NEXT_PUBLIC_.
// Para este exemplo, vamos assumir um token para o cliente que pode ser usado para preview.
export const token = process.env.NEXT_PUBLIC_SANITY_TOKEN || undefined
