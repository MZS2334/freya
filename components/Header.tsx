'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SITE } from '@/lib/site';
import { Brand } from './Logo';
import {
  IconPhone, IconMail, IconChevron, IconCalendar,
  IconHeart, IconUsers, IconBaby, IconPuzzle, IconSmile,
  IconInstagram,
} from './Icons';

const NAV = [
  { href: '/freyada-dogum', label: 'Freya’da Doğum' },
  {
    href: '/hakkimizda',
    label: 'Kurumsal',
    chevron: true,
    children: [
      { href: '/hakkimizda', label: 'Hakkımızda', Icon: IconHeart },
      { href: '/ekibimiz', label: 'Ekibimiz', Icon: IconUsers },
    ],
  },
  {
    href: '/grup-terapisi',
    label: 'Yöntemlerimiz',
    chevron: true,
    children: [
      { href: '/bireysel-terapi', label: 'Bireysel Terapi', Icon: IconSmile },
      { href: '/grup-terapisi', label: 'Grup Terapisi', Icon: IconUsers },
      { href: '/gebelikte-psikolojik-destek', label: 'Gebelikte Psikolojik Destek', Icon: IconBaby },
      { href: '/oyun-terapisi', label: 'Oyun Terapisi', Icon: IconPuzzle },
    ],
  },
  { href: '/makaleler', label: 'Makaleler' },
  { href: '/galeri', label: 'Galeri' },
  { href: '/iletisim', label: 'Bize Ulaşın' },
];

function active(pathname: string, href: string, children?: { href: string }[]) {
  if (pathname === href) return true;
  return children?.some((c) => pathname === c.href) ?? false;
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Rota değişince mobil menüyü kapat — render sırasında state düzeltme patterni
  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <div className="topbar">
        <div className="container">
          <div className="topbar__group">
            <a href={`tel:${SITE.phoneHref}`}><IconPhone /><span>{SITE.phone}</span></a>
            <a href={`mailto:${SITE.email}`}><IconMail /><span>{SITE.email}</span></a>
          </div>
          <div className="topbar__social">
            {SITE.instagrams.map((ig) => (
              <a key={ig.handle} href={ig.url} target="_blank" rel="noopener noreferrer" aria-label={`Instagram: ${ig.label}`} title={ig.label}>
                <IconInstagram />
              </a>
            ))}
          </div>
        </div>
      </div>

      <header className={`header${scrolled ? ' is-scrolled' : ''}`}>
        <div className="container">
          <Brand href="/" />

          <nav className="nav" aria-label="Ana menü">
            {NAV.map((item) => (
              <div className="nav__item" key={item.label}>
                <Link
                  href={item.href}
                  className={`nav__link${active(pathname, item.href, item.children) ? ' is-active' : ''}`}
                >
                  {item.label}
                  {item.chevron && <IconChevron className="chev" />}
                </Link>
                {item.children && (
                  <div className="dropdown">
                    {item.children.map(({ href, label, Icon }) => (
                      <Link href={href} key={href}>
                        <Icon />
                        {label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="header__cta">
            <Link className="btn btn--primary btn--sm" href="/iletisim">
              <IconCalendar />
              <span>Randevu Alın</span>
            </Link>
          </div>

          <button
            className={`nav-toggle${open ? ' is-open' : ''}`}
            aria-label="Menüyü aç/kapat"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div className={`mobile-menu${open ? ' is-open' : ''}`} onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}>
        <div className="mobile-menu__panel">
          <div className="mobile-menu__head">
            <Brand href="/" />
          </div>
          <nav className="mobile-menu__nav">
            <Link href="/">Ana Sayfa</Link>
            <Link href="/freyada-dogum">Freya’da Doğum</Link>
            <Link href="/hakkimizda">Kurumsal — Hakkımızda</Link>
            <div className="mobile-menu__sub"><Link href="/ekibimiz">Ekibimiz</Link></div>
            <Link href="/grup-terapisi">Yöntemlerimiz</Link>
            <div className="mobile-menu__sub">
              <Link href="/bireysel-terapi">Bireysel Terapi</Link>
              <Link href="/grup-terapisi">Grup Terapisi</Link>
              <Link href="/gebelikte-psikolojik-destek">Gebelikte Psikolojik Destek</Link>
              <Link href="/oyun-terapisi">Oyun Terapisi</Link>
            </div>
            <Link href="/makaleler">Makaleler</Link>
            <Link href="/galeri">Galeri</Link>
            <Link href="/iletisim">Bize Ulaşın</Link>
          </nav>
          <div className="mobile-menu__contact">
            <a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <span style={{ fontSize: 13, opacity: 0.8, display: 'block', marginTop: 8 }}>{SITE.address}</span>
          </div>
        </div>
      </div>
    </>
  );
}
