import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero, CtaBand } from '@/components/Common';
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
        <div className="container about-teaser__single">
          <div className="reveal">
            <span className="eyebrow">Kurumsal</span>
            <h2>Freya Psikoloji Kimdir?</h2>
            <p className="lead">
              Bedeni, duyguları ve yaşam öyküsünü birlikte anlamak
            </p>
            <div className="bio-text">
              <p className="text-muted">
                Freya Psikoloji olarak yetişkin, çocuk ve ergenlere yönelik psikolojik değerlendirme ve psikoterapi hizmetleri sunuyoruz. Her bireyin ihtiyaçlarını, yaşam deneyimlerini ve içinde bulunduğu koşulları dikkate alıyor; çalışmalarımızı bilimsel bilgi, mesleki etik ve şefkatli bir yaklaşım temelinde yürütüyoruz.
              </p>
              <p className="text-muted">
                Yetişkinlerle bireysel psikoterapide kaygı, depresyon, travmatik deneyimler, ilişki güçlükleri, yas, özdeğer ve yaşam değişimleri gibi pek çok konuda çalışıyoruz. Terapiyi kişinin kendini, duygularını ve ilişkilerinde tekrar eden örüntüleri anlamasına; yaşadığı güçlüklerle baş etmenin yeni yollarını geliştirmesine alan açan bir süreç olarak görüyoruz.
              </p>
              <p className="text-muted">
                Beslenme psikolojisi çalışmalarımızda yemekle kurulan ilişkiyi, duygusal yemeyi, yeme davranışındaki güçlükleri ve beden algısını ele alıyoruz. Kişinin beslenme deneyimini duyguları, ihtiyaçları, geçmiş yaşantıları ve bedeniyle kurduğu ilişki içinde anlamaya odaklanıyoruz.
              </p>
              <p className="text-muted">
                Beden odaklı çalışmalarımızda beden terapisi ve somatik psikoterapi yaklaşımlarından yararlanarak bedensel duyumlara, duyguların bedendeki karşılıklarına ve stres karşısında oluşan tepkilere alan açıyoruz. Bireysel ve grup terapilerinde, kişinin ihtiyaçlarına uygun olarak psikodrama ve deneyimsel yöntemlerle de çalışıyoruz.
              </p>
              <p className="text-muted">
                Çocuk ve ergenlerle yürüttüğümüz çalışmalarda gelişimsel, duygusal ve ilişkisel ihtiyaçları ele alıyor; gerektiğinde ebeveynlerle iş birliği yapıyoruz. Gelişim ve zekâ testleriyle değerlendirme süreçlerini destekliyor, elde edilen bulgular doğrultusunda ailelere geri bildirim ve rehberlik sunuyoruz.
              </p>
              <p className="text-muted">
                Gebelik, doğum ve doğum sonrası dönemde ise anne ve ebeveyn ruh sağlığına yönelik psikolojik destek sağlıyoruz. Görüşmelerimizi Göktürk ofisimizde yüz yüze ve hizmetin niteliğine uygun olarak çevrim içi gerçekleştiriyoruz.
              </p>
            </div>
            <h3 style={{ fontSize: 22, margin: '30px 0 4px' }}>Çalışma alanlarımız</h3>
            <ul className="check-list" style={{ marginTop: 18 }}>
              <li><IconCheck /> Yetişkinlerle bireysel psikoterapi</li>
              <li><IconCheck /> Çocuk ve ergen psikoterapisi</li>
              <li><IconCheck /> Gelişim ve zekâ testleri</li>
              <li><IconCheck /> Beslenme psikolojisi ve beden algısı</li>
              <li><IconCheck /> Beden terapisi ve somatik psikoterapi</li>
              <li><IconCheck /> Psikodrama ve grup terapisi</li>
              <li><IconCheck /> Gebelik, doğum ve doğum sonrası psikolojik destek</li>
            </ul>
            <p className="text-muted" style={{ marginBottom: 26 }}>
              Bebek psikoterapisi çalışmalarımızda bebeğin duygusal ve bedensel ihtiyaçlarını, ebeveynleriyle kurduğu bağ ve ilişki içinde ele alıyoruz. Bağlanma süreçleri ve erken dönemde yaşanan ilişkisel güçlükler üzerine ebeveynlerle birlikte çalışıyor; bebeğin gelişim dönemine ve ihtiyaçlarına uygun beden odaklı terapi yaklaşımlarından yararlanıyoruz.
            </p>
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
