import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero, CtaBand } from '@/components/Common';
import { SITE } from '@/lib/site';
import { IconArrow, IconBook, IconGrad, IconShield, IconSparkle } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Ekibimiz',
  description:
    'Freya Psikoloji ekibi — Uzm. Klinik Psikolog R. Gülçin Sanlı. Psikodramatist, doğum psikoloğu ve doula.',
};

const CREDENTIALS = [
  {
    icon: 'grad',
    title: 'Lisans — Aydın Üniversitesi, Psikoloji',
    text: '“Onur derecesi” ile mezuniyet.',
  },
  {
    icon: 'grad',
    title: 'Yüksek Lisans — Arel Üniversitesi, Klinik Psikoloji',
    text: 'Bitirme tezi: “Duygusal (Emosyonel) Yeme”.',
  },
  {
    icon: 'sparkle',
    title: 'İstanbul Psikodrama Enstitüsü (2017)',
    text: 'Psikodrama eğitimini tamamlayarak psikodramatist olmaya hak kazanmıştır.',
  },
  {
    icon: 'shield',
    title: 'İstanbul Doğum Akademisi — Keşkesiz Doğum Eğitimi',
    text: '“Doğum psikoloğu” ve “doula” unvanlarını almıştır.',
  },
  {
    icon: 'book',
    title: 'Kuruculuk',
    text: 'FREYA Psikoloji ve AYKUŞAĞI Enstitüsü kurucusu.',
  },
] as const;

const CRED_ICONS = { grad: IconGrad, sparkle: IconSparkle, shield: IconShield, book: IconBook };

export default function EkibimizPage() {
  const detail = [
    'Çocuk-ergen terapileri, zeka ve gelişim testleri ve yetişkinlerle grup terapileri yürütmektedir. Aynı zamanda özel bir kurumda psikoloji öğrencilerine alanla ilgili eğitimler vermekte ve terapist yetiştirmektedir.',
    'Çocuklarla 12 yaşına kadar “oyun terapisi” ile çalışmaktadır. Ergenlerle dürtü kontrol bozuklukları, aile içi iletişim sorunları, patolojik durumlar üzerine çalışmakta olup aynı zamanda yetişkinlerle özel çalışma ve uzmanlık alanı olan yeme bozuklukları, duygusal yeme, obezite üzerine grup terapileri ve bireysel terapiler yürütmektedir.',
    'Yetişkinlerin tıbbi nedenlerle açıklanamayan “psikosomatik” hastalıkları üzerine psikodrama tezi yazmış ve bu alanda psikolojik destek vermektedir. Panik atak, bedensel ağrılar, egzama, baş dönmesi vb. gibi durumların altında yatan travmalar ve psikolojik nedenler üzerine çalışmalarını yürütmektedir.',
    'Gebelerle “anne-bebek / baba-bebek bağlanması”, doğuma hazırlık eğitimleri, gebelik sürecinde psikolojik destek üzerine çalışmaktadır.',
  ];

  return (
    <>
      <PageHero
        breadcrumb={[{ href: '/', label: 'Freya Psikoloji' }, { label: 'Kurumsal' }, { label: 'Ekibimiz' }]}
        title="Ekibimiz"
        lead="Deneyimli, bilimsel ve şefkatli yaklaşımımızla her yaştan danışanın yanındayız."
      />

      <section className="section section--surface">
        <div className="container team-detail">
          <div className="team-detail__grid">
            <div className="team-detail__photo reveal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/gulcin-portrait.avif" alt="Uzm. Klinik Psikolog R. Gülçin SANLI" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div className="reveal" data-delay={1}>
              <h2 style={{ fontSize: 34, marginBottom: 4 }}>R. Gülçin SANLI</h2>
              <span className="team__role">Uzm. Klinik Psikolog · Kurucu</span>
              <div className="team__badges">
                <span>Psikodramatist</span>
                <span>Doğum Psikoloğu</span>
                <span>Doula</span>
              </div>
              <div className="prose" style={{ fontSize: 16, lineHeight: 1.9 }}>
                {detail.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container team-detail">
          <div className="section-head reveal">
            <span className="eyebrow">Eğitim &amp; Unvanlar</span>
            <h2>Mesleki Yolculuk</h2>
          </div>
          <ul className="cred-list">
            {CREDENTIALS.map((c, i) => {
              const Icon = CRED_ICONS[c.icon as keyof typeof CRED_ICONS];
              return (
                <li key={i} className="reveal" data-delay={i as 0 | 1 | 2 | 3}>
                  <Icon />
                  <div>
                    <strong style={{ display: 'block', fontSize: 16.5, marginBottom: 3 }}>{c.title}</strong>
                    <span className="text-muted">{c.text}</span>
                  </div>
                </li>
              );
            })}
          </ul>
          <div style={{ marginTop: 34 }} className="reveal">
            <p className="text-muted" style={{ marginBottom: 16 }}>
              E-posta: <a href={`mailto:${SITE.founderEmail}`} style={{ fontWeight: 700, color: 'var(--c-primary)' }}>{SITE.founderEmail}</a>
              {' · '}Telefon: <a href={`tel:${SITE.phoneHref}`} style={{ fontWeight: 700, color: 'var(--c-primary)' }}>{SITE.phone}</a>
            </p>
            <Link href="/iletisim" className="btn btn--primary">
              Randevu Alın <IconArrow />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
