import { defineCollection, defineConfig } from '@content-collections/core'
import { compileMarkdown } from '@content-collections/markdown'

const basics = defineCollection({
  name: 'basics',
  typeName: 'Basics',
  directory: 'src/data/basics',
  include: '**/*.yaml',
  parser: 'yaml',
  schema: (z) => {
    const sectionSchema = z.object({
      name: z.string(),
      slug: z.string(),
    })

    return {
      profile: z.object({
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
      skills: z.array(
        z.object({
          group: z.string(),
          items: z.array(
            z.object({
              name: z.string(),
            }),
          ),
        }),
      ),
      sections: z.object({
        intro: sectionSchema,
        skills: sectionSchema,
        experience: sectionSchema,
        faq: sectionSchema,
      }),
      labels: z.object({
        hello: z.string(),
        builtWith: z.string(),
        and: z.string(),
      }),
    }
  },
})

const intro = defineCollection({
  name: 'intro',
  directory: 'src/data/intro',
  include: '**/*.md',
  schema: () => ({}),
  transform: async (document, context) => {
    const html = await compileMarkdown(context, document)
    return {
      ...document,
      html,
    }
  },
})

const faq = defineCollection({
  name: 'faq',
  directory: 'src/data/faq',
  include: '**/*.md',
  schema: (z) => ({
    question: z.string(),
    order: z.number(),
  }),
  transform: async (document, context) => {
    const html = await compileMarkdown(context, document)
    return {
      ...document,
      html,
    }
  },
})

const experience = defineCollection({
  name: 'experience',
  directory: 'src/data/experience',
  include: '**/*.yaml',
  parser: 'yaml',
  schema: (z) => ({
    experience: z.array(
      z.object({
        company: z.string(),
        date: z.string(),
        roles: z.array(
          z.object({
            title: z.string(),
            date: z.string(),
            description: z.array(z.string()),
          }),
        ),
      }),
    ),
  }),
})

export default defineConfig({
  collections: [basics, intro, faq, experience],
})
