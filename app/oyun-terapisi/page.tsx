import type { Metadata } from 'next';
import { PageHero, CtaBand } from '@/components/Common';
import { ArtIllustration } from '@/components/Art';

export const metadata: Metadata = {
  title: 'Oyun Terapisi',
  description:
    'Oyun terapisi — 12 yaşına kadar çocuklarla çalışmada kullanılan, çocuğun duygularını oyun yoluyla güvenle ifade etmesini sağlayan etkili yöntem.',
};

const BENEFITS = [
  'Seanslar içerisinde yapmış olduğu davranışlara karşı farkındalık kazanan çocuk, gerçek hayattaki sorumluluklarının farkında olur.',
  'Çocuğun yaşamış olduğu problemler ile baş etme yöntemleri genişler.',
  'Çocuk duygularını ve düşüncelerini daha iyi anlamlandırır ve ifade eder.',
  'Çocuğun empati duygusu gelişir; diğerlerine saygı duymayı öğrenir.',
  'Çocuğun kendine olan saygısı ve güveni gelişir; böylelikle yeteneklerini keşfetmesine ve geliştirmesine imkân sağlar.',
];

const IDEAL_FOR = [
  'Öfke kontrolü', 'Kayıp ve yas süreçleri', 'Anne-baba ayrılığı', 'Travmatik yaşam olayları',
  'Davranış bozuklukları', 'Anksiyete', 'Depresyon', 'Dikkat eksikliği ve hiperaktivite bozukluğu',
  'Otizm', 'Öğrenme güçlüğü',
];

export default function OyunTerapisiPage() {
  return (
    <>
      <PageHero
        breadcrumb={[
          { href: '/', label: 'Freya Psikoloji' },
          { label: 'Yöntemlerimiz' },
          { label: 'Oyun Terapisi' },
        ]}
        title="Oyun Terapisi"
        lead="Oyun, çocuğun işidir — duygularının dünyaya açılan en zengin kapısı."
      />

      <section className="section section--surface">
        <div className="container split">
          <div className="prose reveal">
            <p>
              Oyun ve oyuncak çocuğun hayatının büyük bir kısmını kaplar, hatta oyun çocuğun işidir
              diyebiliriz. Bir çocuk için bu denli önemli olan bir alanın unutulması veya
              önemsenmemesi çocuğun hayatı için büyük bir eksiklik oluşturmaktadır.
            </p>
            <p>
              Oyun sadece çocuğun vakit geçirdiği bir aktivite değildir. Oyun, çocuğun zihinsel
              gelişiminin bir aynasıdır ve gerek bedensel gerek zihinsel gerekse ruhsal gelişiminin
              temel besin kaynağıdır. Ayrıca çocuklar yetişkinler gibi kendilerini ifade etmekte
              yeteri kadar gelişemedikleri için oyun, onların duygularının, düşüncelerinin ve
              yaşadıkları olayların bizlere aktarılmasını sağlayan zengin bir kaynaktır.
            </p>
            <p>
              Oyun terapisinde çocuk; kendini ifade etmeyi, problem çözmeyi ve olumsuz
              davranışlarını değiştirmeyi oyun ve oyuncak sayesinde öğrenir. Bu teknik sayesinde
              konsantre süreleri yetişkinlerden daha düşük olan çocukların eğlenceli ve sıkılmadan
              verimli bir seans geçirmeleri de sağlanmış olur.
            </p>
            <p>
              Oyun terapisinde çocuk ve terapist arasındaki iletişimin daha kolay ve kısa sürede
              kurulmasının yanı sıra genel olarak etkinliğin çocukta olması, çocuğun kendini
              gerçekleştirebilmesi ve geliştirmesi için büyük olanak sağlandığı söylenebilir.
            </p>
            <h2>Seanslarda Neler Kullanıyoruz?</h2>
            <p>
              Seanslar içerisinde çeşitli konu başlıkları için oyun hamurları, müzik aletleri,
              kuklalar, hayvan ailesi, doktor malzemeleri ve buna benzer faydalı oyuncak ve
              materyaller kullanılmaktadır.
            </p>
            <h3>Oyun Terapisinin Faydaları</h3>
            <ul>
              {BENEFITS.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>

          <div className="reveal sticky-side" data-delay={1}>
            <div style={{ borderRadius: 'var(--radius-l)', overflow: 'hidden', boxShadow: 'var(--shadow-m)' }}>
              <ArtIllustration theme="sand" variant={4} />
            </div>
            <div className="service-card" style={{ marginTop: 26 }}>
              <h3 style={{ fontSize: 20, marginBottom: 14 }}>Çalışılan Alanlar</h3>
              <div className="service-card__tags" style={{ marginBottom: 0 }}>
                {IDEAL_FOR.map((t) => <span key={t}>{t}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--mist">
        <div className="container team-detail center reveal">
          <span className="eyebrow eyebrow--center">Unutmayın</span>
          <h2 style={{ maxWidth: 760, margin: '0 auto 20px' }}>
            Belirtiler çocuğun dilidir — onları ellerinden almayalım, üzerine düşünelim
          </h2>
          <p className="lead" style={{ maxWidth: 680, margin: '0 auto' }}>
            Tırnak yeme, alt ıslatma, sürekli hastalanma gibi belirtiler; çocuğun bize bir şeyler
            anlatma çabasıdır. Oyun terapisi bu dile kulak verir.
          </p>
        </div>
      </section>

      <CtaBand
        title="Çocuğunuzun Dünyasını Birlikte Dinleyelim"
        text="Oyun terapisi seanslarıyla çocuğunuzun duygularını güvenle ifade etmesine alan açın."
      />
    </>
  );
}
