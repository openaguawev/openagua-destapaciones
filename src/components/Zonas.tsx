import Link from 'next/link';
import { barrios } from '@/data/barrios';
import './Zonas.css';

export default function Zonas() {
  const zonasDefinitions = [
    { title: "CABA", slug: "caba" },
    { title: "Zona Norte", slug: "zona-norte" },
    { title: "Zona Oeste", slug: "zona-oeste" },
    { title: "Zona Sur", slug: "zona-sur" }
  ];

  const zonas = zonasDefinitions.map(zd => {
    const zoneBarrios = barrios.filter(b => b.zoneSlug === zd.slug);
    const first8 = zoneBarrios.slice(0, 8).map(b => b.name).join(', ');
    const extraCount = zoneBarrios.length - 8;
    const finalString = extraCount > 0 ? `${first8}... y ${extraCount} barrios más.` : first8;
    
    return {
      title: zd.title,
      link: `/zonas/${zd.slug}`,
      barrios: finalString
    };
  });

  return (
    <section id="zonas" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Destapaciones en CABA y Gran Buenos Aires</h2>
        <div className="zonas-grid">
          {zonas.map((zona, idx) => (
            <Link href={zona.link} key={idx} className="zona-card">
              <div className="zona-icon">📍</div>
              <div className="zona-title" style={{ fontWeight: 'bold' }}>{zona.title}</div>
              <p className="zona-barrios">{zona.barrios}</p>
              <span className="zona-link-text">Ver cobertura →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
