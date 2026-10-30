# Ampliar la página de demo Angular — Plan de implementación

> **Para agentes implementadores:** usar la subguía requerida `superpowers:executing-plans` para ejecutar el plan paso a paso. Marcar cada paso con casillas.

**Objetivo:** enriquecer la página Angular con tres tarjetas informativas y un botón para abrir y cerrar detalles técnicos.

**Arquitectura:** conservar la portada actual y añadir una sección de contenido debajo. El componente Angular controlará el panel de detalles con un estado booleano; el servidor y el despliegue no cambian.

**Tecnologías:** Angular 22, TypeScript y CSS existentes.

**Diseño:** [2026-10-30-angular-demo-extra-content-design.md](../specs/2026-10-30-angular-demo-extra-content-design.md)

## Restricciones

- Mantener la página en español, adaptable y sin dependencias nuevas.
- No afirmar que el despliegue automático está configurado hasta conectar GitHub Actions.
- No añadir una suite automática; compilar y comprobar el comportamiento manualmente en el navegador.

## Puntos de revisión

- El rótulo del botón y `aria-expanded` deben coincidir con el estado real del panel.
- Las tarjetas deben apilarse correctamente en una pantalla estrecha.
- El panel debe ser claramente visible al abrirse y desaparecer al cerrarse.
- La tarjeta de GitHub Actions debe explicar la posibilidad de automatizar despliegues, sin afirmar que ya está activa.

---

### Tarea 1: Añadir información y detalles interactivos

**Archivos:**
- Modificar: `src/app/app.ts`
- Modificar: `src/app/app.html`
- Modificar: `src/app/app.css`

**Interfaz:**
- `App.showDetails: boolean`, inicializada en `false`.
- `App.toggleDetails(): void`, alterna `showDetails`.

- [x] **Paso 1: Añadir la sección de tarjetas**

En `src/app/app.html`, debajo de la sección principal, añadir tres tarjetas tituladas “Hecha con Angular”, “En Azure App Service” y “Despliegue con GitHub Actions”. Describir en cada una solo las capacidades reales o condicionales del proyecto.

- [x] **Paso 2: Añadir el botón y el panel de detalles**

Añadir a `src/app/app.ts` el estado `showDetails = false` y el método `toggleDetails()`. En la plantilla, crear un botón “Ver detalles” / “Ocultar detalles” que llame al método y refleje `showDetails` con `aria-expanded`. El panel condicional mostrará que la interfaz usa Angular, App Service la sirve mediante Node y que la demo no depende de API ni base de datos.

- [x] **Paso 3: Estilizar para escritorio y móvil**

En `src/app/app.css`, mantener colores y tipografía existentes, añadir una cuadrícula de tres tarjetas que pase a una columna en pantallas estrechas y dar estados de foco visibles al botón. El panel debe distinguirse visualmente y respetar el flujo de la página.

- [x] **Paso 4: Compilar y revisar la interacción**

Ejecutar `npm run build` y abrir la página local en el navegador. Comprobar que el panel inicia cerrado, abre y cierra con el botón, que el rótulo cambia, y que las tarjetas se muestran en escritorio y móvil.
