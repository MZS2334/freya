import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero, CtaBand } from '@/components/Common';
import { ArtIllustration } from '@/components/Art';
import { byCategory, articleUrl } from '@/lib/articles';
import { VIDEOS } from '@/lib/site';
import { IconArrow, IconCheck, IconVideo } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Gebelikte Psikolojik Destek',
  description:
    'Gebelik sürecinde ve doğum anında psikolojik destek — anne-bebek bağlanması, doğum sonrası depresyonu önleme ve doğuma hazırlık. Doğum psikoloğu eşliğinde.',
};

export default function GebelikteDestekPage() {
  const birthArticles = byCategory('freyada-dogum');

  return (
    <>
      <PageHero
        breadcrumb={[
          { href: '/', label: 'Freya Psikoloji' },
          { label: 'Yöntemlerimiz' },
          { label: 'Gebelikte Psikolojik Destek' },
        ]}
        title="Gebelikte Psikolojik Destek"
        lead="Gebelik sürecinde ve doğum anında psikolojik destek, ülkemiz için yeni ama hayati bir kavramdır."
      />

      <section className="section section--surface">
        <div className="container split">
          <div className="prose reveal">
            <p>
              Son dönemdeki çalışmalar, gebelik döneminde ve doğum zamanında psikolojik destek
              almanın <strong>doğum sonrası depresyon oranlarını ciddi şekilde azalttığını</strong> ve
              <strong> anne-bebek bağlanmasını kolaylaştırdığını</strong> göstermektedir.
            </p>
            <p>
              Dünyaya bir çocuk getirmek, kişinin kendi travmalarının, çocukluk yaşantılarının
              tekrardan gün yüzüne çıkmasına neden olur. Bu yaşantılar genelde “bilinç seviyesinde”
              gün yüzüne çıkmamaktadır. “Bilinçdışı” unsur dediğimiz dolaylı süreçlerle hayatımızı
              etkiler. Bazen bedensel olarak rahatsızlık yaratır, bazen rüyalar ile karşımıza
              çıkar, bazen ani duygu değişimleri gibi pek çok açıdan hayatımızda varlığını sürdürür.
            </p>
            <blockquote>
              Ebeveyn olma yolculuğunda bize ait olmayan pek çok kıyafet üzerimizde vardır; bizi
              terletir, ağırlık yapar, yorar.
            </blockquote>
            <h2>Bu Süreçte Neler Sunuyoruz?</h2>
            <p>
              Bu süreçteki psikolojik destek; bize ait olmayan kıyafetlerin çıkartılması,
              travmaların çalışılması ve bebekle sağlıklı bağ kurmayı içerir:
            </p>
            <ul>
              <li>Gebeliğe psikolojik hazırlık — bebeği arzulamak, onu zihinde tasarlamak</li>
              <li>Anne-bebek / baba-bebek bağlanması çalışmaları</li>
              <li>Doğuma hazırlık eğitimleri (Keşkesiz Doğum yaklaşımı)</li>
              <li>Doğum anında psikolojik eşlik — doğum psikoloğu ve doula desteği</li>
              <li>Lohusalık döneminde duygusal destek</li>
            </ul>
          </div>

          <div className="reveal" data-delay={1}>
            <div style={{ borderRadius: 'var(--radius-l)', overflow: 'hidden', boxShadow: 'var(--shadow-m)', marginBottom: 26 }}>
              <ArtIllustration theme="terra" variant={1} />
            </div>
            <div className="service-card">
              <h3 style={{ fontSize: 20, marginBottom: 12 }}>Neden Önemli?</h3>
              <ul className="check-list" style={{ gridTemplateColumns: '1fr', margin: 0 }}>
                <li><IconCheck /> Doğum sonrası depresyon riskini azaltır</li>
                <li><IconCheck /> Anne-bebek bağlanmasını güçlendirir</li>
                <li><IconCheck /> Travmaların bebeğe aktarımını kırar</li>
                <li><IconCheck /> Güvenli bağlanmanın temellerini atar</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Videolar */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Freya’da Doğum</span>
            <h2>Konuyla İlgili Videolarımız</h2>
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
        </div>
      </section>

      {/* İlgili makaleler */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Okumaya Devam Edin</span>
            <h2>Gebelik ve Doğum Makaleleri</h2>
          </div>
          <div className="related__grid services__grid--2">
            {birthArticles.slice(0, 4).map((a) => (
              <Link key={a.slug} href={articleUrl(a.slug)} className="service-card" style={{ padding: 30 }}>
                <span className="article-tag" style={{ marginBottom: 14 }}>Freya’da Doğum</span>
                <h3 style={{ fontSize: 20, marginBottom: 10 }}>{a.title}</h3>
                <p style={{ marginBottom: 12 }}>{a.excerpt}</p>
                <span className="service-card__link">Makaleyi oku <IconArrow /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Gebeliğinizi ve Doğumunuzu Güvenle Karşılayın"
        text="Doğum psikoloğu ve doula eşliğinde, bilinçli ve şefkatli bir yolculuk sizi bekliyor."
      />
    </>
  );
}
