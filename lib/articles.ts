import fs from 'fs';
import path from 'path';
import type { Article, Category } from './articles-types';

export type { Article, Category, Block } from './articles-types';
export { CATEGORY_LABELS } from './articles-types';

/**
 * Makaleler data/articles.jsonc dosyasından okunur.
 * .jsonc (JSON with Comments) dosyasının başında /* ... *\/ ile
 * yorum/rehber bloğu vardır. Bu yorumlar parse edilmeden önce temizlenir.
 *
 * Yeni makale eklemek için data/articles.jsonc dosyasını düzenleyin.
 * Dosya içindeki rehber yorum satırları nasıl makale ekleneceğini açıklar.
 */
function loadArticles(): Article[] {
  const filePath = path.join(process.cwd(), 'data', 'articles.jsonc');
  const raw = fs.readFileSync(filePath, 'utf8');
  // /* ... */ yorum bloklarını temizle (.jsonc yorumları JSON.parse tarafından desteklenmez)
  const cleaned = raw.replace(/\/\*[\s\S]*?\*\//g, '');
  return JSON.parse(cleaned) as Article[];
}

export const ARTICLES: Article[] = loadArticles();

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function byCategory(category: Category): Article[] {
  return ARTICLES.filter((a) => a.category === category);
}

export function getNeighbors(slug: string, category: Category): { prev?: Article; next?: Article } {
  const list = byCategory(category);
  const i = list.findIndex((a) => a.slug === slug);
  return {
    prev: i > 0 ? list[i - 1] : undefined,
    next: i < list.length - 1 ? list[i + 1] : undefined,
  };
}

export function articleUrl(slug: string): string {
  return `/makale/${slug}`;
}
