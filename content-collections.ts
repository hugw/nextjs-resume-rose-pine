import { defineCollection, defineConfig } from '@content-collections/core'
import { compileMarkdown } from '@content-collections/markdown'

const profile = defineCollection({
  name: 'profile',
  directory: 'src/data/profile',
  include: '**/*.md',
  schema: (z) => ({
    name: z.string(),
    role: z.string(),
    headline: z.string().nullable(),
    socials: z.array(
      z.object({
        id: z.string(),
        url: z.string().url(),
      }),
    ),
  }),
})

const intro = defineCollection({
  name: 'intro',
  directory: 'src/data/intro',
  include: '**/*.md',
  schema: (z) => ({
    title: z.string(),
    slug: z.string(),
  }),
  transform: async (document, context) => {
    const html = await compileMarkdown(context, document)
    return {
      ...document,
      html,
    }
  },
})

export default defineConfig({
  collections: [profile, intro],
})
