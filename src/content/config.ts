import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // v5ではこれが必要

const wildwords = defineCollection({
  // src/content/wildwords/ 内の .md ファイルを読み込む設定
  loader: glob({ pattern: "**/*.md", base: "./src/content/wildwords" }),
  schema: z.object({
    title: z.string(),          // 用語名
    reading: z.string(),        // 読み（あいうえお順用）
    description: z.string(),    // 一覧用の短い説明
    category: z.string().optional(),
    relatedTerms: z.array(z.string()).optional(),
    updatedDate: z.coerce.date(), // 文字列で書いても日付オブジェクトに変換してくれる
  }),
});

export const collections = {
  'wildwords': wildwords,
};
