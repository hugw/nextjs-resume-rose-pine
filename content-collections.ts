import { defineCollection, defineConfig } from '@content-collections/core'
import { compileMarkdown } from '@content-collections/markdown'

const profile = defineCollection({
  name: 'profile',
  directory: 'src/data/profile',
  include: '**/*.yaml',
  parser: 'yaml',
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

const skills = defineCollection({
  name: 'skills',
  directory: 'src/data/skills',
  include: '**/*.yaml',
  parser: 'yaml',
  schema: (z) => ({
    title: z.string(),
    slug: z.string(),
    skills: z.array(
      z.object({
        group: z.string(),
        items: z.array(z.object({ name: z.string() })),
      }),
    ),
  }),
})

export default defineConfig({
  collections: [profile, intro, skills],
})
