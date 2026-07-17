# CLAUDE.md

## Qué es esto

Landing page de **ACAB (All Chuchería Are Bastards)**, emprendimiento familiar de
snacks saludables (dos productos con empaque, logo y colores ya definidos por los
dueños). Objetivo: que la gente vea los productos y pida por WhatsApp.

## Decisiones tomadas

- **Un solo `index.html`** con CSS y JS embebidos. Sin frameworks, sin build,
  sin dependencias. No agregar tooling salvo que el proyecto crezca de verdad.
- **Pedidos por WhatsApp**: enlaces `wa.me` con mensaje pre-armado. El número
  vive en una sola constante (`WHATSAPP`) en el `<script>` al final de index.html.
- **Hosting: GitHub Pages** desde la rama `main`, carpeta raíz.
- **Dirección visual**: cartel de protesta / punk (la marca es un chiste sobre
  ACAB), no landing "healthy" genérica. Paleta actual es placeholder; los colores
  reales de marca van en las variables `:root`.
- Idioma del sitio y del proyecto: español.

## Estado / pendientes

La página ya usa los datos reales de `brand/`: paleta muestreada de los empaques
(variables `:root`), logo (`assets/img/logo.png`), productos Capitán Banano y
Capitana Piña con descripciones sacadas de los empaques, e Instagram
`@acab_snacks`. Los materiales fuente viven en `brand/` (logos, empaques en PDF
y PNG hi-res, post de Instagram, misión/visión).

Datos de los dueños ya cargados: WhatsApp (`WHATSAPP` en el `<script>`) y
precios: $5.000/unidad, pedido mínimo 10 unidades (combinación libre),
domicilio $5.000 a cargo del cliente (`.precio` y `.nota-pedido`). **Los
precios cambian en 2027.** Cada producto muestra su etiqueta nutricional
completa en un `<details>` (datos transcritos de los empaques en `brand/`).

## Próxima sesión — por dónde arrancar

1. Activar GitHub Pages (Settings → Pages → rama `main`, carpeta raíz) y
   verificar la URL publicada.
2. Opcional: fotos reales de los empaques físicos (las tarjetas usan los sellos
   circulares recortados de los empaques — `assets/img/sello-*.png` — y el post
   de Instagram de la piña va como sticker en "¿Quiénes somos?").
   Tipografías: Permanent Marker (títulos) + Baloo 2 (texto). Cada mención de
   "ACAB" en texto va como logo inline (`.acab-inline`).

## Convenciones

- Mantener todo lo editable por los dueños (datos, colores) agrupado y comentado.
- Verificar cambios abriendo index.html en el navegador; no hay tests ni CI.
