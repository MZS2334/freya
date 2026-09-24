'use client';

import { useCallback, useEffect, useState } from 'react';
import { IconClose, IconArrow, IconArrowLeft } from './Icons';

export interface GalleryItem {
  caption: string;
  src: string;
  tall?: boolean;
}

export default function Gallery({ items }: { items: GalleryItem[] }) {
  const [idx, setIdx] = useState<number | null>(null);

  const close = useCallback(() => setIdx(null), []);
  const nav = useCallback(
    (delta: number) => {
      setIdx((cur) => (cur === null ? null : (cur + delta + items.length) % items.length));
    },
    [items.length],
  );

  useEffect(() => {
    if (idx === null) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') nav(-1);
      if (e.key === 'ArrowRight') nav(1);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [idx, close, nav]);

  return (
    <>
      <div className="gallery__grid">
        {items.map((item, i) => (
          <button
            type="button"
            key={i}
            className={`gallery__item${item.tall ? ' gallery__item--tall' : ''}`}
            onClick={() => setIdx(i)}
            aria-label={`Görseli büyüt: ${item.caption}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.src} alt={item.caption} loading="lazy" />
            <span className="gallery__overlay">{item.caption}</span>
          </button>
        ))}
      </div>

      <div
        className={`lightbox${idx !== null ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Görsel önizleme"
        onClick={(e) => { if (e.target === e.currentTarget) close(); }}
      >
        <button className="lightbox__close" onClick={close} aria-label="Kapat"><IconClose /></button>
        <button className="lightbox__nav lightbox__prev" onClick={() => nav(-1)} aria-label="Önceki"><IconArrowLeft /></button>
        <div className="lightbox__inner">
          {idx !== null && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={items[idx].src} alt={items[idx].caption} />
          )}
        </div>
        <button className="lightbox__nav lightbox__next" onClick={() => nav(1)} aria-label="Sonraki"><IconArrow /></button>
        <div className="lightbox__caption">{idx !== null ? items[idx].caption : ''}</div>
      </div>
    </>
  );
}
