import type { Metadata } from 'next';
import { PageHero } from '@/components/Common';
import ContactForm from '@/components/ContactForm';
import { SITE } from '@/lib/site';
import {
  IconInstagram, IconMail,
  IconPhone, IconPin, IconWhatsApp,
} from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Bize Ulaşın',
  description: 'Freya Psikoloji iletişim — Göktürk Merkez Mahallesi, Eyüpsultan / İstanbul. Randevu ve bilgi için arayın.',
};

export default function IletisimPage() {
  const mapsSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    'Göktürk Merkez Mahallesi Göktürk Caddesi No.5 Eyüpsultan İstanbul',
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <>
      <PageHero
        breadcrumb={[{ href: '/', label: 'Freya Psikoloji' }, { label: 'Bize Ulaşın' }]}
        title="Freya Psikoloji Nerede?"
        lead="Size en uygun kanaldan bize ulaşın — telefon, e-posta, WhatsApp ya da formumuz aracılığıyla."
      />

      <section className="section section--surface">
        <div className="container">
          <div className="contact__grid">
            <div className="contact-card reveal">
              <h3>İletişim Bilgileri</h3>

              <div className="contact-row">
                <div className="contact-row__icon"><IconPin /></div>
                <div>
                  <strong>Adres</strong>
                  <p>{SITE.address}</p>
                </div>
              </div>

              <div className="contact-row">
                <div className="contact-row__icon"><IconPhone /></div>
                <div>
                  <strong>Telefon</strong>
                  <a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a>
                </div>
              </div>

              <div className="contact-row">
                <div className="contact-row__icon"><IconMail /></div>
                <div>
                  <strong>E-posta</strong>
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </div>
              </div>

              <div className="contact-row">
                <div className="contact-row__icon"><IconWhatsApp /></div>
                <div>
                  <strong>WhatsApp</strong>
                  <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
                    Hemen mesaj gönderin
                  </a>
                </div>
              </div>

              <div className="contact-socials">
                {SITE.instagrams.map((ig) => (
                  <a key={ig.handle} href={ig.url} target="_blank" rel="noopener noreferrer" aria-label={`Instagram: ${ig.label}`} title={ig.label}>
                    <IconInstagram />
                  </a>
                ))}
              </div>
            </div>

            <div className="reveal" data-delay={1}>
              <ContactForm />
            </div>
          </div>

          <div className="map-wrap reveal">
            <iframe
              src={mapsSrc}
              title="Freya Psikoloji konumu — Göktürk Merkez Mahallesi, Eyüpsultan, İstanbul"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
