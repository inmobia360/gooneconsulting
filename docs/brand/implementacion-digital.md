# Implementación digital de marca

La fuente visual aprobada está en [Marca Visual Go Once](../../assets/brand/marca-visual-go-once.png). Este tablero confirma el monograma G/O, las versiones clara y oscura, los recorridos conectados y la combinación tipográfica Space Grotesk + Inter.

## Activos compartidos por repositorio

| Recurso | Ubicación | Uso |
|---|---|---|
| Tablero maestro | `assets/brand/marca-visual-go-once.png` | referencia de diseño, no exportar como logo de producción |
| Tokens | `packages/go-once-brand/tokens.json` | producto, web, documentos y futuras marcas blancas |
| CSS | `packages/go-once-brand/brand.css` | base visual y componentes mínimos |
| Recorridos | `assets/brand/go-once-flow.svg` | hero, transiciones, separadores y fondos |

## Convención para futuros repositorios

1. Copiar o publicar el paquete `go-once-brand` como dependencia compartida.
2. Importar los tokens sin sobrescribir colores ni tipografías.
3. Mantener el logotipo final como asset independiente cuando se reciba su versión SVG/PNG con transparencia.
4. Nombrar las extensiones con el prefijo Go Once; no crear logos alternativos por vertical.
5. Revisar contraste, teclado, foco y móvil antes de aprobar una pantalla.

## Aplicación por producto

- **Web pública:** hero índigo, CTA lima, recorridos violeta/lima y una sola acción primaria.
- **Business OS:** navegación índigo, contenido crema, progreso violeta y acciones positivas lima.
- **Documentos:** crema/índigo como base; violeta para estructura y lima para datos o decisiones destacadas.
- **Repositorios técnicos:** tokens y componentes centralizados; no valores hex repartidos por componentes.

## Pendiente de diseño

Para una implementación de producción aún faltan el archivo vectorial maestro del monograma/logotipo y exportaciones oficiales de favicon, app icon y versiones transparentes. No se deben improvisar a partir del tablero raster.
