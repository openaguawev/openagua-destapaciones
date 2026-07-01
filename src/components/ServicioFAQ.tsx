'use client';
import { useState, useEffect } from 'react';
import { renderTextWithLinks } from '@/utils/renderTextWithLinks';

interface FAQItem {
  q: string;
  a: string;
}

interface ServicioFAQProps {
  faqs: FAQItem[];
  slug?: string;
}

export default function ServicioFAQ({ faqs, slug = '' }: ServicioFAQProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleOpen = (idx: number) => {
    if (!mounted) return;
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="faq-list">
      {faqs.map((f, i) => (
        <div
          key={i}
          className={`faq-item${openIdx === i ? ' faq-item-open' : ''}`}
        >
          <button
            className="faq-summary"
            onClick={() => toggleOpen(i)}
            aria-expanded={openIdx === i}
            style={{
              width: '100%',
              background: 'none',
              border: 'none',
              textAlign: 'left',
              padding: 0,
              fontFamily: 'inherit',
              cursor: mounted ? 'pointer' : 'default'
            }}
          >
            {f.q}
            <span className="faq-arrow" style={{
              display: 'inline-block',
              transition: 'transform 0.2s',
              transform: openIdx === i ? 'rotate(180deg)' : 'rotate(0deg)'
            }}>▼</span>
          </button>
          {openIdx === i && (
            <div className="faq-answer">
              <p>{renderTextWithLinks(f.a, slug)}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
