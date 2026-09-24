import type { Metadata } from 'next';
import { PageHero, CtaBand } from '@/components/Common';
import { ArtIllustration } from '@/components/Art';
import { IconCheck } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Grup Terapisi',
  description:
    'Freya Psikoloji’de grup terapisi — size ait olmayan kıyafetleri farklı yaşam tecrübelerinin olduğu güvenli bir alanda çözümleyin.',
};

export default function GrupTerrapisiPage() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { href: '/', label: 'Freya Psikoloji' },
          { label: 'Yöntemlerimiz' },
          { label: 'Grup Terapisi' },
        ]}
        title="Grup Terapisi"
        lead="Farklı yaşam tecrübelerinin bulunduğu güvenli bir alanda, birlikte iyileşmek."
      />

      <section className="section section--surface">
        <div className="container split">
          <div className="prose reveal">
            <p className="lead" style={{ fontFamily: 'var(--f-serif)', fontSize: 22, color: 'var(--c-ink)' }}>
              Annemizin yükleri/kıyafetleri, babamızın yükleri/kıyafetleri, çevredeki diğer
              bireylerin yükleri/kıyafetleri, toplumsal yükler…
            </p>
            <p>
              Bu kadar başkalarından bir şeyler almak, bize ait olmayan şeyleri üzerimize
              yapıştırıyor. Pek çoğumuz bu kıyafetlerin farkında bile değiliz. Farkında olamamak;
              seçimlerimizin nedenini bilmemeye, bizi günlük hayatta zorlayan davranışlarda
              bulunmaya, zorlandığımız duygu durumlarına, ruhsal ve fiziksel rahatsızlıklara sebep
              oluyor. Sadece bir hayatımız varken bize ait olmayan kıyafetleri üzerimize
              geçiriyoruz. Bazen beden sesini duyurmak için belirtiler veriyor.
            </p>
            <blockquote>
              “Terapi” size ait olmayan kıyafetleri çıkarmanızı sağlar.
            </blockquote>
            <h2>Grup Terapilerinin İyileştirici Gücü</h2>
            <p>
              “Grup Terapileri” ise bu süreci farklı yaşam tecrübelerinin de olduğu bir alanda
              çözümlemenizi sağlar. Bireysel sürecinizi düşünürken, diğer grup üyelerinin
              süreçlerine de şahitlik eder; grubun iyileştirici etkilerinden pay alırsınız.
            </p>
            <ul>
              <li>Destek — aynı yolda yürüyenlerle birlikte olmak</li>
              <li>Farklı bakış açısı edinme</li>
              <li>Duygusal ödüllendirilme</li>
              <li>Şahitlik etmenin güçlendirici etkisi</li>
            </ul>
            <p>
              Grup terapisinde kimse yalnız kalmaz. Herkesin hikâyesi birbirine ayna tutar; bazen
              kendi yaramızı, bir başkasının cesaretinin ışığında görürüz.
            </p>
          </div>

          <div className="reveal sticky-side" data-delay={1}>
            <div style={{ borderRadius: 'var(--radius-l)', overflow: 'hidden', boxShadow: 'var(--shadow-m)' }}>
              <ArtIllustration theme="teal" variant={3} />
            </div>
            <div className="service-card" style={{ marginTop: 26 }}>
              <h3 style={{ fontSize: 20, marginBottom: 12 }}>Bu Yöntem Kimler İçin?</h3>
              <ul className="check-list" style={{ gridTemplateColumns: '1fr', margin: 0 }}>
                <li><IconCheck /> Yeme bozukluğu ve obeziteyle mücadele eden yetişkinler</li>
                <li><IconCheck /> Sınır koymakta zorlanan, suçluluk hisseden bireyler</li>
                <li><IconCheck /> İlişkilerinde aynı döngüleri yaşayanlar</li>
                <li><IconCheck /> Kendine benzer süreçlerden geçenlerle güçlenmek isteyenler</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Grup Terapisine Katılmak İçin İlk Adımı Atın"
        text="Güvenli bir alanda, sizinle benzer yollardan geçenlerle birlikte şifalanmak mümkün. Ön görüşme için bize ulaşın."
      />
    </>
  );
}
