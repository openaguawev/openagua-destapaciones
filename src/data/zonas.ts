export interface ZonaData {
  slug: string;
  name: string;
  barrios: string[];
  description: string;
}

export const getZonas = (): ZonaData[] => {
  return [
    {
      slug: "caba",
      name: "CABA",
      barrios: ["Palermo", "Caballito", "Belgrano", "Recoleta", "Villa Urquiza", "Flores", "Villa Devoto", "Liniers", "Almagro", "Boedo", "Chacarita", "Colegiales", "Floresta", "La Boca", "Mataderos", "Núñez", "Saavedra", "San Telmo", "Villa Crespo", "Villa del Parque", "Villa Luro", "Villa Pueyrredón", "Villa Santa Rita"],
      description: "Servicio rápido y garantizado en todos los barrios de CABA. Conocemos a la perfección las infraestructuras de edificios, consorcios y PH porteños."
    },
    {
      slug: "zona-norte",
      name: "Zona Norte",
      barrios: ["San Isidro", "Martínez", "Olivos", "Vicente López", "San Fernando", "Tigre", "Florida", "Munro", "Villa Adelina", "Boulogne", "Beccar", "La Lucila", "Acassuso"],
      description: "Especialistas en destapaciones para casas con jardín en Zona Norte, donde las raíces en cañerías son el problema más frecuente. Equipo de hidrojet disponible."
    },
    {
      slug: "zona-oeste",
      name: "Zona Oeste",
      barrios: ["Ramos Mejía", "Haedo", "Castelar", "Morón", "Ciudadela", "San Martín", "Hurlingham", "Ituzaingó", "Tres de Febrero", "Caseros", "El Palomar", "Villa Tesei", "Tapiales", "Isidro Casanova", "Rafael Castillo"],
      description: "Nuestra flota atiende servicios programados en toda la Zona Oeste. Destapación con máquina de sonda y limpieza a alta presión garantizada."
    },
    {
      slug: "zona-sur",
      name: "Zona Sur",
      barrios: ["Avellaneda", "Lanús", "Lomas de Zamora", "Banfield", "Temperley", "San Justo", "La Matanza"],
      description: "Servimos a centros comerciales y hogares del partido de Zona Sur. Respuesta ágil y presupuestos sin sorpresas ocultas."
    }
  ];
};
