# Assets pendientes — Uspech

Este archivo lista los archivos reales que faltan para reemplazar los
placeholders del sitio. Se irá ampliando en cada fase (portafolio, catálogo,
clientes, etc.). Mientras no lleguen, cada espacio muestra un placeholder con
la ruta esperada directamente en pantalla.

## Logo (`/public/assets/logo/`)

| Archivo | Estado | Uso |
|---|---|---|
| `uspech-logo-2022.png` | ✅ Recibido (`logo uspech 2022.png`, 1797×747, fondo transparente) | Header (usado) |
| `uspech-logo-blanco.svg` | **[PENDIENTE]** | Footer (fondo oscuro `bg-ink`) — el logo actual es negro/rojo y no se lee sobre fondo oscuro, así que el footer sigue con el wordmark de texto mientras llega esta versión |
| `uspech-isotipo.svg` | **[PENDIENTE]** | Favicon / redes (el favicon sigue siendo el default de Next.js) |
| `uspech-logo-2022.svg` | **[PENDIENTE]** (idealmente vector) | Reemplazar el PNG por vector cuando esté disponible, para que escale sin pérdida |

**Color de acento actualizado desde el logo real:** rojo `#DA0100` (antes
placeholder `#D7263D`). Token `--color-accent` en `src/app/globals.css`.

## Divisiones (`/public/assets/divisiones/`)

| Archivo | Estado | Uso |
|---|---|---|
| `fasterprint-logo.png` | ✅ Recibido (`logo fasterprint.png`, fondo transparente) | Tarjeta de división en Inicio + hero de `/servicios/fasterprint` (usado) |
| `ceal-logo.png` | ✅ Recibido (`Logo oficial ceal.jpg`) y fondo blanco quitado con flood-fill → PNG transparente | Tarjeta de división en Inicio + hero de `/servicios/ceal` (usado) |
| `btl-eventos-logo.svg` | **[PENDIENTE]** (la tarjeta de Inicio usa en su lugar la foto `../portafolio/backstage-eventos.jpg`, ver tabla de Portafolio) | Header |
| `marketing-digital-logo.svg` | **[PENDIENTE]** (la tarjeta de Inicio usa en su lugar el wordmark `../logo/uspech-logo-2022.png`, mientras no haya logo propio de la división) | Header |

## Infraestructura (`/public/assets/infraestructura/`)

| Archivo | Estado | Uso |
|---|---|---|
| `plotters.jpg` | ✅ Recortado del póster de equipo Fasterprint (en blanco y negro) | Disponible, sin usar — reemplazado en la galería de infraestructura por `polar.png` (foto de producto a color) |
| `cnc.jpg` | ✅ Recortado del póster de equipo Fasterprint (en blanco y negro) | Disponible, sin usar — reemplazado en la galería de infraestructura por `router.png` (foto de producto a color) |
| `impresion-gran-formato.jpg` | ✅ Recortado del póster de equipo Fasterprint (en blanco y negro) | Disponible, sin usar — reemplazado en la galería de infraestructura por `latex.png` (foto de producto a color) |
| `printer-flatbed.jpg` | ✅ Recortado del póster de equipo Fasterprint (en blanco y negro) | Disponible, sin usar — reemplazado en el Hero de Inicio por `../portafolio/medtronic-stand.jpg` (foto de producto a color) |
| `carpinteria.jpg` | ✅ Foto real (stand TAPVS en CNC/MDF) | Galería de infraestructura (usado) |
| `herreria.jpg` | ⚠️ Foto de stock libre de derechos (Pexels License, uso comercial permitido, sin atribución requerida) — **no es trabajo real de Uspech**, es ilustrativa | Galería de infraestructura (usado) — reemplazar en cuanto haya foto real del taller |
| `solucion-360.jpg` | ✅ Ilustración conceptual generada con IA (corte isométrico de un taller donde diseño, CNC, impresión, herrería, carpintería y montaje de stand ocurren bajo un mismo techo, conectados por un hilo de luz roja — representa "todo se produce internamente") | Sección "Solución 360°" de Inicio (usado) |

## Portafolio (`/public/assets/portafolio/`)

