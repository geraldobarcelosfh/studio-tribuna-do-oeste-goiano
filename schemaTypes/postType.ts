import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Autor',
      type: 'reference',
      to: [{type: 'author'}],
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagem Principal',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'categories',
      title: 'Categorias',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data de Publicação',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Conteúdo',
      type: 'blockContent',
    }),
    defineField({
      name: 'excerpt',
      title: 'Resumo (Excerpt)',
      type: 'text',
      rows: 3,
      description: 'Um breve resumo do post, usado em listagens e previews.',
      validation: (Rule) => Rule.max(200).warning('O resumo idealmente não deve passar de 200 caracteres.'),
    }),
    defineField({
      name: 'status',
      title: 'Status de Publicação',
      type: 'string',
      options: {
        list: [
          {title: 'Rascunho', value: 'draft'},
          {title: 'Em Revisão', value: 'pending_review'},
          {title: 'Publicado', value: 'published'},
        ],
        layout: 'radio', // ou 'dropdown'
      },
      initialValue: 'draft',
      validation: (Rule) => Rule.required(),
      description: 'Controla a visibilidade do post no site público. Apenas posts "Publicados" são exibidos.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `por ${author}`}
    },
  },
})
