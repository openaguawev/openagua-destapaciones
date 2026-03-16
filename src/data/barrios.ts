export interface Barrio {
  slug: string;
  name: string;
  zoneSlug: string;
  zoneName: string;
  nearby: string[];
}

export const barrios: Barrio[] = [
  // CABA
  { slug: 'destapaciones-palermo', name: 'Palermo', zoneSlug: 'caba', zoneName: 'CABA', nearby: ['Belgrano', 'Recoleta', 'Colegiales'] },
  { slug: 'destapaciones-belgrano', name: 'Belgrano', zoneSlug: 'caba', zoneName: 'CABA', nearby: ['Palermo', 'Núñez', 'Colegiales'] },
  { slug: 'destapaciones-caballito', name: 'Caballito', zoneSlug: 'caba', zoneName: 'CABA', nearby: ['Almagro', 'Flores', 'Boedo'] },
  { slug: 'destapaciones-recoleta', name: 'Recoleta', zoneSlug: 'caba', zoneName: 'CABA', nearby: ['Palermo', 'Retiro', 'Balvanera'] },
  { slug: 'destapaciones-villa-urquiza', name: 'Villa Urquiza', zoneSlug: 'caba', zoneName: 'CABA', nearby: ['Belgrano', 'Saavedra', 'Villa Pueyrredón'] },
  { slug: 'destapaciones-flores', name: 'Flores', zoneSlug: 'caba', zoneName: 'CABA', nearby: ['Caballito', 'Floresta', 'Parque Chacabuco'] },
  { slug: 'destapaciones-villa-devoto', name: 'Villa Devoto', zoneSlug: 'caba', zoneName: 'CABA', nearby: ['Villa del Parque', 'Villa Pueyrredón', 'Monte Castro'] },
  { slug: 'destapaciones-liniers', name: 'Liniers', zoneSlug: 'caba', zoneName: 'CABA', nearby: ['Mataderos', 'Villa Luro', 'Versalles'] },
  { slug: 'destapaciones-almagro', name: 'Almagro', zoneSlug: 'caba', zoneName: 'CABA', nearby: ['Caballito', 'Boedo', 'Balvanera'] },
  { slug: 'destapaciones-boedo', name: 'Boedo', zoneSlug: 'caba', zoneName: 'CABA', nearby: ['Almagro', 'Parque Patricios', 'San Cristóbal'] },
  { slug: 'destapaciones-chacarita', name: 'Chacarita', zoneSlug: 'caba', zoneName: 'CABA', nearby: ['Colegiales', 'Villa Crespo', 'Palermo'] },
  { slug: 'destapaciones-colegiales', name: 'Colegiales', zoneSlug: 'caba', zoneName: 'CABA', nearby: ['Belgrano', 'Palermo', 'Chacarita'] },
  { slug: 'destapaciones-floresta', name: 'Floresta', zoneSlug: 'caba', zoneName: 'CABA', nearby: ['Flores', 'Vélez Sársfield', 'Villa Luro'] },
  { slug: 'destapaciones-la-boca', name: 'La Boca', zoneSlug: 'caba', zoneName: 'CABA', nearby: ['San Telmo', 'Barracas', 'Puerto Madero'] },
  { slug: 'destapaciones-mataderos', name: 'Mataderos', zoneSlug: 'caba', zoneName: 'CABA', nearby: ['Liniers', 'Parque Avellaneda', 'Lugano'] },
  { slug: 'destapaciones-nunez', name: 'Núñez', zoneSlug: 'caba', zoneName: 'CABA', nearby: ['Belgrano', 'Saavedra', 'Coghlan'] },
  { slug: 'destapaciones-saavedra', name: 'Saavedra', zoneSlug: 'caba', zoneName: 'CABA', nearby: ['Núñez', 'Villa Urquiza', 'Coghlan'] },
  { slug: 'destapaciones-san-telmo', name: 'San Telmo', zoneSlug: 'caba', zoneName: 'CABA', nearby: ['Monserrat', 'La Boca', 'Constitución'] },
  { slug: 'destapaciones-villa-crespo', name: 'Villa Crespo', zoneSlug: 'caba', zoneName: 'CABA', nearby: ['Palermo', 'Chacarita', 'Caballito'] },
  { slug: 'destapaciones-villa-del-parque', name: 'Villa del Parque', zoneSlug: 'caba', zoneName: 'CABA', nearby: ['Villa Devoto', 'Paternal', 'Santa Rita'] },
  { slug: 'destapaciones-villa-luro', name: 'Villa Luro', zoneSlug: 'caba', zoneName: 'CABA', nearby: ['Liniers', 'Floresta', 'Vélez Sársfield'] },
  { slug: 'destapaciones-villa-pueyrredon', name: 'Villa Pueyrredón', zoneSlug: 'caba', zoneName: 'CABA', nearby: ['Villa Urquiza', 'Villa Devoto', 'Agronomía'] },
  { slug: 'destapaciones-villa-santa-rita', name: 'Villa Santa Rita', zoneSlug: 'caba', zoneName: 'CABA', nearby: ['Villa del Parque', 'Flores', 'Monte Castro'] },

  // ZONA OESTE
  { slug: 'destapaciones-moron', name: 'Morón', zoneSlug: 'zona-oeste', zoneName: 'Zona Oeste', nearby: ['Castelar', 'Haedo', 'Ituzaingó'] },
  { slug: 'destapaciones-ramos-mejia', name: 'Ramos Mejía', zoneSlug: 'zona-oeste', zoneName: 'Zona Oeste', nearby: ['Ciudadela', 'Haedo', 'San Justo'] },
  { slug: 'destapaciones-haedo', name: 'Haedo', zoneSlug: 'zona-oeste', zoneName: 'Zona Oeste', nearby: ['Morón', 'Ramos Mejía', 'El Palomar'] },
  { slug: 'destapaciones-castelar', name: 'Castelar', zoneSlug: 'zona-oeste', zoneName: 'Zona Oeste', nearby: ['Morón', 'Ituzaingó', 'San Antonio de Padua'] },
  { slug: 'destapaciones-ciudadela', name: 'Ciudadela', zoneSlug: 'zona-oeste', zoneName: 'Zona Oeste', nearby: ['Ramos Mejía', 'Liniers', 'Caseros'] },
  { slug: 'destapaciones-san-martin', name: 'San Martín', zoneSlug: 'zona-oeste', zoneName: 'Zona Oeste', nearby: ['Villa Ballester', 'Caseros', 'Tres de Febrero'] },
  { slug: 'destapaciones-hurlingham', name: 'Hurlingham', zoneSlug: 'zona-oeste', zoneName: 'Zona Oeste', nearby: ['Villa Tesei', 'William Morris', 'Morón'] },
  { slug: 'destapaciones-ituzaingo', name: 'Ituzaingó', zoneSlug: 'zona-oeste', zoneName: 'Zona Oeste', nearby: ['Castelar', 'San Antonio de Padua', 'Merlo'] },
  { slug: 'destapaciones-tres-de-febrero', name: 'Tres de Febrero', zoneSlug: 'zona-oeste', zoneName: 'Zona Oeste', nearby: ['Caseros', 'Ciudadela', 'San Martín'] },
  { slug: 'destapaciones-caseros', name: 'Caseros', zoneSlug: 'zona-oeste', zoneName: 'Zona Oeste', nearby: ['Tres de Febrero', 'Ciudadela', 'San Martín'] },
  { slug: 'destapaciones-el-palomar', name: 'El Palomar', zoneSlug: 'zona-oeste', zoneName: 'Zona Oeste', nearby: ['Haedo', 'Caseros', 'Hurlingham'] },
  { slug: 'destapaciones-villa-tesei', name: 'Villa Tesei', zoneSlug: 'zona-oeste', zoneName: 'Zona Oeste', nearby: ['Hurlingham', 'Morón', 'Castelar'] },
  { slug: 'destapaciones-tapiales', name: 'Tapiales', zoneSlug: 'zona-oeste', zoneName: 'Zona Oeste', nearby: ['Aldo Bonzi', 'Villa Madero', 'San Justo'] },
  { slug: 'destapaciones-isidro-casanova', name: 'Isidro Casanova', zoneSlug: 'zona-oeste', zoneName: 'Zona Oeste', nearby: ['San Justo', 'Rafael Castillo', 'Laferrere'] },
  { slug: 'destapaciones-rafael-castillo', name: 'Rafael Castillo', zoneSlug: 'zona-oeste', zoneName: 'Zona Oeste', nearby: ['Isidro Casanova', 'Morón', 'Laferrere'] },

  // ZONA NORTE
  { slug: 'destapaciones-san-isidro', name: 'San Isidro', zoneSlug: 'zona-norte', zoneName: 'Zona Norte', nearby: ['Martínez', 'Beccar', 'Acassuso'] },
  { slug: 'destapaciones-martinez', name: 'Martínez', zoneSlug: 'zona-norte', zoneName: 'Zona Norte', nearby: ['San Isidro', 'Olivos', 'Acassuso'] },
  { slug: 'destapaciones-olivos', name: 'Olivos', zoneSlug: 'zona-norte', zoneName: 'Zona Norte', nearby: ['Martínez', 'Vicente López', 'Florida'] },
  { slug: 'destapaciones-vicente-lopez', name: 'Vicente López', zoneSlug: 'zona-norte', zoneName: 'Zona Norte', nearby: ['Olivos', 'Florida', 'Núñez'] },
  { slug: 'destapaciones-san-fernando', name: 'San Fernando', zoneSlug: 'zona-norte', zoneName: 'Zona Norte', nearby: ['Tigre', 'Victoria', 'Virreyes'] },
  { slug: 'destapaciones-tigre', name: 'Tigre', zoneSlug: 'zona-norte', zoneName: 'Zona Norte', nearby: ['San Fernando', 'Pacheco', 'Nordelta'] },
  { slug: 'destapaciones-florida', name: 'Florida', zoneSlug: 'zona-norte', zoneName: 'Zona Norte', nearby: ['Olivos', 'Vicente López', 'Munro'] },
  { slug: 'destapaciones-munro', name: 'Munro', zoneSlug: 'zona-norte', zoneName: 'Zona Norte', nearby: ['Florida', 'Villa Adelina', 'Carapachay'] },
  { slug: 'destapaciones-villa-adelina', name: 'Villa Adelina', zoneSlug: 'zona-norte', zoneName: 'Zona Norte', nearby: ['Munro', 'Boulogne', 'Carapachay'] },
  { slug: 'destapaciones-boulogne', name: 'Boulogne', zoneSlug: 'zona-norte', zoneName: 'Zona Norte', nearby: ['Villa Adelina', 'San Isidro', 'Don Torcuato'] },
  { slug: 'destapaciones-beccar', name: 'Beccar', zoneSlug: 'zona-norte', zoneName: 'Zona Norte', nearby: ['San Isidro', 'Victoria', 'San Fernando'] },
  { slug: 'destapaciones-la-lucila', name: 'La Lucila', zoneSlug: 'zona-norte', zoneName: 'Zona Norte', nearby: ['Olivos', 'Martínez', 'Vicente López'] },
  { slug: 'destapaciones-acassuso', name: 'Acassuso', zoneSlug: 'zona-norte', zoneName: 'Zona Norte', nearby: ['San Isidro', 'Martínez', 'La Lucila'] },

  // ZONA SUR
  { slug: 'destapaciones-avellaneda', name: 'Avellaneda', zoneSlug: 'zona-sur', zoneName: 'Zona Sur', nearby: ['Lanús', 'Sarandí', 'Gerli'] },
  { slug: 'destapaciones-lanus', name: 'Lanús', zoneSlug: 'zona-sur', zoneName: 'Zona Sur', nearby: ['Avellaneda', 'Banfield', 'Lomas de Zamora'] },
  { slug: 'destapaciones-lomas-de-zamora', name: 'Lomas de Zamora', zoneSlug: 'zona-sur', zoneName: 'Zona Sur', nearby: ['Banfield', 'Temperley', 'Lanús'] },
  { slug: 'destapaciones-banfield', name: 'Banfield', zoneSlug: 'zona-sur', zoneName: 'Zona Sur', nearby: ['Lomas de Zamora', 'Lanús', 'Temperley'] },
  { slug: 'destapaciones-temperley', name: 'Temperley', zoneSlug: 'zona-sur', zoneName: 'Zona Sur', nearby: ['Lomas de Zamora', 'Banfield', 'Adrogué'] },
  { slug: 'destapaciones-san-justo', name: 'San Justo', zoneSlug: 'zona-sur', zoneName: 'Zona Sur', nearby: ['Ramos Mejía', 'Isidro Casanova', 'Villa Luzuriaga'] },
  { slug: 'destapaciones-la-matanza', name: 'La Matanza', zoneSlug: 'zona-sur', zoneName: 'Zona Sur', nearby: ['San Justo', 'Ramos Mejía', 'Isidro Casanova'] }
];
