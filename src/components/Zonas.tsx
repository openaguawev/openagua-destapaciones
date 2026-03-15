import Link from 'next/link';
import './Zonas.css';

export default function Zonas() {
  const zonas = [
    {
      title: "CABA",
      link: "/zonas/caba",
      barrios: "Palermo, Caballito, Belgrano, Recoleta, Villa Urquiza, Flores, Villa Devoto, Liniers, Almagro, Boedo, Chacarita, Colegiales, Floresta, La Boca, Mataderos, Núñez, Saavedra, San Telmo, Villa Crespo, Villa del Parque, Villa Luro, Villa Pueyrredón, Villa Santa Rita"
    },
    {
      title: "Zona Norte",
      link: "/zonas/zona-norte",
      barrios: "San Isidro, Martínez, Olivos, Vicente López, San Fernando, Tigre, Florida, Munro, Villa Adelina, Boulogne, Beccar, La Lucila, Acassuso"
    },
    {
      title: "Zona Oeste",
      link: "/zonas/zona-oeste",
      barrios: "Ramos Mejía, Haedo, Castelar, Morón, Ciudadela, San Martín, Hurlingham, Ituzaingó, Tres de Febrero, Caseros, El Palomar, Villa Tesei, Tapiales, Isidro Casanova, Rafael Castillo"
    },
    {
      title: "Zona Sur",
      link: "/zonas/zona-sur",
      barrios: "Avellaneda, Lanús, Lomas de Zamora, Banfield, Temperley, San Justo, La Matanza"
    }
  ];

  return (
    <section id="zonas" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Destapaciones en CABA y Gran Buenos Aires</h2>
        <div className="zonas-grid">
          {zonas.map((zona, idx) => (
            <Link href={zona.link} key={idx} className="zona-card">
              <div className="zona-icon">📍</div>
              <h3 className="zona-title">{zona.title}</h3>
              <p className="zona-barrios">{zona.barrios}</p>
              <span className="zona-link-text">Ver cobertura →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
