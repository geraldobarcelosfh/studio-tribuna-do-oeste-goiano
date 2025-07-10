import {createClient} from '@sanity/client'
import {apiVersion, dataset, projectId, token} from './sanity.api'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Defina como true em produção se não precisar de dados em tempo real sempre
  token: token, // Adiciona o token se estiver definido
  perspective: 'published', // Garante que apenas documentos publicados sejam retornados por padrão
})
