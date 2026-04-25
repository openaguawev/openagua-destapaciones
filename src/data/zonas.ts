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
      description: "Servicio rápido y garantizado en todos los barrios de CABA. Conocemos a la perfección las infraestructuras de edificios, consorcios y PH porteños.",
      seoTitle: "Destapaciones en CABA | Openagua",
      seoDescription: "Destapaciones en CABA con atención en todos los barrios. Solucionamos cloacas, pluviales y cañerías sin romper. Llamanos al 11 5179-7649."
    },
    {
      slug: "zona-norte",
      name: "Zona Norte",
      barrios: ["San Isidro", "Martínez", "Olivos", "Vicente López", "San Fernando", "Tigre", "Florida", "Munro", "Villa Adelina", "Boulogne", "Beccar", "La Lucila", "Acassuso"],
      description: "Especialistas en destapaciones para casas con jardín en Zona Norte, donde las raíces en cañerías son el problema más frecuente. Equipo de hidrojet disponible.",
      seoTitle: "Destapaciones en zona norte | Openagua",
      seoDescription: "Destapaciones en zona norte para casas, edificios y comercios. Diagnóstico preciso y trabajos bien hechos. Llamanos al 11 5179-7649."
    },
    {
      slug: "zona-oeste",
      name: "Zona Oeste",
      barrios: ["Ramos Mejía", "Haedo", "Castelar", "Morón", "Ciudadela", "San Martín", "Hurlingham", "Ituzaingó", "Tres de Febrero", "Caseros", "El Palomar", "Villa Tesei", "Tapiales", "Isidro Casanova", "Rafael Castillo"],
      description: "Nuestra flota atiende servicios programados en toda la Zona Oeste. Destapación con máquina de sonda y limpieza a alta presión garantizada.",
      seoTitle: "Destapaciones en zona oeste | Openagua",
      seoDescription: "Destapaciones en zona oeste con atención en Morón, Ramos Mejía, Ituzaingó y alrededores. Soluciones reales. Llamanos al 11 5179-7649."
    },
    {
      slug: "zona-sur",
      name: "Zona Sur",
      barrios: ["Avellaneda", "Lanús", "Lomas de Zamora", "Banfield", "Temperley", "San Justo", "La Matanza"],
      description: "Servimos a centros comerciales y hogares del partido de Zona Sur. Respuesta ágil y presupuestos sin sorpresas ocultas.",
      seoTitle: "Destapaciones en zona sur | Openagua",
      seoDescription: "Destapaciones en zona sur con atención profesional y sin romper cañerías. Soluciones definitivas. Llamanos al 11 5179-7649."
    }
  ];
};
