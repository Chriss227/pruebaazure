# Diseño: ampliar la página de demo Angular

## Intención

Hacer más informativa la página de prueba que ya existe, manteniéndola sencilla y útil para explicar Angular y Azure App Service.

## Alcance

- Añadir, debajo de la portada actual, tres tarjetas sobre Angular, Azure App Service y despliegues con GitHub Actions.
- Añadir un botón accesible para mostrar u ocultar un panel de detalles técnicos de esta demo.
- Mantener el contenido en español y el diseño adaptable a móvil.
- No añadir API, dependencias, datos de cuenta, ni cambios a la configuración de Azure.
- No afirmar que la publicación automática o el estado de Azure funcionan hasta que el usuario configure el flujo en su cuenta.

## Enfoques considerados

1. **Tarjetas informativas y botón de detalles (elegido):** explica las tres piezas de la demo y añade una interacción Angular útil.
2. **Tarjetas y botón que cambia el texto de estado:** más decorativo; aporta menos información sobre cómo está hecha la página.

Se elige el enfoque 1 para que la nueva interacción muestre información real sin agregar servicios.

## Implementación propuesta

Ampliar la plantilla y los estilos del componente Angular existente. Añadir una propiedad booleana y un método de alternancia al componente para controlar el panel; reflejar el estado con `aria-expanded` y cambiar el rótulo del botón entre “Ver detalles” y “Ocultar detalles”. Mantener el servidor y la configuración de publicación sin cambios.

## Comprobación

Compilar la aplicación y revisar en el navegador que las tarjetas se adapten a móvil y escritorio, y que el botón abra y cierre el panel. No añadir una suite automática.
