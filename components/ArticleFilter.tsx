'use client';

import { useMemo, useState } from 'react';
import type { Article } from '@/lib/articles-types';
import { CATEGORY_LABELS } from '@/lib/articles-types';
import { ArticleCard } from './ArticleCard';

const FILTERS = [
  { key: 'all', label: 'Tümü' },
  { key: 'makaleler', label: 'Makaleler' },
  { key: 'freyada-dogum', label: "Freya'da Doğum" },
] as const;

export default function ArticleFilter({ articles }: { articles: Article[] }) {
  const [filter, setFilter] = useState<string>('all');

  const shown = useMemo(
    () => (filter === 'all' ? articles : articles.filter((a) => a.category === filter)),
    [filter, articles],
  );

  return (
    <>
      <div className="filter-bar">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            className={`filter-btn${filter === f.key ? ' is-active' : ''}`}
            onClick={() => setFilter(f.key)}
            aria-pressed={filter === f.key}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className="articles__grid">
        {shown.map((a, i) => (
          <ArticleCard key={a.slug} a={a} delay={(i % 3) as 0 | 1 | 2} />
        ))}
      </div>
      <p className="articles-count">
        {shown.length} makale gösteriliyor
        {filter !== 'all' && ` — kategori: ${CATEGORY_LABELS[filter as keyof typeof CATEGORY_LABELS]}`}
      </p>
    </>
  );
}
