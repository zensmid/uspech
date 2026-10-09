export type GaleriaItem = {
  /** Si falta, la tarjeta muestra un placeholder con la ruta esperada (ver ASSETS.md). */
  src?: string;
  alt: string;
  caption?: string;
};

export type Division = {
  slug: string;
  nombre: string;
  resumen: string;
  descripcionCorta: string;
  prioridad: number;
  /** Logo propio de la división, si ya se tiene (ver ASSETS.md). */
  logo?: string;
  /** Foto real para la tarjeta de Inicio, cuando aún no hay logo propio de la división. */
  cardImage?: string;
  cardImageAlt?: string;
  /** Imagen de portada real para /servicios/[slug]. Si falta, la página usa un tratamiento de marca en CSS. */
  heroImage?: string;
  heroAlt?: string;
  /** Si tiene 2+ imágenes, el hero se muestra como carrusel en vez de imagen fija (incluye heroImage como primera diapositiva). Todas requieren src (sin placeholders). */
  heroCarousel?: { src: string; alt: string; caption?: string }[];
  galeria?: GaleriaItem[];
  video?: { src: string; alt: string };
  /** Catálogos en PDF descargables (ver ASSETS.md — pesados, no se versionan en git). */
  descargas?: { titulo: string; descripcion: string; src: string; preview?: string }[];
};

/**
 * Catálogo fijo de divisiones. Luego migrará a la tabla `divisiones` de
 * Supabase para que el admin pueda editarlo sin tocar código.
 */
