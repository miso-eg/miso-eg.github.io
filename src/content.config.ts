import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const safeLink = z.string().refine(value => /^https:\/\//.test(value) || /^\/(?!\/)/.test(value), 'https URLまたは / で始まるサイト内パスを指定してください');
const works = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/works' }),
  schema: z.object({
    title: z.string(), description: z.string(),
    category: z.enum(['tools', 'service', 'gallery', 'line', 'music', 'other', 'document']),
    date: z.coerce.date(), draft: z.boolean().default(false),
    order: z.number().default(100), tags: z.array(z.string()).default([]),
    url: safeLink.optional(), repository: z.string().url().optional(),
    image: z.string().regex(/^\/(?!\/)/).optional(), imageAlt: z.string().optional(),
    audio: z.string().regex(/^\/(?!\/)/).optional(),
    pageImages: z.array(z.object({ title: z.string(), src: z.string().regex(/^\/(?!\/)/) })).optional(),
  }),
});
export const collections = { works };
