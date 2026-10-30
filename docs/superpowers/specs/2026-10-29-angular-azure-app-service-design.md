# Diseño: página de prueba Angular para Azure App Service

## Intención

Crear una página web neutral y sencilla en Angular que sirva para comprobar una publicación de prueba en Azure App Service. El proyecto actual no contiene una aplicación; `sources/` es material sincronizado de solo lectura.

## Objetivos

- Mostrar una página de bienvenida clara, adaptable a móvil y escritorio.
- Usar Angular como framework de la interfaz.
- Dejar el proyecto preparado para compilarse y servirse como sitio web en Azure App Service.
- Incluir instrucciones breves de publicación y una verificación sencilla de que la página está disponible.

## Fuera de alcance

- No crear ni publicar recursos en una suscripción Azure.
- No agregar API, base de datos, autenticación ni contenido dinámico.
- No editar ni reorganizar archivos bajo `sources/`.

## Enfoques considerados

1. **Angular estático servido por App Service (supuesto recomendado):** compilar Angular y servir los archivos web desde Node en App Service. Es suficiente para una página de demostración y conserva el destino solicitado.
2. **Angular con renderizado del lado del servidor:** añadir un servidor de renderizado para cada página. No aporta valor a esta demo estática y aumenta la configuración de publicación.

Se propone el enfoque 1 por simplicidad y porque encaja con “solo página web”.

## Decisiones y supuestos

- Contenido neutral de demostración, sin identidad institucional ni funciones adicionales.
- Diseño limpio, con encabezado, mensaje principal y un pequeño indicador visual de que el sitio está listo.
- Azure App Service será el destino; la creación del recurso y el despliegue real requieren acceso a la suscripción y quedan fuera del código del sitio.

## Trabajo por realizar

Crear la aplicación Angular, configurar el servidor web para servir su compilación en App Service, documentar los pasos básicos de despliegue y revisar que el proyecto compile.
