import Link from 'next/link';
import type { Metadata } from 'next';
import HeroQuotes from '@/components/HeroQuote';
import { ArticleCard } from '@/components/ArticleCard';
import Faq from '@/components/Faq';
import { CtaBand } from '@/components/Common';
import { ArtIllustration } from '@/components/Art';
import { ARTICLES, byCategory } from '@/lib/articles';
import { SITE, FIELDS, VIDEOS } from '@/lib/site';
import {
  IconArrow, IconBaby, IconCalendar, IconCheck,
  IconLotus, IconPhone, IconPuzzle, IconSmile,
  IconUsers, IconVideo, IconShield,
} from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Ana Sayfa',
  description:
    'Freya Psikoloji — çocuk, ergen ve yetişkinler için psikoterapi; oyun terapisi, grup terapisi, gebelikte psikolojik destek ve doğum psikolojisi. Göktürk / İstanbul.',
};

const QUOTES = [
  { text: 'Terapi gül bahçesi değildir, yeni bir kimlik inşasıdır.', source: 'Freya Psikoloji' },
  { text: 'Öfke duyduğumuz bir kimseyi asla terk edemeyiz. Öfke de, sevgi gibi bağlayıcı bir ilişkidir.', source: 'Freya Psikoloji' },
  { text: 'Dünyaya gelmiş her bebeğin “güvene” ihtiyacı vardır.', source: "Freya'da Doğum" },
];

const FAQS = [
  {
    q: 'Psikoterapi süreci nasıl işliyor?',
    a: 'İlk görüşmede tanışır, ihtiyacınızı birlikte değerlendiririz. Seans odalarımız ses yalıtımlıdır; konuştuğunuz her şey mahremiyet ilkesiyle korunur. Sürecin ritmini ve sıklığını hedeflerinize göre birlikte planlarız.',
  },
  {
    q: 'Çocuğum için hangi yöntemi kullanıyorsunuz?',
    a: '12 yaşına kadar olan çocuklarla oyun terapisi ile çalışıyoruz. Oyun, çocuğun duygularını, düşüncelerini ve yaşadıkları olayları bize aktardığı zengin bir kaynaktır. Ayrıca zeka ve gelişim testleri uyguluyoruz.',
  },
  {
    q: 'Gebelikte psikolojik destek ne işe yarar?',
    a: 'Gebelik ve doğum anında alınan psikolojik destek, doğum sonrası depresyon oranlarını ciddi şekilde azaltmakta ve anne-bebek bağlanmasını kolaylaştırmaktadır. Doğuma hazırlık eğitimleri ve doğum psikoloğu eşliğinde süreci güvenle yürütürsünüz.',
  },
  {
    q: 'Grup terapisi bireysel terapiden farklı mı?',
    a: 'Grup terapilerinde kendi sürecinizi düşünürken diğer grup üyelerinin süreçlerine de şahitlik edersiniz. Destek, farklı bakış açısı edinme ve duygusal ödüllendirilme gibi grubun iyileştirici etkilerinden pay alırsınız.',
  },
  {
    q: 'Çevrimiçi (online) seans var mı?',
    a: 'Evet, talebe göre hem yüz yüze hem de çevrimiçi seanslar yürütüyoruz. Göktürk’teki merkezimizde yüz yüze görüşebilir ya da güvenli bağlantı üzerinden online seans alabilirsiniz.',
  },
];

