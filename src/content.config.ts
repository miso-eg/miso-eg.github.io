import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const safeLink = z.string().refine(value => /^https:\/\//.test(value) || /^\/(?!\/)/.test(value), 'https URLまたは / で始まるサイト内パスを指定してください');
const works = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/works' }),
  schema: z.object({
    title: z.string(), description: z.string(),
    category: z.enum(['tools', 'gallery', 'videos', 'music', 'other', 'news']),
    date: z.coerce.date(), draft: z.boolean().default(false),
    order: z.number().default(100), tags: z.array(z.string()).default([]),
    url: safeLink.optional(), repository: z.string().url().optional(),
    image: z.string().regex(/^\/(?!\/)/).optional(), imageAlt: z.string().optional(),
    audio: z.string().regex(/^\/(?!\/)/).optional(), youtubeId: z.string().regex(/^[\w-]{11}$/).optional(),
  }),
});
export const collections = { works };
