# Go Once Brand Kit

Kit de diseño compartido para cada repositorio de Go Once. Importa `brand.css` y consume `tokens.json` desde el sistema de tokens de tu stack. La pieza original de dirección de arte está en `../../assets/brand/marca-visual-go-once.png`.

No se incluye un SVG del logotipo: el tablero es una referencia raster aprobada, no un archivo maestro vectorial. Hasta recibir el arte final editable, no traces ni reconstruyas el monograma para producción.

## Uso mínimo

```css
@import "@go-once/brand/brand.css";
```

Usa `go-button-primary` para la acción única prioritaria de una pantalla y `go-button-secondary` para alternativas. `go-once-flow.svg` es un recurso decorativo de fondo; no transmite información crítica.