export default function HomePage() {
  const latestArticles = ARTICLES.filter((a) => a.category === 'makaleler').slice(0, 6);
  const birthArticles = byCategory('freyada-dogum');
  const featured = ARTICLES.find((a) => a.slug === 'ofke-duydugumuz-bir-kimseyi-asla-terk-edemeyiz')!;

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="container hero__grid">
          <div>
            <span className="hero__badge">
              <i />
              Klinik Psikolog · Doğum Psikoloğu · Psikodramatist
            </span>
            <h1>
              Size ait olmayan <em>kıyafetleri</em> birlikte çıkaralım
            </h1>
            <p className="hero__text">
              Freya Psikoloji; yetişkin, çocuk-ergen terapileri, zeka ve gelişim testleri ve yetişkinlerle
              grup terapileri yürütmektedir. Terapi, bedeninizin ve ruhunuzun şifalandığı bir
              süreçtir.
            </p>
            <div className="hero__actions">
              <Link href="/iletisim" className="btn btn--primary">
                <IconCalendar /> Randevu Alın
              </Link>
              <Link href="/hakkimizda" className="btn btn--ghost">
                Bizi Tanıyın <IconArrow />
              </Link>
            </div>
            <HeroQuotes quotes={QUOTES} />
          </div>

          <div className="hero__visual">
            <div className="hero__art">
              <svg viewBox="0 0 400 430" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Kalp tutan eller — çizim">
                <g stroke="#e8d8c8" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  {/* iki el arasında kalp — orijinal sitenin line-art'ına gönderme */}
                  <path d="M200 240c-22-58-76-94-124-80-44 13-62 60-44 103 19.6 47.2 80 88 168 128" />
                  <path d="M200 240c22-58 76-94 124-80 44 13 62 60 44 103-19.6 47.2-80 88-168 128" />
                  <circle cx="200" cy="118" r="20" stroke="#c9a86a" />
                  <path d="M164 84c-24 6-36 22-30 44 3 11 10 18 20 22" stroke="#c9a86a" />
                  <path d="M236 84c24 6 36 22 30 44-3 11-10 18-20 22" stroke="#c9a86a" />
                  {/* anne & bebek */}
                  <path d="M158 330c-10-24-8-46 6-62" stroke="#f0e8d6" strokeOpacity="0.8" />
                  <path d="M176 344c2-16 12-26 28-28" stroke="#f0e8d6" strokeOpacity="0.8" />
                  <circle cx="222" cy="316" r="13" stroke="#c9a86a" />
                </g>
                <path d="M40 386c70-18 250-18 320 0" stroke="#e8d8c8" strokeOpacity="0.4" fill="none" strokeWidth="2" />
                <text x="200" y="414" textAnchor="middle" fontFamily="Georgia, serif" fontStyle="italic" fontSize="17" fill="#c9a86a">freya’da doğum</text>
              </svg>
            </div>

            <div className="hero__card hero__card--tl">
              <div className="hero__card-icon"><IconShield /></div>
              <div>
                <strong>%100 Mahremiyet</strong>
                <span>Ses yalıtımlı seans odaları</span>
              </div>
            </div>

            <div className="hero__card hero__card--br">
              <div className="hero__card-icon hero__card-icon--accent"><IconLotus /></div>
              <div>
                <strong>Bilimsel Yaklaşım</strong>
                <span>Psikodrama · Oyun · Grup</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ HAKKIMIZDA TEASER ============ */}
      <section className="section section--surface about-teaser">
        <div className="container about-teaser__grid">
          <div className="about-teaser__visual reveal">
            <div className="about-teaser__photo">
              <ArtIllustration theme="sand" variant={1} />
            </div>
            <div className="about-teaser__exp">
              <strong>Freya</strong>
              <span>Göktürk / İstanbul</span>
            </div>
          </div>
          <div className="reveal" data-delay={1}>
            <span className="eyebrow">Hakkımızda</span>
            <h2>Ruhunuzu Duyan, Bilimle Beslenen Bir Yaklaşım</h2>
            <p className="lead">
              Freya Psikoloji; yetişkin, çocuk-ergen terapileri, zeka ve gelişim testleri ve yetişkinlerle
              grup terapileri yürütmektedir. Aynı zamanda özel bir kurumda psikoloji öğrencilerine
              alanla ilgili eğitimler vermekte ve terapist yetiştirmektedir.
            </p>
            <p className="text-muted">
              Çocuklarla 12 yaşına kadar “oyun terapisi” ile çalışmaktadır. Ergenlerle dürtü kontrol
              bozuklukları, aile içi iletişim sorunları, patolojik durumlar üzerine çalışmakta olup
              aynı zamanda yetişkinlerle özel çalışma ve uzmanlık alanı olan yeme bozuklukları,
              duygusal yeme, obezite üzerine grup terapileri ve bireysel terapiler yürütmektedir.
            </p>
            <ul className="check-list">
              <li><IconCheck /> Oyun terapisi ile çocuklara özel yaklaşım</li>
              <li><IconCheck /> Ergenlerde dürtü kontrolü ve iletişim</li>
              <li><IconCheck /> Yeme bozukluğu ve obezitede uzmanlık</li>
              <li><IconCheck /> Gebelik ve doğumda psikolojik destek</li>
            </ul>
            <div className="hero__actions">
              <Link href="/hakkimizda" className="btn btn--primary">
                Daha Fazlası <IconArrow />
              </Link>
              <a href={`tel:${SITE.phoneHref}`} className="btn btn--ghost">
                <IconPhone /> {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ YÖNTEMLER ============ */}
      <section className="section">
        <div className="container">
          <div className="section-head section-head--center reveal">
            <span className="eyebrow eyebrow--center">Yöntemlerimiz</span>
            <h2>Her danışanın hikâyesi biriciktir. İhtiyacınıza göre bilimsel temelli yöntemlerle yanınızdayız.</h2>
          </div>

          <div className="services__grid">
            <article className="service-card reveal">
              <div className="service-card__icon"><IconSmile /></div>
              <h3>Bireysel Terapi</h3>
              <p>
                Duygularınızı, ilişkilerinizi ve yaşamınızda tekrar eden güçlükleri güvenli bir
                ortamda anlamlandırmanıza alan açar. Görüşmelerimiz online veya yüz yüze yapılır
                ve ortalama 45 dakika sürer.
              </p>
              <div className="service-card__tags">
                <span>Yetişkinler</span><span>Online / Yüz yüze</span><span>45 dakika</span>
              </div>
              <Link href="/bireysel-terapi" className="service-card__link">
                İncele <IconArrow />
              </Link>
            </article>

            <article className="service-card reveal" data-delay={1}>
              <div className="service-card__icon"><IconUsers /></div>
              <h3>Grup Terapisi</h3>
              <p>
                Bireysel sürecinizi düşünürken diğer grup üyelerinin süreçlerine de şahitlik eder,
                grubun iyileştirici etkilerinden pay alırsınız. Size ait olmayan kıyafetleri
                çıkarmanızı sağlayan güvenli bir alan.
              </p>
              <div className="service-card__tags">
                <span>Yetişkinler</span><span>Destek</span><span>Farklı bakış açısı</span>
              </div>
              <Link href="/grup-terapisi" className="service-card__link">
                İncele <IconArrow />
              </Link>
            </article>

            <article className="service-card reveal" data-delay={2}>
              <div className="service-card__icon"><IconBaby /></div>
              <h3>Gebelikte Psikolojik Destek</h3>
              <p>
                Gebelik döneminde ve doğum zamanında alınan psikolojik destek; doğum sonrası
                depresyonu ciddi şekilde azaltır, anne-bebek bağlanmasını kolaylaştırır. Doğum
                psikoloğu eşliğinde güvenli bir yolculuk.
              </p>
              <div className="service-card__tags">
                <span>Gebelik</span><span>Doğuma hazırlık</span><span>Bağlanma</span>
              </div>
              <Link href="/gebelikte-psikolojik-destek" className="service-card__link">
                İncele <IconArrow />
              </Link>
            </article>

            <article className="service-card reveal" data-delay={3}>
              <div className="service-card__icon"><IconPuzzle /></div>
              <h3>Oyun Terapisi</h3>
              <p>
                Oyun, çocuğun işidir — duygularının, düşüncelerinin ve yaşadığı olayların bize
                aktarıldığı zengin bir kaynaktır. 12 yaşına kadar çocuklarla oyun terapisiyle
                çalışıyoruz; eğlenceli ve verimli seanslar.
              </p>
              <div className="service-card__tags">
                <span>0–12 yaş</span><span>Öfke kontrolü</span><span>Travma</span>
              </div>
              <Link href="/oyun-terapisi" className="service-card__link">
                İncele <IconArrow />
              </Link>
            </article>
          </div>

          <div className="fields-strip reveal" data-delay={1}>
            <div className="fields-strip__lead">
              <h3>Çalışma Alanlarımız</h3>
              <p>Uzmanlık ve ilgi alanlarımızın tamamı</p>
            </div>
            <div className="fields-strip__list">
              {FIELDS.map((f) => <span key={f}>{f}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* ============ ÖNE ÇIKAN MAKALE ============ */}
      <section className="section section--mist">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Freya Psikoloji &gt; Makaleler</span>
            <h2>Öne Çıkan Yazı</h2>
          </div>
          <div className="featured__card reveal">
            <div className="featured__media">
              <ArtIllustration theme="deep" variant={0} />
            </div>
            <div className="featured__body">
              <span className="article-tag">Öne Çıkan</span>
              <h3>
                <Link href={`/makale/${featured.slug}`}>{featured.title}</Link>
              </h3>
              <p>{featured.excerpt}</p>
              <div className="article-meta">
                <span><IconCalendar /> {featured.date}</span>
              </div>
              <div>
                <Link href={`/makale/${featured.slug}`} className="btn btn--primary">
                  Makaleyi Oku <IconArrow />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ MAKALELER GRİD ============ */}
      <section className="section">
        <div className="container">
          <div className="section-head section-head--center reveal">
            <span className="eyebrow eyebrow--center">Freya</span>
            <h2>Makaleler &amp; Kalemimizden</h2>
            <p>Çocuk psikolojisinden beslenmeye, doğumdan bağlanmaya uzanan içgörü dolu yazılar.</p>
          </div>
          <div className="articles__grid">
            {latestArticles.map((a, i) => (
              <ArticleCard key={a.slug} a={a} delay={(i % 3) as 0 | 1 | 2} />
            ))}
          </div>
          <div className="center" style={{ marginTop: 44 }}>
            <Link href="/makaleler" className="btn btn--ghost">
              Tüm Makaleleri Gör <IconArrow />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ FREYA'DA DOĞUM ============ */}
      <section className="section birth-sec">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Freya’da Doğum</span>
            <h2>Doğum, Yeryüzündeki En Mucizevi Olaydır</h2>
            <p>
              Gebelikten lohusalığa, bağlanmadan bebekle ilk temasa uzanan yolculukta bilimsel ve
              şefkatli destek.
            </p>
          </div>
          <div className="articles__grid services__grid--2" style={{ alignItems: 'stretch' }}>
            {birthArticles.slice(0, 2).map((a, i) => (
              <ArticleCard key={a.slug} a={a} delay={i} />
            ))}
          </div>
          <div className="videos__grid">
            {VIDEOS.map((v) => (
              <div className="video-card reveal" key={v.id}>
                <div className="video-card__frame">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${v.id}`}
                    title={v.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="video-card__body">
                  <IconVideo />
                  <h4>{v.title}</h4>
                </div>
              </div>
            ))}
          </div>
          <div className="center" style={{ marginTop: 44 }}>
            <Link href="/freyada-dogum" className="btn btn--accent">
              Freya’da Doğum’u Keşfedin <IconArrow />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ EKİBİMİZ ============ */}
      <section className="section section--surface">
        <div className="container">
          <div className="section-head section-head--center reveal">
            <span className="eyebrow eyebrow--center">Freya</span>
            <h2>Ekibimiz</h2>
            <p>Uzman rehberliğinde, bilimsel temelli ve şefkatli bir destek.</p>
          </div>
          <div className="team__card reveal">
            <div className="team__photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/gulcin-portrait.avif" alt="Uzm. Klinik Psikolog R. Gülçin SANLI" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div className="team__info">
              <h3>R. Gülçin SANLI</h3>
              <span className="team__role">Uzm. Klinik Psikolog · Kurucu</span>
              <p>
                Klinik Psikolog Gülçin SANLI lisans eğitimini Aydın Üniversitesi Psikoloji
                bölümünden “onur derecesi” ile bitirmiştir. Yüksek lisansını Arel Üniversitesi’nde
                Klinik Psikoloji üzerine tamamlamış; tezinde “Duygusal (Emosyonel) Yeme” üzerine
                çalışmıştır.
              </p>
              <p>
                FREYA Psikoloji’nin ve AYKUŞAĞI Enstitüsü’nün kurucusudur. İstanbul Doğum
                Akademisi’nde Keşkesiz Doğum Eğitimi ile “doğum psikoloğu” ve “doula” unvanını
                almıştır.
              </p>
              <div className="team__badges">
                <span>Psikodramatist</span>
                <span>Doğum Psikoloğu</span>
                <span>Doula</span>
              </div>
              <Link href="/ekibimiz" className="btn btn--primary btn--sm">
                Tanıyın <IconArrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SSS ============ */}
      <section className="section">
        <div className="container">
          <div className="section-head section-head--center reveal">
            <span className="eyebrow eyebrow--center">Merak Edilenler</span>
            <h2>Sıkça Sorulan Sorular</h2>
          </div>
          <Faq items={FAQS} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
