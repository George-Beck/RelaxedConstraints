import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    category: z.enum(['research', 'commentary', 'literature reviews']).default('commentary'),
  }),
});

export const collections = { posts };

