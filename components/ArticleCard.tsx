import Link from 'next/link';
import type { Article } from '@/lib/articles-types';
import { CATEGORY_LABELS, articleUrl } from '@/lib/articles-types';
import { ArtIllustration } from './Art';
import { IconArrow, IconCalendar, IconClock } from './Icons';

export function ArticleCard({ a, delay }: { a: Article; delay?: number }) {
  return (
    <article className="article-card reveal" data-delay={delay}>
      <Link href={articleUrl(a.slug)} className="article-card__media" aria-label={a.title}>
        <ArtIllustration theme={a.theme} variant={a.variant} />
        <span className="article-card__cat">{CATEGORY_LABELS[a.category]}</span>
      </Link>
      <div className="article-card__body">
        <h3>
          <Link href={articleUrl(a.slug)}>{a.title}</Link>
        </h3>
        <p>{a.excerpt}</p>
        <div className="article-card__foot">
          <span>
            <IconCalendar style={{ width: 14, height: 14, marginRight: 6, verticalAlign: -2 }} />
            {a.date}
          </span>
          <Link href={articleUrl(a.slug)} className="article-card__read">
            Devamını oku <IconArrow />
          </Link>
        </div>
      </div>
    </article>
  );
}

export function ArticleMeta({ a }: { a: Article }) {
  return (
    <div className="article-meta">
      <span><IconCalendar /> {a.date}</span>
      <span><IconClock /> {a.readTime} dk okuma</span>
      <span>{CATEGORY_LABELS[a.category]}</span>
    </div>
  );
}
