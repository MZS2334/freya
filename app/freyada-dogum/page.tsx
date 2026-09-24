import type { Metadata } from 'next';
import { PageHero, CtaBand } from '@/components/Common';
import { ArticleCard } from '@/components/ArticleCard';
import { ArtIllustration } from '@/components/Art';
import { byCategory } from '@/lib/articles';
import { VIDEOS } from '@/lib/site';
import { IconVideo } from '@/components/Icons';

export const metadata: Metadata = {
  title: "Freya'da Doğum",
  description:
    "Freya'da Doğum — gebelik süreci, doğum anı ve lohusalık döneminde psikolojik destek; doğuma hazırlık ve bağlanma üzerine makaleler ve videolar.",
};

export default function FreyadaDogumPage() {
  const articles = byCategory('freyada-dogum');

  return (
    <>
      <PageHero
        breadcrumb={[{ href: '/', label: 'Freya Psikoloji' }, { label: "Freya'da Doğum" }]}
        title="Freya'da Doğum"
        lead="Hayat ile olan bağımız anne rahmindeyken başlar. Bu yolculuğu güvenle karşılayın."
      />

      {/* Slogan bandı */}
      <section className="section--tight birth-sec">
        <div className="container split" style={{ gridTemplateColumns: '1.1fr 0.9fr', alignItems: 'center', gap: 60 }}>
          <div className="prose reveal">
            <p className="lead" style={{ fontFamily: 'var(--f-serif)', fontSize: 23, color: 'var(--c-ink)' }}>
              “Doğum bir yolculuktur. Bebeğin evine yolculuğu, bebeğin ailesine yolculuk. Doğum bir
              şölendir, doğum yeryüzündeki en mucizevi olaydır.”
            </p>
            <p className="text-muted">
              Gebelerle “anne-bebek / baba-bebek bağlanması”, doğuma hazırlık eğitimleri ve gebelik
              sürecinde psikolojik destek üzerine çalışıyoruz. Doğum psikoloğu ve doula eşliğinde;
              bedeninize yaptığınız her sağlıklı yatırımın bebeğiniz için şifa olduğunu bilerek
              ilerliyoruz.
            </p>
          </div>
          <div className="reveal" data-delay={1} style={{ borderRadius: 'var(--radius-l)', overflow: 'hidden', boxShadow: 'var(--shadow-m)' }}>
            <ArtIllustration theme="rose" variant={1} />
          </div>
        </div>
      </section>

      {/* Makaleler */}
      <section className="section section--surface">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Freya’da Doğum</span>
            <h2>Makaleler</h2>
          </div>
          <div className="articles__grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {articles.map((a, i) => (
              <ArticleCard key={a.slug} a={a} delay={(i % 2) as 0 | 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Videolar */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Freya’da Doğum</span>
            <h2>Videolar</h2>
            <p>Doğum korkusu ve doğum fizyolojisi üzerine video kayıtlarımız.</p>
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

      <CtaBand
        title="Doğum Yolculuğunuzda Yanınızdayız"
        text="Gebelikten lohusalığa uzanan bu özel dönemde psikolojik destek için bize ulaşın."
      />
    </>
  );
}
