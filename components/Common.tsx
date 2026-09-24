import Link from 'next/link';
import { SITE } from '@/lib/site';
import { IconArrow, IconCalendar, IconChevron, IconPhone } from './Icons';

/** İç sayfa başlık alanı (breadcrumb + başlık) */
export function PageHero({
  breadcrumb,
  title,
  lead,
}: {
  breadcrumb: { href?: string; label: string }[];
  title: string;
  lead?: string;
}) {
  return (
    <section className="page-hero">
      <div className="container">
        <nav className="breadcrumb" aria-label="Sayfa yolu">
          {breadcrumb.map((b, i) =>
            b.href ? (
              <Link href={b.href} key={i}>
                {b.label}
                {i < breadcrumb.length - 1 && <IconChevron style={{ transform: 'rotate(-90deg)' }} />}
              </Link>
            ) : (
              <span className="current" key={i}>{b.label}</span>
            ),
          )}
        </nav>
        <h1>{title}</h1>
        {lead && <p>{lead}</p>}
      </div>
    </section>
  );
}

/** Randevu çağrı bandı */
export function CtaBand({
  title = 'Şifa Yolculuğunuzun İlk Adımını Bugün Atın',
  text = 'Bize ait olmayan kıyafetleri çıkarma sürecinizde yanınızdayız. Randevu almak için bizi arayın ya da mesaj bırakın.',
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta reveal">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="cta__actions">
            <Link href="/iletisim" className="btn btn--light">
              <IconCalendar /> Randevu Alın
            </Link>
            <a href={`tel:${SITE.phoneHref}`} className="btn btn--accent">
              <IconPhone /> {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export { IconArrow };
