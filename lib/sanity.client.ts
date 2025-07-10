import {createClient} from '@sanity/client'
import {apiVersion, dataset, projectId} from './sanity.api'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
})