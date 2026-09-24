import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero, CtaBand } from '@/components/Common';
import { ArtIllustration } from '@/components/Art';
import { SITE, VALUES } from '@/lib/site';
import { IconArrow, IconCheck } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description:
    'Uzm. Klinik Psikolog R. Gülçin Sanlı ve Freya Psikoloji — kurumsal yaklaşımımız, uzmanlık alanlarımız ve terapi anlayışımız.',
};

export default function HakkimizdaPage() {
  return (
    <>
      <PageHero
        breadcrumb={[{ href: '/', label: 'Freya Psikoloji' }, { label: 'Kurumsal' }, { label: 'Hakkımızda' }]}
        title="Hakkımızda"
        lead="Terapi gül bahçesi değildir; yeni bir kimlik inşasıdır. Biz bu inşada yanınızdayız."
      />

      <section className="section section--surface about-teaser">
        <div className="container about-teaser__grid">
          <div className="about-teaser__visual reveal">
            <div className="about-teaser__photo">
              <ArtIllustration theme="teal" variant={2} />
            </div>
            <div className="about-teaser__exp">
              <strong>2017</strong>
              <span>Psikodrama eğitiminden beri sahadayız</span>
            </div>
          </div>
          <div className="reveal" data-delay={1}>
            <span className="eyebrow">Kurumsal</span>
            <h2>Freya Psikoloji Kimdir?</h2>
            <p className="lead">
              Freya Psikoloji; çocuk-ergen terapileri, zeka ve gelişim testleri ve yetişkinlerle
              grup terapileri yürütmektedir. Aynı zamanda özel bir kurumda psikoloji öğrencilerine
              alanla ilgili eğitimler vermekte ve terapist yetiştirmektedir.
            </p>
            <p className="text-muted" style={{ marginBottom: 18 }}>
              Çocuklarla 12 yaşına kadar “oyun terapisi” ile çalışmaktadır. Ergenlerle dürtü
              kontrol bozuklukları, aile içi iletişim sorunları, patolojik durumlar üzerine
              çalışmakta olup aynı zamanda yetişkinlerle özel çalışma ve uzmanlık alanı olan yeme
              bozuklukları, duygusal yeme, obezite üzerine grup terapileri ve bireysel terapiler
              yürütmektedir.
            </p>
            <ul className="check-list">
              <li><IconCheck /> Zeka ve gelişim testleri</li>
              <li><IconCheck /> Psikoloji öğrencilerine mesleki eğitim</li>
              <li><IconCheck /> Terapist yetiştirme programları</li>
              <li><IconCheck /> Psikosomatik süreçlerde psikolojik destek</li>
            </ul>
            <Link href="/iletisim" className="btn btn--primary">
              Bize Ulaşın <IconArrow />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container team-detail">
          <div className="section-head section-head--center reveal">
            <span className="eyebrow eyebrow--center">Kurucumuz</span>
            <h2>Uzman Klinik Psikolog R. Gülçin SANLI Kimdir?</h2>
          </div>
          <div className="team-detail__grid">
            <div className="team-detail__photo reveal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/gulcin-portrait.avif" alt="Uzm. Klinik Psikolog R. Gülçin SANLI" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div className="reveal" data-delay={1}>
              <h3 style={{ fontSize: 26, marginBottom: 6 }}>R. Gülçin SANLI</h3>
              <span className="team__role">Uzm. Klinik Psikolog · Kurucu</span>
              <div className="bio-text" style={{ marginTop: 18 }}>
                <p className="text-muted">
                  Uzm. Klinik Psikolog Gülçin Sanlı, 2016 yılında Aydın Üniversitesi Psikoloji Bölümü&rsquo;nden mezun olmuş, yüksek lisans eğitimini ise 2019 yılında Arel Üniversitesi Klinik Psikoloji Programı&rsquo;nda tamamlamıştır.
                </p>
                <p className="text-muted">
                  Meslek hayatının ilk yıllarında İnsan Sağlığı ve Eğitim Vakfı bünyesinde faaliyet gösteren Limon Ağacı Çocuk Danışma Merkezi&rsquo;nde yaklaşık dört yıl görev almıştır. Bu süreçte çocuklarla gelişimsel değerlendirme çalışmaları yürütmüş, gelişim taramaları, zeka testleri ve terapötik uygulamalar gerçekleştirmiştir.
                </p>
                <p className="text-muted">
                  2019 yılında kendi mesleki oluşumu olan Aykuşağı Enstitüsü&rsquo;nü kurmuş, bu yapı daha sonra Freya Psikoloji adıyla çalışmalarına devam etmiştir. 2019 yılından bu yana psikologlar, psikolojik danışmanlar, diyetisyenler ve alan öğrencilerine yönelik eğitimler, süpervizyonlar ve mesleki gelişim programları yürütmektedir.
                </p>
                <p className="text-muted">
                  Çalışmalarının önemli bir bölümünü beslenme psikolojisi alanına ayıran Sanlı, bu alanda nörobilim, somatik psikoloji, sinir sistemi regülasyonu, duygu düzenleme ve yeme davranışı arasındaki ilişkiyi incelemektedir. Geliştirdiği eğitimlerde ve mesleki çalışmalarında beslenme davranışını yalnızca biyolojik bir süreç olarak değil; sinir sistemi, duygular, bağlanma ilişkileri ve yaşam deneyimleri ile birlikte ele alan bütüncül bir yaklaşım benimsemektedir.
                </p>
                <p className="text-muted">
                  İstanbul Psikodrama Enstitüsü&rsquo;nden Psikodrama Eğitimi ve Gesellschaft für Neuropsychologie (GNP) klinik nöropsikoloji eğitimleri ile klinik bakışını güçlendirmiştir.
                </p>
                <p className="text-muted">
                  Perinatal ve erken dönem gelişim alanında da uzmanlaşan Sanlı, İstanbul Doğum Akademisi&rsquo;nden Doğuma Hazırlık Eğitmenliği, Doula Eğitimi ve Doğum Psikolojisi eğitimlerini tamamlamıştır. Ayrıca International Society for Pre and Perinatal Psychology and Medicine (ISPPM) kapsamında prenatal ve perinatal psikoloji alanında eğitimler almıştır.
                </p>
                <p className="text-muted">
                  Çalışmalarını yetişkin ruh sağlığı, beslenme psikolojisi, prenatal-perinatal psikoloji, ebeveynlik ve erken çocukluk gelişimi alanlarında sürdürmekte; eğitim, danışmanlık ve bilimsel içerik üretimi yoluyla alana katkı sunmaya devam etmektedir.
                </p>
              </div>
              <Link href="/ekibimiz" className="btn btn--ghost" style={{ marginTop: 10 }}>
                Ekibimiz Sayfası <IconArrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--mist">
        <div className="container">
          <div className="section-head section-head--center reveal">
            <span className="eyebrow eyebrow--center">Değerlerimiz</span>
            <h2>Neye Önem Veriyoruz?</h2>
          </div>
          <div className="services__grid services__grid--4">
            {VALUES.map((v, i) => (
              <article className="service-card reveal" data-delay={(i % 4) as 0 | 1 | 2 | 3} key={v.label}>
                <div className="service-card__icon" style={{ width: 58, height: 58 }}>
                  {v.icon === 'smile' && <span style={{ fontFamily: 'var(--f-serif)', fontSize: 24 }}>☺</span>}
                  {v.icon === 'heart' && <span style={{ fontSize: 24, color: 'var(--c-primary)' }}>♥</span>}
                  {v.icon === 'target' && <span style={{ fontSize: 24, color: 'var(--c-primary)' }}>◎</span>}
                  {v.icon === 'wallet' && <span style={{ fontSize: 24, color: 'var(--c-primary)' }}>✦</span>}
                </div>
                <h3 style={{ fontSize: 20 }}>%{v.value} {v.label}</h3>
                <p>
                  {v.label === 'Mutluluk' && 'Danışanımızın süreçten memnun ve umutlu ayrılması önceliğimizdir.'}
                  {v.label === 'Memnuniyet' && 'Şeffaf iletişim ve güven veren bir terapi ortamı sunarız.'}
                  {v.label === 'Çözüm Odaklılık' && 'Belirti bastırmak yerine kök nedenlere birlikte ineriz.'}
                  {v.label === 'Ekonomik' && 'Nitelikli psikolojik desteği erişilebilir kılmayı hedefleriz.'}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />

      <section className="section--tight">
        <div className="container center">
          <p className="text-muted">
            <IconArrow style={{ width: 14, marginRight: 6, verticalAlign: -2 }} />
            Tüm sorularınız için: <a href={`tel:${SITE.phoneHref}`} style={{ fontWeight: 700, color: 'var(--c-primary)' }}>{SITE.phone}</a>
          </p>
        </div>
      </section>
    </>
  );
}
