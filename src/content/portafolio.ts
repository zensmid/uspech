export type Proyecto = {
  slug: string;
  titulo: string;
  /** Si falta, la tarjeta no muestra nombre de cliente (p. ej. piezas de catálogo). */
  cliente?: string;
  divisionSlug: string;
  imagen: { src: string; alt: string };
  queSeHizo: string;
  resultado: string;
};

/**
 * Textos redactados a partir del brief y de las fotos reales ya clasificadas
 * en ASSETS.md. Son borrador: se aprueban de común acuerdo con el cliente
 * antes de publicarse (ver sección 7 del brief).
 */
export const proyectos: Proyecto[] = [
  // --- BTL y Eventos ---
  {
    slug: "campus-stand-cnc",
    titulo: "Stand a medida",
    cliente: "Campus",
    divisionSlug: "btl-eventos",
    imagen: {
      src: "/assets/portafolio/campus-stand-cnc.jpg",
      alt: "Stand a medida construido en madera y CNC para Campus",
    },
    queSeHizo:
      "Diseñamos y construimos un stand a medida en madera y CNC, con pérgola e iluminación integrada, para la presencia de marca de Campus en punto de venta.",
    resultado:
      "Una estructura sólida, lista para montarse rápido y reutilizarse en varias activaciones.",
  },
  {
    slug: "ducati-launch-2016",
    titulo: "Lanzamiento de producto",
    cliente: "Ducati México",
    divisionSlug: "btl-eventos",
    imagen: {
      src: "/assets/portafolio/ducati-launch-2016.jpg",
      alt: "Lanzamiento de producto Ducati México en escenario",
    },
    queSeHizo:
      "Producimos el escenario y la ambientación completa para el lanzamiento de producto de Ducati México.",
    resultado:
      "Un evento a la altura de la marca, con el acabado premium que la ocasión exigía.",
  },
  {
    slug: "cemefi-gala-2018",
    titulo: "Gala de reconocimiento 2018",
    cliente: "Cemefi",
    divisionSlug: "btl-eventos",
    imagen: {
      src: "/assets/portafolio/cemefi-gala-2018.jpg",
      alt: "Escenario para la gala Cemefi 2018",
    },
    queSeHizo:
      "Producimos el escenario y la museografía de la gala anual de reconocimiento de Cemefi.",
    resultado:
      "Una ceremonia solemne y bien resuelta, acorde al peso institucional del evento.",
  },
  {
    slug: "medtronic-booth",
    titulo: "Stand en ExpoMED",
    cliente: "Medtronic",
    divisionSlug: "btl-eventos",
    imagen: {
      src: "/assets/portafolio/medtronic-booth.jpg",
      alt: "Stand de exhibición para Medtronic en ExpoMED",
    },
    queSeHizo:
      "Construimos el stand de exhibición de Medtronic para ExpoMED, pensado para exhibir equipo médico con claridad.",
    resultado:
      "Un espacio funcional que facilitó la atención a visitantes durante toda la exposición.",
  },
  {
    slug: "7eleven-mundial-2018",
    titulo: "Activación Mundial Rusia 2018",
    cliente: "7-Eleven",
    divisionSlug: "btl-eventos",
    imagen: {
      src: "/assets/portafolio/7eleven-mundial-2018.jpg",
      alt: "Activación 7-Eleven, Mundial Rusia 2018",
    },
    queSeHizo:
      "Diseñamos y montamos una activación temática del Mundial Rusia 2018 en punto de venta para 7-Eleven.",
    resultado:
      "Una experiencia llamativa que conectó la marca con la afición al fútbol en plena temporada mundialista.",
  },
  {
    slug: "icyhot-activacion",
    titulo: "Activación urbana \"Mi Reto Soy Yo\"",
    cliente: "IcyHot",
    divisionSlug: "btl-eventos",
    imagen: {
      src: "/assets/portafolio/icyhot-activacion.jpg",
      alt: "Activación urbana Mi Reto Soy Yo para IcyHot",
    },
    queSeHizo:
      "Producimos la activación urbana \"Mi Reto Soy Yo\" de IcyHot, llevando la marca directo a la calle.",
    resultado:
      "Contacto directo con el consumidor en su entorno cotidiano, reforzando el mensaje de la campaña.",
  },
  {
    slug: "farmatodo-maraton",
    titulo: "Módulo de recuperación en maratón",
    cliente: "Farmatodo",
    divisionSlug: "btl-eventos",
    imagen: {
      src: "/assets/portafolio/farmatodo-maraton.jpg",
      alt: "Módulo de recuperación Farmatodo en maratón",
    },
    queSeHizo:
      "Instalamos un módulo de recuperación de Farmatodo sobre la ruta de un maratón, atendiendo a los corredores en meta.",
    resultado:
      "Presencia de marca en un punto de alto tránsito y fuerte carga emocional para los participantes.",
  },
  {
    slug: "f1-modulo",
    titulo: "Módulo de información, Gran Premio de México",
    cliente: "Fórmula 1",
    divisionSlug: "btl-eventos",
    imagen: {
      src: "/assets/portafolio/f1-modulo.jpg",
      alt: "Módulo de información Fórmula 1 Gran Premio de México",
    },
    queSeHizo:
      "Construimos el módulo de información del Gran Premio de México de Fórmula 1.",
    resultado:
      "Un punto de contacto claro y funcional para miles de asistentes durante el fin de semana de carrera.",
  },
  {
    slug: "meisa-stand",
    titulo: "Stand de exhibición",
    cliente: "MEISA",
    divisionSlug: "btl-eventos",
    imagen: {
      src: "/assets/portafolio/meisa-stand.jpg",
      alt: "Stand de exhibición para MEISA",
    },
    queSeHizo:
      "Diseñamos y construimos el stand de exhibición de MEISA para presentar su línea de productos industriales.",
    resultado:
      "Un espacio ordenado que puso el producto en el centro de la conversación con cada visitante.",
  },
  {
    slug: "ducati-del-mar-al-cielo",
    titulo: "Tour \"Del Mar al Cielo\" 2017",
    cliente: "Ducati México",
    divisionSlug: "btl-eventos",
    imagen: {
      src: "/assets/portafolio/ducati-del-mar-al-cielo.jpg",
      alt: "Tour Ducati Del Mar al Cielo 2017",
    },
    queSeHizo:
      "Producimos la itinerancia del tour \"Del Mar al Cielo\" de Ducati México por varias sedes durante 2017.",
    resultado:
      "Una presencia de marca consistente y bien ejecutada en cada parada del recorrido.",
  },
  {
    slug: "tapvs-stand-cnc",
    titulo: "Stand a medida",
    cliente: "TAPVS",
    divisionSlug: "btl-eventos",
    imagen: {
      src: "/assets/portafolio/tapvs-stand-cnc.jpg",
      alt: "Stand construido en carpintería y CNC para TAPVS",
    },
    queSeHizo:
      "Construimos en carpintería y CNC el stand de exhibición de TAPVS para su participación en exposición.",
    resultado:
      "Una presencia de marca sólida, producida de principio a fin en nuestro propio taller.",
  },
  {
    slug: "noche-mexicana-7eleven",
    titulo: "Activación \"Noche Mexicana\"",
    cliente: "7-Eleven",
    divisionSlug: "btl-eventos",
    imagen: {
      src: "/assets/portafolio/noche-mexicana-7eleven.jpg",
      alt: "Activación Noche Mexicana para 7-Eleven",
    },
    queSeHizo:
      "Montamos la activación temática \"Noche Mexicana\" de 7-Eleven en punto de venta.",
    resultado:
      "Una experiencia festiva que reforzó la identidad de marca en fechas clave.",
  },
  {
    slug: "pacto-mundial-onu",
    titulo: "Encuentro Anual 2017",
    cliente: "Pacto Mundial ONU México",
    divisionSlug: "btl-eventos",
    imagen: {
      src: "/assets/portafolio/pacto-mundial-onu.jpg",
      alt: "Encuentro Anual del Pacto Mundial de la ONU en México",
    },
    queSeHizo:
      "Producimos el montaje del Encuentro Anual del Pacto Mundial de la ONU México 2017.",
    resultado:
      "Un evento institucional resuelto con la formalidad que requiere un organismo internacional.",
  },
  {
    slug: "real-estate-kiosk",
    titulo: "Kiosco en centro comercial",
    cliente: "El Dorado Residencial",
    divisionSlug: "btl-eventos",
    imagen: {
      src: "/assets/portafolio/real-estate-kiosk.jpg",
      alt: "Kiosco de exhibición El Dorado Residencial en centro comercial",
    },
    queSeHizo:
      "Construimos el kiosco de exhibición de El Dorado Residencial dentro de un centro comercial.",
    resultado:
      "Un punto de venta permanente que acercó el proyecto inmobiliario al tráfico diario del centro comercial.",
  },
  {
    slug: "telcel-21k-stand",
    titulo: "Stand en el Medio Maratón 21K CDMX",
    cliente: "Telcel",
    divisionSlug: "btl-eventos",
    imagen: {
      src: "/assets/portafolio/telcel-21k-stand.jpg",
      alt: "Stand Telcel en el Medio Maratón 21K CDMX",
    },
    queSeHizo:
      "Montamos el stand de Telcel en el Medio Maratón 21K de la Ciudad de México.",
    resultado:
      "Presencia de marca visible para miles de corredores y espectadores durante el evento.",
  },
  {
    slug: "promat-stands",
    titulo: "Stands modulares de exhibición",
    cliente: "Promat / Image Magic Corporate",
    divisionSlug: "btl-eventos",
    imagen: {
      src: "/assets/portafolio/promat-stands.jpg",
      alt: "Stands modulares de exhibición",
    },
    queSeHizo:
      "Diseñamos y construimos un sistema de stands modulares de exhibición para Promat / Image Magic Corporate.",
    resultado:
      "Un sistema reutilizable que se adapta a distintos formatos de piso sin perder identidad de marca.",
  },
  {
    slug: "evento-crowd-2019",
    titulo: "Evento institucional 2019",
    divisionSlug: "btl-eventos",
    imagen: {
      src: "/assets/portafolio/evento-crowd-2019.jpg",
      alt: "Evento masivo producido por Uspech",
    },
    queSeHizo:
      "Producimos la logística y el montaje de un evento institucional de gran convocatoria.",
    resultado:
      "Un evento masivo que se desarrolló sin contratiempos de principio a fin.",
  },

  // --- Fasterprint ---
  {
    slug: "alpura-vehiculo",
    titulo: "Rotulación vehicular",
    cliente: "Alpura",
    divisionSlug: "fasterprint",
    imagen: {
      src: "/assets/portafolio/alpura-vehiculo.jpg",
      alt: "Rotulación vehicular para Alpura",
    },
    queSeHizo:
      "Rotulamos la flotilla vehicular de Alpura con vinil de gran formato.",
    resultado:
      "Vehículos que funcionan como publicidad móvil en cada ruta de distribución.",
  },
  {
    slug: "vidrios-berlitz",
    titulo: "Vinil en vidrios",
    cliente: "Berlitz",
    divisionSlug: "fasterprint",
    imagen: {
      src: "/assets/portafolio/vidrios-berlitz.jpg",
      alt: "Vinil en vidrios para Berlitz",
    },
    queSeHizo:
      "Aplicamos vinil decorativo en los vidrios de la sede de Berlitz.",
    resultado:
      "Una fachada con identidad de marca clara, sin obra ni intervención estructural.",
  },
  {
    slug: "flex-renting-fachada",
    titulo: "Fachada y señalética",
    cliente: "Flex Renting",
    divisionSlug: "fasterprint",
    imagen: {
      src: "/assets/portafolio/flex-renting-fachada.jpg",
      alt: "Fachada y señalética para Flex Renting",
    },
    queSeHizo:
      "Producimos e instalamos la fachada y señalética de Flex Renting.",
    resultado:
      "Una presencia de marca visible y consistente en el punto físico del negocio.",
  },
  {
    slug: "medical-queretaro",
    titulo: "Rótulo de fachada",
    cliente: "Medical Querétaro",
    divisionSlug: "fasterprint",
    imagen: {
      src: "/assets/portafolio/medical-queretaro.jpg",
      alt: "Rótulo de fachada para Medical Querétaro",
    },
    queSeHizo:
      "Fabricamos e instalamos el rótulo de fachada de Medical Querétaro.",
    resultado:
      "Mejor visibilidad e identificación del negocio desde la calle.",
  },
  {
    slug: "credito-maestro",
    titulo: "Rotulación de flotilla vehicular",
    cliente: "Crédito Maestro",
    divisionSlug: "fasterprint",
    imagen: {
      src: "/assets/portafolio/credito-maestro.jpg",
      alt: "Rotulación de flotilla vehicular para Crédito Maestro",
    },
    queSeHizo:
      "Rotulamos la flotilla vehicular de Crédito Maestro con vinil de gran formato.",
    resultado:
      "Una flotilla uniforme que refuerza el reconocimiento de marca en cada trayecto.",
  },
  {
    slug: "branding-exain",
    titulo: "Rotulación vehicular",
    cliente: "Exain",
    divisionSlug: "fasterprint",
    imagen: {
      src: "/assets/portafolio/branding-exain.jpg",
      alt: "Rotulación vehicular para Exain",
    },
    queSeHizo: "Rotulamos la unidad vehicular de Exain con su identidad de marca.",
    resultado:
      "Un vehículo que comunica la marca con un acabado limpio y profesional.",
  },
  {
    slug: "nescafe-1",
    titulo: "Rotulación de unidades móviles",
    cliente: "Nescafé",
    divisionSlug: "fasterprint",
    imagen: {
      src: "/assets/portafolio/nescafe-1.jpg",
      alt: "Rotulación de unidades móviles para Nescafé",
    },
    queSeHizo: "Rotulamos unidades móviles promocionales de Nescafé.",
    resultado:
      "Una unidad lista para recorrer puntos de venta y activaciones con la imagen de marca intacta.",
  },
  {
    slug: "nescafe-2",
    titulo: "Unidad móvil",
    cliente: "Nescafé Decaf",
    divisionSlug: "fasterprint",
    imagen: {
      src: "/assets/portafolio/nescafe-2.jpg",
      alt: "Rotulación de unidad móvil Nescafé Decaf",
    },
    queSeHizo: "Rotulamos la unidad móvil promocional de Nescafé Decaf.",
    resultado:
      "Una segunda unidad de la misma línea, lista para ampliar la cobertura de las activaciones.",
  },
  {
    slug: "stand-falcon",
    titulo: "Stand en exposición médica",
    cliente: "Falcon",
    divisionSlug: "fasterprint",
    imagen: {
      src: "/assets/portafolio/stand-falcon.jpg",
      alt: "Stand Falcon en exposición médica",
    },
    queSeHizo:
      "Construimos e imprimimos los gráficos del stand de Falcon para exposición médica.",
    resultado:
      "Un stand listo para recibir visitantes especializados del sector salud.",
  },
  {
    slug: "stand-fresenius",
    titulo: "Stand en exposición médica",
    cliente: "Fresenius Kabi",
    divisionSlug: "fasterprint",
    imagen: {
      src: "/assets/portafolio/stand-fresenius.jpg",
      alt: "Stand Fresenius Kabi en exposición médica",
    },
    queSeHizo:
      "Construimos e imprimimos los gráficos del stand de Fresenius Kabi para exposición médica.",
    resultado:
      "Un espacio funcional que resolvió la exhibición de producto en el piso de exposición.",
  },
  {
    slug: "teatro-ciudad-mexico",
    titulo: "Mantas de gran formato",
    cliente: "Sistema de Teatros de la Ciudad de México",
    divisionSlug: "fasterprint",
    imagen: {
      src: "/assets/portafolio/teatro-ciudad-mexico.jpg",
      alt: "Mantas de gran formato en la fachada del Teatro de la Ciudad de México",
    },
    queSeHizo:
      "Imprimimos e instalamos mantas de gran formato en la fachada del Sistema de Teatros de la Ciudad de México.",
    resultado:
      "Una fachada renovada que anuncia la cartelera con alta calidad de impresión.",
  },
  {
    slug: "icyhot-unidad-movil",
    titulo: "Unidad móvil rotulada",
    cliente: "IcyHot",
    divisionSlug: "fasterprint",
    imagen: {
      src: "/assets/portafolio/icyhot-unidad-movil.jpg",
      alt: "Unidad móvil rotulada para la activación IcyHot Mi Reto Soy Yo",
    },
    queSeHizo:
      "Rotulamos la unidad móvil usada en la activación \"Mi Reto Soy Yo\" de IcyHot.",
    resultado:
      "Un vehículo que lleva la campaña a cada parada de la activación.",
  },

  // --- CEAL ---
  {
    slug: "7eleven-vasos-ceal",
    titulo: "Vasos promocionales",
    cliente: "7-Eleven",
    divisionSlug: "ceal",
    imagen: {
      src: "/assets/portafolio/7eleven-vasos-ceal.jpg",
      alt: "Vasos promocionales personalizados para 7-Eleven",
    },
    queSeHizo:
      "Producimos vasos promocionales personalizados para una campaña de 7-Eleven.",
    resultado:
      "Un artículo promocional de uso diario que mantiene la marca presente fuera del punto de venta.",
  },
  {
    slug: "ceal-usb-catalogo",
    titulo: "Catálogo de USB personalizadas",
    divisionSlug: "ceal",
    imagen: {
      src: "/assets/portafolio/ceal-usb-catalogo.jpg",
      alt: "Catálogo de memorias USB personalizadas",
    },
    queSeHizo:
      "Desarrollamos memorias USB personalizadas para marcas como BMW, Heineken y VW, entre otras.",
    resultado:
      "Un artículo promocional de alto valor percibido, con la identidad de cada marca.",
  },
  {
    slug: "ceal-usb-variedad",
    titulo: "Formas a medida",
    divisionSlug: "ceal",
    imagen: {
      src: "/assets/portafolio/ceal-usb-variedad.jpg",
      alt: "Variedad de memorias USB con forma personalizada",
    },
    queSeHizo:
      "Fabricamos memorias USB en formas personalizadas, a la medida de cada marca.",
    resultado:
      "Piezas de regalo corporativo que se distinguen del USB genérico.",
  },
  {
    slug: "ceal-termos",
    titulo: "Termos y vasos térmicos",
    divisionSlug: "ceal",
    imagen: {
      src: "/assets/portafolio/ceal-termos.jpg",
      alt: "Termos y vasos térmicos personalizados",
    },
    queSeHizo:
      "Producimos termos y vasos térmicos personalizados como artículo promocional.",
    resultado:
      "Un regalo corporativo de uso cotidiano que mantiene la marca visible todos los días.",
  },
  {
    slug: "ferromex-usb",
    titulo: "USB con forma de locomotora",
    cliente: "Ferromex",
    divisionSlug: "ceal",
    imagen: {
      src: "/assets/portafolio/ferromex-usb.jpg",
      alt: "USB promocional con forma de locomotora Ferromex",
    },
    queSeHizo:
      "Diseñamos y fabricamos una memoria USB con forma de locomotora para Ferromex.",
    resultado:
      "Una pieza promocional única, directamente relacionada con el giro del cliente.",
  },
];
