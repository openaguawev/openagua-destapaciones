'use client';
import { useState } from 'react';
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

  return (
    <div className="faq-list">
      {faqs.map((f, i) => {
        const isOpen = openIdx === i;
        return (
          <div key={i} className="faq-item">
            <button
              className="faq-summary"
              onClick={() => setOpenIdx(isOpen ? null : i)}
              aria-expanded={isOpen}
              style={{
                width: '100%',
                background: 'none',
                border: 'none',
                textAlign: 'left',
                padding: 0,
                fontFamily: 'inherit',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              {f.q}
              <span style={{
                display: 'inline-block',
                transition: 'transform 0.2s',
                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                color: '#16a34a',
                fontSize: '0.85rem',
                marginLeft: '12px',
                flexShrink: 0,
              }}>▼</span>
            </button>
            <div
              style={{
                maxHeight: isOpen ? '2000px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.3s ease',
              }}
            >
              <div className="faq-answer" style={{ paddingTop: '1rem' }}>
                <p>{renderTextWithLinks(f.a, slug)}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
