import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().transform((s) => s.trim()),
    description: z.string().transform((s) => s.trim().replace(/\s+/g, ' ')),
    date: z.coerce.date(),
    image: z.string().optional(),
    category: z.string(),
    background: z.string().default('#f97316'),
  }),
});

export const collections = { blog };
