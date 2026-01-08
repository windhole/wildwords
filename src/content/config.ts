import { defineCollection, z } from 'astro:content';

const wildwords = defineCollection({
  type: 'content',
  schema: z.object({
    term: z.string(),          // 用語名
    reading: z.string(),       // 読み（五十音順の並び替えに便利）
    description: z.string(),   // 一覧用の短い説明
  }),
});

export const collections = {
  'wildwords': wildwords,
};
