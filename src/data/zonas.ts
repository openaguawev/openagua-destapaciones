export interface ZonaData {
  slug: string;
  name: string;
  barrios: string[];
  description: string;
  seoTitle?: string;
  seoDescription?: string;
}

export const getZonas = (): ZonaData[] => {
  return [
    {
      slug: "caba",
      name: "CABA",
      barrios: ["Palermo", "Caballito", "Belgrano", "Recoleta", "Villa Urquiza", "Flores", "Villa Devoto", "Liniers", "Almagro", "Boedo", "Chacarita", "Colegiales", "Floresta", "La Boca", "Mataderos", "Núñez", "Saavedra", "San Telmo", "Villa Crespo", "Villa del Parque", "Villa Luro", "Villa Pueyrredón", "Villa Santa Rita"],
      description: "Trabajamos en todos los barrios de CABA. Conocemos a la perfección las infraestructuras de edificios, consorcios y PH porteños.",
      seoTitle: "Destapaciones en CABA | Capital Federal | Openagua",
      seoDescription: "Destapaciones de cloacas y cañerías en todos los barrios de CABA. Más de 12 años, 333 reseñas 4.9★. Llamá al 11 5179-7649."
    },
    {
      slug: "zona-norte",
      name: "Zona Norte",
      barrios: ["San Isidro", "Martínez", "Olivos", "Vicente López", "San Fernando", "Tigre", "Florida", "Munro", "Villa Adelina", "Boulogne", "Beccar", "La Lucila", "Acassuso"],
      description: "Especialistas en destapaciones para casas con jardín en Zona Norte, donde las raíces en cañerías son el problema más frecuente. Equipo de hidrojet disponible.",
      seoTitle: "Destapaciones en Zona Norte GBA | Openagua",
      seoDescription: "Destapaciones en San Isidro, Olivos, Vicente López, Martínez y todo el Norte GBA. 333 reseñas 4.9★. Llamá al 11 5179-7649."
    },
    {
      slug: "zona-oeste",
      name: "Zona Oeste",
      barrios: ["Ramos Mejía", "Haedo", "Castelar", "Morón", "Ciudadela", "San Martín", "Hurlingham", "Ituzaingó", "Tres de Febrero", "Caseros", "El Palomar", "Villa Tesei", "Tapiales", "Isidro Casanova", "Rafael Castillo"],
      description: "Atendemos servicios programados en toda la Zona Oeste con máquina de sonda y limpieza a alta presión.",
      seoTitle: "Destapaciones Zona Oeste: Cloacas y Cañerías | GBA",
      seoDescription: "Destapaciones de cloacas y cañerías en Ramos Mejía, Morón, Castelar, Haedo y todo el Oeste GBA. Sonda e hidrojet. ☎ 11 5179-7649."
    },
    {
      slug: "zona-sur",
      name: "Zona Sur",
      barrios: ["Avellaneda", "Lanús", "Lomas de Zamora", "Banfield", "Temperley", "San Justo", "La Matanza"],
      description: "Servimos a centros comerciales y hogares del partido de Zona Sur. Respuesta ágil y presupuestos sin sorpresas ocultas.",
      seoTitle: "Destapaciones en Zona Sur GBA | Openagua",
      seoDescription: "Destapaciones en Lanús, Lomas de Zamora, Quilmes, Avellaneda y todo el Sur GBA. 333 reseñas 4.9★. Llamá al 11 5179-7649."
    }
  ];
};
