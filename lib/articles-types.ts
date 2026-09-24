import type { Theme } from '@/components/Art';

export type Category = 'makaleler' | 'freyada-dogum';

export const CATEGORY_LABELS: Record<Category, string> = {
  makaleler: 'Makaleler',
  'freyada-dogum': "Freya'da Doğum",
};

export type Block =
  | { t: 'p'; text: string }
  | { t: 'h2'; text: string }
  | { t: 'h3'; text: string }
  | { t: 'quote'; text: string }
  | { t: 'ul'; items: string[] }
  | { t: 'ol'; items: string[] };

export interface Article {
  slug: string;
  title: string;
  category: Category;
  excerpt: string;
  date: string;
  readTime: number;
  theme: Theme;
  variant: number;
  content: Block[];
}

export function articleUrl(slug: string): string {
  return `/makale/${slug}`;
}
