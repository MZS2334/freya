import Link from 'next/link';
import { SITE } from '@/lib/site';
import { Brand } from './Logo';
import {
  IconChevron, IconPin, IconPhone, IconMail, IconInstagram,
} from './Icons';

export default function Footer() {
  const year = 2026;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">
          <div className="footer__brand">
            <Brand href="/" />
            <p>{SITE.description}</p>
            <div className="footer__social">
              {SITE.instagrams.map((ig) => (
                <a key={ig.handle} href={ig.url} target="_blank" rel="noopener noreferrer" aria-label={`Instagram: ${ig.label}`} title={ig.label}>
                  <IconInstagram />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4>Keşfet</h4>
            <ul className="footer__links">
              <li><Link href="/"><IconChevron />Ana Sayfa</Link></li>
              <li><Link href="/freyada-dogum"><IconChevron />Freya’da Doğum</Link></li>
              <li><Link href="/hakkimizda"><IconChevron />Hakkımızda</Link></li>
              <li><Link href="/ekibimiz"><IconChevron />Ekibimiz</Link></li>
              <li><Link href="/galeri"><IconChevron />Galeri</Link></li>
              <li><Link href="/iletisim"><IconChevron />Bize Ulaşın</Link></li>
            </ul>
          </div>

          <div>
            <h4>Yöntemlerimiz</h4>
            <ul className="footer__links">
              <li><Link href="/bireysel-terapi"><IconChevron />Bireysel Terapi</Link></li>
              <li><Link href="/grup-terapisi"><IconChevron />Grup Terapisi</Link></li>
              <li><Link href="/gebelikte-psikolojik-destek"><IconChevron />Gebelikte Psikolojik Destek</Link></li>
              <li><Link href="/oyun-terapisi"><IconChevron />Oyun Terapisi</Link></li>
              <li><Link href="/makaleler"><IconChevron />Makaleler</Link></li>
            </ul>
          </div>

          <div>
            <h4>İletişim</h4>
            <ul className="footer__contact">
              <li><IconPin /><span>{SITE.address}</span></li>
              <li><IconPhone /><a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a></li>
              <li><IconMail /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            Copyright © {year}{' '}
            <strong style={{ color: '#fff' }}>Freya Psikoloji</strong>. Tüm hakları saklıdır.
          </span>
        </div>
      </div>
    </footer>
  );
}
