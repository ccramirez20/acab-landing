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

## Publicado

El sitio está EN VIVO en https://ccramirez20.github.io/acab-landing/ (GitHub
Pages, rama `main`, raíz; se redespliega solo con cada push a `main`).

## Próxima sesión — ideas pendientes (ninguna urgente)

1. **Dominio propio** (`acabsnacks.*`, comprado en Cloudflare Registrar u
   otro registrador — pago/cuenta del usuario, no lo hace Claude). Una vez
   comprado:
   1. Crear archivo `CNAME` en la raíz del repo con el dominio elegido
      (ej. `acabsnacks.com`).
   2. En el DNS del registrador: 4 registros A en `@` → `185.199.108.153`,
      `185.199.109.153`, `185.199.110.153`, `185.199.111.153`; y un CNAME
      de `www` → `ccramirez20.github.io`.
   3. GitHub: repo → Settings → Pages → Custom domain, escribir el dominio,
      esperar propagación DNS y activar "Enforce HTTPS".
   4. Actualizar `og:image` y `og:url` en `index.html` (`<head>`) al dominio
      nuevo.
2. Opcional: fotos reales de los empaques físicos (las tarjetas usan los sellos
   circulares recortados de los empaques — `assets/img/sello-*.png`; los posts
   cómicos van como stickers en el hero y en "¿Quiénes somos?").
   Tipografías: Permanent Marker (títulos) + Baloo 2 (texto). Cada mención de
   "ACAB" en texto va como logo inline (`.acab-inline`).

Favicon (`assets/img/logo.png`) y meta tags Open Graph (título "ACAB - Snacks
saludables") ya están en el `<head>` de `index.html`.

## Convenciones

- Mantener todo lo editable por los dueños (datos, colores) agrupado y comentado.
- Verificar cambios abriendo index.html en el navegador; no hay tests ni CI.
