# ACAB — Landing page

Landing page de **ACAB (All Chuchería Are Bastards)**: emprendimiento de snacks
saludables. La página muestra los dos productos y permite pedir por WhatsApp.

## Estructura

```
acab-landing/
├── index.html      # Toda la landing (HTML + CSS + JS embebidos, sin build)
├── assets/img/     # Fotos de empaques y logo
├── CLAUDE.md       # Contexto del proyecto para Claude Code
└── README.md
```

## Ver la página localmente

Abrir `index.html` en el navegador. No requiere servidor ni instalación.

## Completar los datos reales

Todo lo reemplazable está marcado con comentarios `TODO` en `index.html`
(hay una lista al inicio del archivo):

1. **WhatsApp**: número real en la constante `WHATSAPP` del `<script>` final.
2. **Colores**: variables `:root` del `<style>` → colores de marca.
3. **Productos**: nombres, descripciones y precios.
4. **Imágenes**: subir fotos a `assets/img/` y reemplazar los placeholders.
5. **Logo** en el header e **Instagram** en el footer.

## Publicar en GitHub Pages

1. En GitHub: **Settings → Pages**.
2. En *Source* elegir **Deploy from a branch**, rama `main`, carpeta `/ (root)`.
3. Guardar. En ~1 minuto la página queda en `https://<usuario>.github.io/acab-landing/`.

Cada push a `main` actualiza la página automáticamente.

## Pasos futuros

- [ ] Reemplazar placeholders con contenido real (ver arriba)
- [ ] Subir fotos de empaques y logo a `assets/img/`
- [ ] Activar GitHub Pages
- [ ] Dominio propio (se configura en Settings → Pages → Custom domain)
- [ ] Si crecen los productos: catálogo con más tarjetas
- [ ] Si los pedidos crecen: evaluar carrito / pasarela de pagos
