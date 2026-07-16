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

La página funciona pero con contenido placeholder. Todo lo reemplazable está
marcado con `TODO` en index.html y listado en un bloque de comentario al inicio
del archivo: número de WhatsApp, colores de marca, nombres/descripciones/precios
de los productos, fotos de empaques (van en `assets/img/`), logo e Instagram.

## Próxima sesión — por dónde arrancar

1. Pedir a los dueños: fotos de empaques + logo, códigos de color de marca,
   nombres/descripciones/precios de los 2 productos, número de WhatsApp e
   Instagram.
2. Reemplazar los `TODO` de index.html con esos datos (imágenes a `assets/img/`).
3. Ajustar la paleta placeholder a los colores reales (variables `:root`) y
   revisar que el diseño siga funcionando con ellos.
4. Activar GitHub Pages (Settings → Pages → rama `main`, carpeta raíz) y
   verificar la URL publicada.

## Convenciones

- Mantener todo lo editable por los dueños (datos, colores) agrupado y comentado.
- Verificar cambios abriendo index.html en el navegador; no hay tests ni CI.