Fotos reales organizadas a partir de la carpeta `fotos para video de web/` y
archivos sueltos de la carpeta raíz. Usadas en Inicio (Hero + "Portafolio
destacado") y en las páginas `/servicios/btl-eventos`, `/servicios/ceal`:

| Archivo | Proyecto | Uso |
|---|---|---|
| `campus-stand-cnc.jpg` | Stand "Campus" en madera con pérgola e iluminación | Hero de `/servicios/btl-eventos` |
| `ducati-launch-2016.jpg` | Ducati México — lanzamiento de producto en escenario | Portafolio destacado + `/servicios/btl-eventos` |
| `cemefi-gala-2018.jpg` | Cemefi — escenario gala 2018 | Portafolio destacado + `/servicios/btl-eventos` |
| `medtronic-booth.jpg` | Medtronic — stand en ExpoMED | Portafolio destacado + `/servicios/btl-eventos` |
| `medtronic-stand.jpg` | Medtronic — stand en ExpoMED (foto adicional, misma sede que `medtronic-booth.jpg`) | Hero de Inicio |
| `7eleven-mundial-2018.jpg` | 7-Eleven — activación Mundial Rusia 2018 | `/servicios/btl-eventos` |
| `icyhot-activacion.jpg` | IcyHot — activación urbana "Mi Reto Soy Yo" | `/servicios/btl-eventos` |
| `farmatodo-maraton.jpg` | Farmatodo — módulo de recuperación en maratón | `/servicios/btl-eventos` |
| `farmatodo-maraton-cdmx.jpg` | Farmatodo — activación con promotoras en el maratón CDMX | Hero de Inicio |
| `icyhot-mi-reto-soy-yo.jpg` | IcyHot — unidad móvil "Mi Reto Soy Yo" (foto adicional a `icyhot-activacion.jpg`) | Hero de Inicio |
| `backstage-eventos.jpg` | Backstage de control de sonido/proyección en un evento Uspech | Tarjeta de división "BTL y Eventos" en Inicio |
| `f1-modulo.jpg` | Fórmula 1 — módulo de información Gran Premio de México | `/servicios/btl-eventos` |
| `meisa-stand.jpg` | MEISA/ViscoTec/Leybold — stand de exhibición | Portafolio destacado + `/servicios/btl-eventos` |
| `ducati-del-mar-al-cielo.jpg` | Ducati México — tour "Del Mar al Cielo" 2017 | `/servicios/btl-eventos` |
| `tapvs-stand-cnc.jpg` | TAPVS — stand construido a medida | Portafolio destacado + Infraestructura/Carpintería + `/servicios/btl-eventos` |
| `noche-mexicana-7eleven.jpg` | 7-Eleven — activación "Noche Mexicana" | `/servicios/btl-eventos` |
| `pacto-mundial-onu.jpg` | Encuentro Anual del Pacto Mundial ONU México 2017 | `/servicios/btl-eventos` |
| `real-estate-kiosk.jpg` | El Dorado Residencial — kiosco en centro comercial | `/servicios/btl-eventos` |
| `telcel-21k-stand.jpg` | Telcel — stand en el Medio Maratón 21K CDMX | `/servicios/btl-eventos` |
| `promat-stands.jpg` | Stands modulares (Promat / Image Magic Corporate) | `/servicios/btl-eventos` |
| `evento-crowd-2019.jpg` | Evento institucional 2019 | `/servicios/btl-eventos` |
| `ducati-dealer.jpg`, `evento-staff-2016.jpg`, `bic-bus-wrap.jpg` | Ducati México en agencia · equipo Uspech 2016 · BIC rotulación vehicular | Disponibles, aún sin usar |
| `7eleven-vasos-ceal.jpg` | 7-Eleven — vasos promocionales | Portafolio destacado + Hero de `/servicios/ceal` |
| `ceal-usb-catalogo.jpg` | Catálogo de USB personalizadas (BMW, Heineken, VW, etc.) | `/servicios/ceal` |
| `ceal-usb-variedad.jpg` | Variedad de formas de USB a medida | `/servicios/ceal` |
| `ceal-termos.jpg` | Termos y vasos térmicos personalizados | `/servicios/ceal` |

**`/servicios/fasterprint` — carrusel del hero** (`infraestructura/`, fotos de
producto reales de equipo Üspech, fondo transparente/estudio, provistas
directamente por el cliente): `router.png` (Router CNC), `polar.png`
(Plotters), `plotter-corte.png` (Plotter de corte Graphtec),
`plotter-cama-plana.jpg` (Plotter de cama plana UV), `gran-formato.png` y
`latex.png` (impresión en látex).

**`/servicios/fasterprint` — "Trabajos recientes"** (`portafolio/`, trabajo
real de clientes): `alpura-vehiculo.jpg` (rotulación vehicular Alpura),
`vidrios-berlitz.jpg` (vinil en vidrios Berlitz), `flex-renting-fachada.jpg`
(fachada Flex Renting), `medical-queretaro.jpg` (fachada Medical Querétaro),
`credito-maestro.jpg` (flotilla Crédito Maestro), `branding-exain.jpg`
(rotulación Exain), `nescafe-1.jpg` / `nescafe-2.jpg` (unidades móviles
Nescafé y Nescafé Decaf), `stand-falcon.jpg` y `stand-fresenius.jpg` (stands
en exposición médica — construidos/impresos por Uspech), `teatro-ciudad-
mexico.jpg` (mantas de gran formato, Sistema de Teatros CDMX — **cliente de
la lista oficial del brief**), `icyhot-unidad-movil.jpg` (unidad móvil
rotulada, activación "Mi Reto Soy Yo" de IcyHot).
| `ferromex-usb.jpg` | USB promocional con forma de locomotora Ferromex | `/servicios/ceal` |

**Nota:** ya revisé una muestra considerable de la carpeta `fotos para video
de web/` (~115 archivos en total: más de 40 vistos) y descarté las que son
imágenes de stock/referencia (renders genéricos de stands de marcas ajenas,
catálogos de producto genéricos, fotos de banco para blogs) en vez de
trabajo real de Uspech. Quedan ~70 archivos sin revisar (en su mayoría fotos
sueltas de 2014 y clips de video como "evento seven" y "ducati
lanszamiento") — dime si quieres que siga nutriendo el portafolio con esos.

**Publicidad y Marketing Digital:** no se encontró ningún material real de
Uspech para esta división (es consistente con el brief: su contenido está
marcado como pendiente de redacción). Por decisión del cliente, su portada en
`/servicios/marketing-digital` usa un tratamiento gráfico propio en CSS
(diagonal de acento sobre cuadrícula, sin fotos ni imágenes generadas por IA)
en lugar de una imagen — ver `DivisionHero.tsx`.

✅ Cliente, división, qué se hizo y resultado ya están redactados para los 34
proyectos en `src/content/portafolio.ts` (`/portafolio` y
`/portafolio/[slug]`). Son borrador: falta aprobarlos de común acuerdo con el
cliente (ver sección 7 del brief) y completar los que digan "evento
institucional" sin nombre de cliente, si se puede identificar.

## Clientes (`/public/assets/clientes/`)

**[PENDIENTE]** Logos en buena calidad (vector/PNG transparente) de los
clientes listados en el brief. Ya se confirmó visualmente, en fotos de
trabajo real, que **7-Eleven, Farmatodo, Cemefi y Ducati México** (los
cuatro están en la lista oficial del brief) son clientes reales
fotografiados — ver tabla de Portafolio arriba. También aparecen otros
clientes reales fuera de esa lista (Medtronic, MEISA, TAPVS, Telcel,
Fórmula 1 México, IcyHot, BIC, Ferromex, El Dorado Residencial) — buen
material de portafolio aunque no tengamos su logo para el muro de clientes.

## Video (`/public/assets/video/`)

| Archivo | Estado | Uso |
|---|---|---|
| `btl-highlights.mp4` | ✅ Recibido (`Final.mp4`, 168MB) | Para `/servicios/btl-eventos` (página aún no construida — fase b) |

**Importante:** el archivo pesa 168MB — **no se sube a git** (ver
`.gitignore`) y **no debe servirse directo desde `/public` en producción**:
hay que subirlo a Supabase Storage o un CDN de video y referenciarlo por URL,
tal como ya está planeado para los archivos de clientes en la sección 6 del
brief. Queda local en el repo solo para desarrollo.

También están disponibles sin usar aún: `evento seven.mp4` / `evento seven
2.mp4` / `evento seven 3.mp4` (activación 7-Eleven), `ducati lanszamiento
.mp4` (lanzamiento Ducati México) y varios clips sueltos en `fotos para
video de web/`. Buenos candidatos para galería de video por división más
adelante.

## PDF (`/public/assets/pdf/`)

| Archivo | Estado | Uso |
|---|---|---|
| `catalogo-ceal.pdf` | ✅ Recibido (`Catálogo 2025-2026.pdf`, carpeta "Catalogos promocionales", 120MB) | Descarga en `/servicios/ceal` y `/catalogo` |
| `brochure-uspech.pdf` | **[PENDIENTE]** | Descarga general en `/catalogo` |

**`/servicios/ceal` — catálogos por categoría** (`pdf/ceal/`, recibidos en la
carpeta "Catalogos promocionales"): `boligrafos-plastico.pdf`,
`boligrafos-metalicos.pdf`, `boligrafos-multifuncionales.pdf`, `oficina.pdf`,
`hogar.pdf`, `bebidas.pdf`, `llaveros.pdf`, `textil.pdf`, `tiempo-libre.pdf`,
`herramientas.pdf`, `ecologicos.pdf`, `arte.pdf`, `mundial.pdf` y los
catálogos de marca `bic.pdf`, `columbia.pdf`, `froc.pdf`, `targus.pdf`.
Se descartaron dos duplicados exactos de la carpeta original (`Oficina
(1).pdf` y `Catálogo 2025-2026 (1).pdf`).

**Importante:** entre el catálogo general y los 17 catálogos por categoría
suman ~450MB (el catálogo general por sí solo pesa 120MB, por encima del
límite de 100MB por archivo de GitHub) — **no se suben a git** (ver
`.gitignore`) y **no deben servirse directo desde `/public` en producción**:
hay que subirlos a Supabase Storage o un CDN y referenciarlos por URL, igual
que ya está planeado para `btl-highlights.mp4` (ver sección de Video). Quedan
locales en el repo solo para desarrollo.

**[PENDIENTE]** `brochure-uspech.pdf`, además de quién actualiza los
catálogos mensualmente desde `/admin`.
