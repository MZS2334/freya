'use client';

import { useState } from 'react';
import { IconChevron } from './Icons';

export interface FaqItem {
  q: string;
  a: string;
}

export default function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="faq">
      {items.map((item, i) => (
        <div key={i} className={`faq__item${open === i ? ' is-open' : ''}`}>
          <button
            className="faq__q"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            {item.q}
            <IconChevron />
          </button>
          <div
            className="faq__a"
            style={{ maxHeight: open === i ? 1000 : 0 }}
          >
            <div className="faq__a-inner">{item.a}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