export const divisiones: Division[] = [
  {
    slug: "btl-eventos",
    nombre: "BTL y Eventos",
    resumen: "Activaciones y experiencias que conectan marcas con personas.",
    descripcionCorta:
      "El servicio que más deja y el que más impulsamos: activaciones, stands y eventos producidos de principio a fin.",
    prioridad: 1,
    cardImage: "/assets/portafolio/backstage-eventos.jpg",
    cardImageAlt: "Backstage de control de sonido y proyección en un evento Uspech",
    heroImage: "/assets/portafolio/campus-stand-cnc.jpg",
    heroAlt: "Stand a medida construido en madera y CNC para Campus",
    galeria: [
      {
        src: "/assets/portafolio/ducati-launch-2016.jpg",
        alt: "Lanzamiento de producto Ducati México en escenario",
        caption: "Ducati México — Lanzamiento",
      },
      {
        src: "/assets/portafolio/cemefi-gala-2018.jpg",
        alt: "Escenario para la gala Cemefi 2018",
        caption: "Cemefi — Gala de reconocimiento",
      },
      {
        src: "/assets/portafolio/medtronic-booth.jpg",
        alt: "Stand de exhibición para Medtronic en ExpoMED",
        caption: "Medtronic — ExpoMED",
      },
      {
        src: "/assets/portafolio/7eleven-mundial-2018.jpg",
        alt: "Activación 7-Eleven, Mundial Rusia 2018",
        caption: "7-Eleven — Mundial 2018",
      },
      {
        src: "/assets/portafolio/icyhot-activacion.jpg",
        alt: "Activación urbana Mi Reto Soy Yo para IcyHot",
        caption: "IcyHot — Activación urbana",
      },
      {
        src: "/assets/portafolio/farmatodo-maraton.jpg",
        alt: "Módulo de recuperación Farmatodo en maratón",
        caption: "Farmatodo — Maratón",
      },
      {
        src: "/assets/portafolio/f1-modulo.jpg",
        alt: "Módulo de información Fórmula 1 Gran Premio de México",
        caption: "Fórmula 1 — Gran Premio de México",
      },
      {
        src: "/assets/portafolio/meisa-stand.jpg",
        alt: "Stand de exhibición para MEISA",
        caption: "MEISA — Stand de exhibición",
      },
      {
        src: "/assets/portafolio/ducati-del-mar-al-cielo.jpg",
        alt: "Tour Ducati Del Mar al Cielo 2017",
        caption: "Ducati México — Del Mar al Cielo",
      },
      {
        src: "/assets/portafolio/tapvs-stand-cnc.jpg",
        alt: "Stand construido en carpintería y CNC para TAPVS",
        caption: "TAPVS — Stand a medida",
      },
      {
        src: "/assets/portafolio/noche-mexicana-7eleven.jpg",
        alt: "Activación Noche Mexicana para 7-Eleven",
        caption: "7-Eleven — Noche Mexicana",
      },
      {
        src: "/assets/portafolio/pacto-mundial-onu.jpg",
        alt: "Encuentro Anual del Pacto Mundial de la ONU en México",
        caption: "Pacto Mundial ONU México",
      },
      {
        src: "/assets/portafolio/real-estate-kiosk.jpg",
        alt: "Kiosco de exhibición El Dorado Residencial en centro comercial",
        caption: "El Dorado Residencial — Kiosco",
      },
      {
        src: "/assets/portafolio/telcel-21k-stand.jpg",
        alt: "Stand Telcel en el Medio Maratón 21K CDMX",
        caption: "Telcel — Medio Maratón 21K",
      },
      {
        src: "/assets/portafolio/promat-stands.jpg",
        alt: "Stands modulares de exhibición",
        caption: "Stands de exhibición a medida",
      },
      {
        src: "/assets/portafolio/evento-crowd-2019.jpg",
        alt: "Evento masivo producido por Uspech",
        caption: "Evento institucional 2019",
      },
    ],
    video: {
      src: "/assets/video/btl-highlights.mp4",
      alt: "Video resumen de activaciones BTL de Uspech",
    },
  },
  {
    slug: "fasterprint",
    nombre: "Fasterprint",
    resumen: "Impresión digital de gran formato sobre cualquier sustrato.",
    descripcionCorta:
      "Plasmamos cualquier idea sobre cualquier material: rígidos, flexibles, cortos tirajes y proyectos especiales.",
    prioridad: 2,
    logo: "/assets/divisiones/fasterprint-logo.png",
    heroImage: "/assets/infraestructura/router.png",
    heroAlt: "Router CNC Üspech",
    heroCarousel: [
      {
        src: "/assets/infraestructura/router.png",
        alt: "Router CNC Üspech",
        caption: "Router CNC",
      },
      {
        src: "/assets/infraestructura/polar.png",
        alt: "Plotter de impresión de gran formato Üspech",
        caption: "Plotters",
      },
      {
        src: "/assets/infraestructura/plotter-corte.png",
        alt: "Plotter de corte de vinil Graphtec",
        caption: "Plotter de corte",
      },
      {
        src: "/assets/infraestructura/plotter-cama-plana.jpg",
        alt: "Plotter de cama plana Üspech para impresión UV sobre rígidos",
        caption: "Plotter de cama plana",
      },
      {
        src: "/assets/infraestructura/gran-formato.png",
        alt: "Impresora de gran formato Üspech",
        caption: "Gran formato",
      },
      {
        src: "/assets/infraestructura/latex.png",
        alt: "Impresora Üspech imprimiendo en látex sobre lona",
        caption: "Impresión en látex",
      },
    ],
    galeria: [
      {
        src: "/assets/portafolio/alpura-vehiculo.jpg",
        alt: "Rotulación vehicular para Alpura",
        caption: "Alpura — Rotulación vehicular",
      },
      {
        src: "/assets/portafolio/vidrios-berlitz.jpg",
        alt: "Vinil en vidrios para Berlitz",
        caption: "Berlitz — Vinil en vidrios",
      },
      {
        src: "/assets/portafolio/flex-renting-fachada.jpg",
        alt: "Fachada y señalética para Flex Renting",
        caption: "Flex Renting — Fachada",
      },
      {
        src: "/assets/portafolio/medical-queretaro.jpg",
        alt: "Rótulo de fachada para Medical Querétaro",
        caption: "Medical Querétaro — Fachada",
      },
      {
        src: "/assets/portafolio/credito-maestro.jpg",
        alt: "Rotulación de flotilla vehicular para Crédito Maestro",
        caption: "Crédito Maestro",
      },
      {
        src: "/assets/portafolio/branding-exain.jpg",
        alt: "Rotulación vehicular para Exain",
        caption: "Branding Exain",
      },
      {
        src: "/assets/portafolio/nescafe-1.jpg",
        alt: "Rotulación de unidades móviles para Nescafé",
        caption: "Nescafé",
      },
      {
        src: "/assets/portafolio/nescafe-2.jpg",
        alt: "Rotulación de unidad móvil Nescafé Decaf",
        caption: "Nescafé Decaf",
      },
      {
        src: "/assets/portafolio/stand-falcon.jpg",
        alt: "Stand Falcon en exposición médica",
        caption: "Stand Falcon",
      },
      {
        src: "/assets/portafolio/stand-fresenius.jpg",
        alt: "Stand Fresenius Kabi en exposición médica",
        caption: "Stand Fresenius",
      },
      {
        src: "/assets/portafolio/teatro-ciudad-mexico.jpg",
        alt: "Mantas de gran formato en la fachada del Teatro de la Ciudad de México",
        caption: "Sistema de Teatros CDMX",
      },
      {
        src: "/assets/portafolio/icyhot-unidad-movil.jpg",
        alt: "Unidad móvil rotulada para la activación IcyHot Mi Reto Soy Yo",
        caption: "IcyHot — Unidad móvil",
      },
    ],
  },
  {
    slug: "ceal",
    nombre: "CEAL",
    resumen: "Artículos promocionales para campañas y regalos corporativos.",
    descripcionCorta:
      "Catálogo de artículos promocionales listo para descargar y cotizar.",
    prioridad: 3,
    logo: "/assets/divisiones/ceal-logo.png",
    heroImage: "/assets/portafolio/7eleven-vasos-ceal.jpg",
    heroAlt: "Vasos promocionales personalizados para 7-Eleven",
    galeria: [
      {
        src: "/assets/portafolio/ceal-termo-grupo-ras.jpg",
        alt: "Termos personalizados grabados para Grupo RAS",
        caption: "Grupo RAS — Termos grabados",
      },
      {
        src: "/assets/portafolio/ceal-caja-navidad-suhissa.jpg",
        alt: "Caja de regalo navideña personalizada para Suhissa",
        caption: "Suhissa — Caja navideña",
      },
      {
        src: "/assets/portafolio/ceal-usb-pata-alphaed.jpg",
        alt: "Memoria USB con forma personalizada de pata para AlphaEd",
        caption: "AlphaEd — USB forma personalizada",
      },
      {
        src: "/assets/portafolio/ceal-vasos-suhissa.jpg",
        alt: "Vasos personalizados con nombres para la posada de Suhissa",
        caption: "Suhissa — Vasos personalizados",
      },
    ],
    descargas: [
      {
        titulo: "Catálogo general 2025-2026",
        descripcion: "El catálogo completo de artículos promocionales CEAL.",
        src: "/assets/pdf/catalogo-ceal.pdf",
        preview: "/assets/pdf/previews/catalogo-ceal.png",
      },
      {
        titulo: "Bolígrafos de plástico",
        descripcion: "Bolígrafos promocionales en plástico, listos para personalizar.",
        src: "/assets/pdf/ceal/boligrafos-plastico.pdf",
        preview: "/assets/pdf/previews/boligrafos-plastico.png",
      },
      {
        titulo: "Bolígrafos metálicos",
        descripcion: "Bolígrafos promocionales en metal, acabados premium.",
        src: "/assets/pdf/ceal/boligrafos-metalicos.pdf",
        preview: "/assets/pdf/previews/boligrafos-metalicos.png",
      },
      {
        titulo: "Bolígrafos multifuncionales",
        descripcion: "Bolígrafos con funciones adicionales: stylus, USB, nivel, etc.",
        src: "/assets/pdf/ceal/boligrafos-multifuncionales.pdf",
        preview: "/assets/pdf/previews/boligrafos-multifuncionales.png",
      },
      {
        titulo: "Oficina",
        descripcion: "Artículos de escritorio y oficina personalizables.",
        src: "/assets/pdf/ceal/oficina.pdf",
        preview: "/assets/pdf/previews/oficina.png",
      },
      {
        titulo: "Hogar",
        descripcion: "Artículos promocionales para el hogar.",
        src: "/assets/pdf/ceal/hogar.pdf",
        preview: "/assets/pdf/previews/hogar.png",
      },
      {
        titulo: "Bebidas",
        descripcion: "Termos, vasos y artículos para bebidas personalizados.",
        src: "/assets/pdf/ceal/bebidas.pdf",
        preview: "/assets/pdf/previews/bebidas.png",
      },
      {
        titulo: "Llaveros",
        descripcion: "Llaveros promocionales en distintos materiales y formas.",
        src: "/assets/pdf/ceal/llaveros.pdf",
        preview: "/assets/pdf/previews/llaveros.png",
      },
      {
        titulo: "Textil",
        descripcion: "Playeras, gorras y otros artículos textiles personalizables.",
        src: "/assets/pdf/ceal/textil.pdf",
        preview: "/assets/pdf/previews/textil.png",
      },
      {
        titulo: "Tiempo libre",
        descripcion: "Artículos promocionales para deporte y tiempo libre.",
        src: "/assets/pdf/ceal/tiempo-libre.pdf",
        preview: "/assets/pdf/previews/tiempo-libre.png",
      },
      {
        titulo: "Herramientas",
        descripcion: "Herramientas y kits promocionales.",
        src: "/assets/pdf/ceal/herramientas.pdf",
        preview: "/assets/pdf/previews/herramientas.png",
      },
      {
        titulo: "Ecológicos",
        descripcion: "Artículos promocionales fabricados con materiales sustentables.",
        src: "/assets/pdf/ceal/ecologicos.pdf",
        preview: "/assets/pdf/previews/ecologicos.png",
      },
      {
        titulo: "Arte",
        descripcion: "Artículos promocionales relacionados con arte y manualidades.",
        src: "/assets/pdf/ceal/arte.pdf",
        preview: "/assets/pdf/previews/arte.png",
      },
      {
        titulo: "Mundial",
        descripcion: "Línea de artículos promocionales con temática mundialista.",
        src: "/assets/pdf/ceal/mundial.pdf",
        preview: "/assets/pdf/previews/mundial.png",
      },
      {
        titulo: "BIC",
        descripcion: "Catálogo de la marca BIC.",
        src: "/assets/pdf/ceal/bic.pdf",
        preview: "/assets/pdf/previews/bic.png",
      },
      {
        titulo: "Columbia",
        descripcion: "Catálogo de la marca Columbia.",
        src: "/assets/pdf/ceal/columbia.pdf",
        preview: "/assets/pdf/previews/columbia.png",
      },
      {
        titulo: "FROC",
        descripcion: "Catálogo de la marca FROC.",
        src: "/assets/pdf/ceal/froc.pdf",
        preview: "/assets/pdf/previews/froc.png",
      },
      {
        titulo: "Targus",
        descripcion: "Catálogo de la marca Targus.",
        src: "/assets/pdf/ceal/targus.pdf",
        preview: "/assets/pdf/previews/targus.png",
      },
    ],
  },
  {
    slug: "marketing-digital",
    nombre: "Publicidad y Marketing Digital",
    resumen: "Estrategia y pauta digital que acompaña cada campaña 360°.",
    descripcionCorta:
      "Complementamos cada activación física con presencia y pauta digital. Contenido en revisión.",
    prioridad: 4,
    logo: "/assets/logo/uspech-logo-2022.png",
  },
];
