import {StructureBuilder} from 'sanity/structure'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Conteúdo')
    .items([
      S.listItem()
        .title('Posts')
        .child(S.documentTypeList('post').title('Posts')),
      S.listItem()
        .title('Autores')
        .child(S.documentTypeList('author').title('Autores')),
      S.listItem()
        .title('Categorias')
        .child(S.documentTypeList('category').title('Categorias')),
    ])