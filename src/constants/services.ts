export const SERVICE_ORDER = [
  "DB-025",
  "AA-112",
  "WF-009",
  "AA-147",
  "AA-201",
  "WF-055",
  "CP-001",
] as const;

export type ServiceId = (typeof SERVICE_ORDER)[number];

export type ServiceDefinition = {
  images: string[];
  title_es: string;
  title_en: string;
  description_es: string;
  description_en: string;
};

export const SERVICES_DATA: Record<ServiceId, ServiceDefinition> = {
  "DB-025": {
    images: ["/ejemplos/1z.webp"],
    title_es: "Dashboard Unificado de Crecimiento",
    title_en: "Unified Growth Dashboard",
    description_es:
      "Se acabó la duda sobre qué anuncio vende. Visualización en tiempo real del ROI cruzando pauta publicitaria con cierres reales de venta.",
    description_en:
      "Real-time ROI visualization by crossing ad spend data with actual sales closures. Know exactly where your money is going.",
  },
  "AA-112": {
    images: ["/ejemplos/2z.webp"],
    title_es: "Atención Instantánea de Leads",
    title_en: "Instant Lead Engagement",
    description_es:
      "Respuesta inmediata 24/7. Tus leads reciben atención y resolución de dudas en segundos, eliminando el tiempo de espera por completo.",
    description_en:
      "Eliminate wait times. Every lead arriving via WhatsApp or web forms receives an instant response to their questions and needs.",
  },
  "WF-009": {
    images: ["/ejemplos/3z.webp"],
    title_es: "Showroom Virtual y Catálogos",
    title_en: "Virtual Showroom & Catalogs",
    description_es:
      "Tu inventario disponible en segundos. Envío automatizado de fichas técnicas y catálogos inteligentes según el interés del cliente.",
    description_en:
      "Immediate distribution of technical sheets and catalogs requested via WhatsApp. The system identifies interest and delivers.",
  },
  "AA-147": {
    images: ["/ejemplos/4z.webp"],
    title_es: "Alerta Inteligente para Vendedores",
    title_en: "Smart Sales Alerts",
    description_es:
      "Tu equipo comercial con superpoderes. Notificaciones en tiempo real con un resumen ejecutivo del lead antes de iniciar la charla.",
    description_en:
      "Direct notifications to the sales team: 'Lead available' or 'New visit'. Includes an executive summary for context.",
  },
  "AA-201": {
    images: ["/ejemplos/5z.webp"],
    title_es: "Confirmación Automatizada de Citas",
    title_en: "Automated Appointment Booking",
    description_es:
      "Cero huecos en la agenda. Recordatorios inteligentes que confirman o re-agendan visitas de forma autónoma sin intervención humana.",
    description_en:
      "Drastic reduction in no-shows through smart reminders that interact with clients to confirm or reschedule visits.",
  },
  "WF-055": {
    images: ["/ejemplos/6z.webp"],
    title_es: "Sincronización Total de Stock",
    title_en: "Total Stock Synchronization",
    description_es:
      "Vende solo lo que tenés. Una actualización centralizada impacta en Mercado Libre, web y local físico al mismo tiempo.",
    description_en:
      "Centralized updates that automatically impact all sales portals. End the error of selling out-of-stock items.",
  },
  "CP-001": {
    images: [],
    title_es: "Reestructura Personalizada",
    title_en: "Custom Restructuring",
    description_es:
      "Dise\u00f1o de infraestructura a medida para problemas estructurales. Ideal para empresas que necesitan una soluci\u00f3n integral que conecte todas sus \u00e1reas y elimine la carga manual por completo.",
    description_en:
      "Custom infrastructure design for structural problems. Ideal for companies needing an integral solution that connects all areas and completely eliminates manual workload.",
  },
};
