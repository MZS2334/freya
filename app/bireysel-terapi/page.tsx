import type { Metadata } from 'next';
import { PageHero, CtaBand } from '@/components/Common';
import { ArtIllustration } from '@/components/Art';
import { IconCheck } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Bireysel Terapi',
  description:
    'Freya Psikoloji’de bireysel terapi — duygularınızı, ilişkilerinizi ve yaşamınızda tekrar eden güçlükleri güvenli bir ortamda anlamlandırın.',
};

export default function BireyselTerapiPage() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { href: '/', label: 'Freya Psikoloji' },
          { label: 'Yöntemlerimiz' },
          { label: 'Bireysel Terapi' },
        ]}
        title="Bireysel Terapi"
        lead="Duygularınızı, ilişkilerinizi ve yaşamınızda tekrar eden güçlükleri güvenli bir ortamda anlamlandırın."
      />

      <section className="section section--surface">
        <div className="container split">
          <div className="prose reveal">
            <p className="lead" style={{ fontFamily: 'var(--f-serif)', fontSize: 22, color: 'var(--c-ink)' }}>
              Bireysel terapi, duygularınızı, ilişkilerinizi ve yaşamınızda tekrar eden güçlükleri güvenli bir ortamda anlamlandırmanıza alan açar.
            </p>
            <p>
              Terapiye başvurmak için büyük bir kriz yaşamanız gerekmez; kendinizi daha iyi tanımak, zorlandığınız bir dönemde destek almak ya da değişmesini istediğiniz bir konuya yakından bakmak istemeniz yeterlidir.
            </p>
            <p>
              Görüşmelerimiz online veya yüz yüze yapılır ve ortalama 45 dakika sürer. Süreç, ihtiyaçlarınız ve kendi hızınız doğrultusunda şekillenir.
            </p>
          </div>

          <div className="reveal sticky-side" data-delay={1}>
            <div style={{ borderRadius: 'var(--radius-l)', overflow: 'hidden', boxShadow: 'var(--shadow-m)' }}>
              <ArtIllustration theme="teal" variant={0} />
            </div>
            <div className="service-card" style={{ marginTop: 26 }}>
              <h3 style={{ fontSize: 20, marginBottom: 12 }}>Bu Yöntem Kimler İçin?</h3>
              <ul className="check-list" style={{ gridTemplateColumns: '1fr', margin: 0 }}>
                <li><IconCheck /> Kendini daha iyi tanımak isteyenler</li>
                <li><IconCheck /> Zorlandığı bir dönemde destek arayanlar</li>
                <li><IconCheck /> Değişmesini istediği bir konuya odaklanmak isteyenler</li>
                <li><IconCheck /> Online veya yüz yüze terapi tercih edenler</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Bireysel Terapiye Başlamak İçin İlk Adımı Atın"
        text="Güvenli bir alanda, kendi hızınızda ilerlemek mümkün. Ön görüşme için bize ulaşın."
      />
    </>
  );
}
