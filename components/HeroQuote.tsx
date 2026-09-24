'use client';

import { useEffect, useState } from 'react';

export interface QuoteItem {
  text: string;
  source: string;
}

export default function HeroQuotes({ quotes }: { quotes: QuoteItem[] }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (quotes.length <= 1) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % quotes.length), 5200);
    return () => clearInterval(t);
  }, [quotes.length]);

  return (
    <div className="hero__quotes">
      {quotes.map((q, i) => (
        <blockquote key={i} className={`hero__quote${i === idx ? ' is-active' : ''}`}>
          “{q.text}”
          <cite>{q.source}</cite>
        </blockquote>
      ))}
    </div>
  );
}
