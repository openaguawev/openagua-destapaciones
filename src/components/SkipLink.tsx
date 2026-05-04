'use client';

export default function SkipLink() {
  return (
    <a 
      href="#main-content" 
      style={{
        position: 'absolute',
        top: '-40px',
        left: 0,
        background: '#15803D',
        color: 'white',
        padding: '8px 16px',
        textDecoration: 'none',
        fontWeight: 'bold',
        zIndex: 9999,
        transition: 'top 0.1s'
      }}
      onFocus={(e) => e.currentTarget.style.top = '0'}
      onBlur={(e) => e.currentTarget.style.top = '-40px'}
    >
      Saltar al contenido principal
    </a>
  );
}
