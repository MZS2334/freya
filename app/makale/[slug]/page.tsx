import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArticleCard, ArticleMeta } from '@/components/ArticleCard';
import { CtaBand } from '@/components/Common';
import { ArtIllustration } from '@/components/Art';
import {
  ARTICLES, CATEGORY_LABELS, articleUrl, byCategory, getArticle, getNeighbors,
} from '@/lib/articles';
import type { Block } from '@/lib/articles';
import { IconChevron, IconFacebook, IconTwitter, IconWhatsApp } from '@/components/Icons';
import { SITE } from '@/lib/site';

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await props.params;
  const a = getArticle(slug);
  if (!a) return { title: 'Makale bulunamadı' };
  return {
    title: a.title,
    description: a.excerpt,
    openGraph: { title: a.title, description: a.excerpt, type: 'article' },
  };
}

function BlockContent({ block, i }: { block: Block; i: number }) {
  switch (block.t) {
    case 'h2':
      return <h2 key={i}>{block.text}</h2>;
    case 'h3':
      return <h3 key={i}>{block.text}</h3>;
    case 'quote':
      return <blockquote key={i}>{block.text}</blockquote>;
    case 'ul':
      return <ul key={i}>{block.items.map((li, j) => <li key={j}>{li}</li>)}</ul>;
    case 'ol':
      return <ol key={i}>{block.items.map((li, j) => <li key={j}>{li}</li>)}</ol>;
    default:
      return <p key={i}>{block.text}</p>;
  }
}

export default async function MakaleDetayPage(
  props: { params: Promise<{ slug: string }> },
) {
  const { slug } = await props.params;
  const article = getArticle(slug);
  if (!article) notFound();

  const { prev, next } = getNeighbors(slug, article.category);
  const related = byCategory(article.category)
    .filter((a) => a.slug !== slug)
    .slice(0, 3);

  const pageUrl = `${SITE.url}${articleUrl(slug)}`;
  const encodedUrl = encodeURIComponent(pageUrl);
  const encodedTitle = encodeURIComponent(article.title);

  return (
    <>
      <section className="section" style={{ paddingTop: 64 }}>
        <div className="container">
          <nav className="breadcrumb" aria-label="Sayfa yolu">
            <Link href="/">Freya Psikoloji <IconChevron style={{ transform: 'rotate(-90deg)' }} /></Link>
            <Link href={article.category === 'freyada-dogum' ? '/freyada-dogum' : '/makaleler'}>
              {CATEGORY_LABELS[article.category]} <IconChevron style={{ transform: 'rotate(-90deg)' }} />
            </Link>
            <span className="current">{article.title}</span>
          </nav>

          <div className="article-detail">
            <header className="article-detail__head">
              <span className="article-tag" style={{ marginBottom: 0 }}>{CATEGORY_LABELS[article.category]}</span>
              <h1>{article.title}</h1>
              <div className="article-detail__meta">
                <ArticleMeta a={article} />
              </div>
            </header>

            <div className="article-hero-media">
              <ArtIllustration theme={article.theme} variant={article.variant} />
            </div>

            <div className="prose">
              {article.content.map((b, i) => <BlockContent key={i} block={b} i={i} />)}
            </div>

            <div className="article-share">
              <span>Paylaş</span>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                target="_blank" rel="noopener noreferrer" aria-label="Facebook’ta paylaş"
              >
                <IconFacebook />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
                target="_blank" rel="noopener noreferrer" aria-label="Twitter’da paylaş"
              >
                <IconTwitter />
              </a>
              <a
                href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
                target="_blank" rel="noopener noreferrer" aria-label="WhatsApp ile paylaş"
              >
                <IconWhatsApp />
              </a>
            </div>

            <nav className="article-nav" aria-label="Önceki ve sonraki makaleler">
              {prev ? (
                <Link href={articleUrl(prev.slug)}>
                  <small>Önceki Makale</small>
                  <strong>{prev.title}</strong>
                </Link>
              ) : <span />}
              {next ? (
                <Link href={articleUrl(next.slug)} className="is-next">
                  <small>Sonraki Makale</small>
                  <strong>{next.title}</strong>
                </Link>
              ) : <span />}
            </nav>
          </div>

          {related.length > 0 && (
            <section style={{ marginTop: 24 }}>
              <div className="section-head" style={{ marginBottom: 32 }}>
                <span className="eyebrow">Okumaya devam edin</span>
                <h2 style={{ fontSize: 32 }}>Benzer Makaleler</h2>
              </div>
              <div className="related__grid">
                {related.map((a, i) => <ArticleCard key={a.slug} a={a} delay={i as 0 | 1 | 2} />)}
              </div>
            </section>
          )}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
