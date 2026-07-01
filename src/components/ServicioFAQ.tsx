'use client';
import { useState, useEffect } from 'react';

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
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '850px', margin: '0 auto' }}>
        {faqs.map((f, i) => (
          <div key={i} style={{
            background: '#f8fafc',
            borderRadius: '12px',
            border: '1px solid #e2e8f0',
            padding: '1.25rem 1.5rem',
          }}>
            <div style={{
              fontSize: '1.1rem',
              fontWeight: 700,
              color: '#0f172a',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <span>{f.q}</span>
              <span style={{ color: '#16a34a', flexShrink: 0, marginLeft: '12px' }}>+</span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '850px', margin: '0 auto' }}>
      {faqs.map((f, i) => (
        <div key={i} style={{
          background: '#f8fafc',
          borderRadius: '12px',
          border: openIdx === i ? '1px solid #16a34a' : '1px solid #e2e8f0',
          padding: '1.25rem 1.5rem',
        }}>
          <button
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
            style={{
              width: '100%',
              background: 'none',
              border: 'none',
              padding: 0,
              textAlign: 'left',
              fontFamily: 'inherit',
              fontSize: '1.1rem',
              fontWeight: 700,
              color: openIdx === i ? '#16a34a' : '#0f172a',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <span>{f.q}</span>
            <span style={{
              color: '#16a34a',
              fontSize: '1.4rem',
              flexShrink: 0,
              transform: openIdx === i ? 'rotate(45deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s',
              display: 'inline-block',
            }}>+</span>
          </button>
          {openIdx === i && (
            <div style={{
              marginTop: '1rem',
              color: '#475569',
              lineHeight: 1.7,
              fontSize: '1rem',
            }}>
              <p style={{ margin: 0 }}>{f.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
