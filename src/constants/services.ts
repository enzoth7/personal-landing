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
    images: ["/ejemplos/1z.png"],
    title_es: "Dashboard Unificado de Crecimiento",
    title_en: "Unified Growth Dashboard",
    description_es:
      "Se acab\u00f3 la duda sobre qu\u00e9 anuncio vende. Visualizaci\u00f3n en tiempo real del ROI cruzando pauta publicitaria con cierres reales de venta.",
    description_en:
      "Real-time ROI visualization by crossing ad spend data with actual sales closures. Know exactly where your money is going.",
  },
  "AA-112": {
    images: ["/ejemplos/2z.png"],
    title_es: "Atenci\u00f3n Instant\u00e1nea de Leads",
    title_en: "Instant Lead Engagement",
    description_es:
      "Respuesta inmediata 24/7. Tus leads reciben atenci\u00f3n y resoluci\u00f3n de dudas en segundos, eliminando el tiempo de espera por completo.",
    description_en:
      "Eliminate wait times. Every lead arriving via WhatsApp or web forms receives an instant response to their questions and needs.",
  },
  "WF-009": {
    images: ["/ejemplos/3z.png"],
    title_es: "Showroom Virtual y Cat\u00e1logos",
    title_en: "Virtual Showroom & Catalogs",
    description_es:
      "Tu inventario disponible en segundos. Env\u00edo automatizado de fichas t\u00e9cnicas y cat\u00e1logos inteligentes seg\u00fan el inter\u00e9s del cliente.",
    description_en:
      "Immediate distribution of technical sheets and catalogs requested via WhatsApp. The system identifies interest and delivers.",
  },
  "AA-147": {
    images: ["/ejemplos/4z.png"],
    title_es: "Alerta Inteligente para Vendedores",
    title_en: "Smart Sales Alerts",
    description_es:
      "Tu equipo comercial con superpoderes. Notificaciones en tiempo real con un resumen ejecutivo del lead antes de iniciar la charla.",
    description_en:
      "Direct notifications to the sales team: 'Lead available' or 'New visit'. Includes an executive summary for context.",
  },
  "AA-201": {
    images: ["/ejemplos/5z.png"],
    title_es: "Confirmaci\u00f3n Automatizada de Citas",
    title_en: "Automated Appointment Booking",
    description_es:
      "Cero huecos en la agenda. Recordatorios inteligentes que confirman o re-agendan visitas de forma aut\u00f3noma sin intervenci\u00f3n humana.",
    description_en:
      "Drastic reduction in no-shows through smart reminders that interact with clients to confirm or reschedule visits.",
  },
  "WF-055": {
    images: ["/ejemplos/6z.png"],
    title_es: "Sincronizaci\u00f3n Total de Stock",
    title_en: "Total Stock Synchronization",
    description_es:
      "Vende solo lo que ten\u00e9s. Una actualizaci\u00f3n centralizada impacta en Mercado Libre, web y local f\u00edsico al mismo tiempo.",
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
