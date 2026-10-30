# Angular en Azure App Service

Página web sencilla en Angular para comprobar una publicación de prueba en Azure App Service. No utiliza API, base de datos ni servicios externos.

## Requisitos

- Node.js 24.15 o posterior dentro de la línea 24.
- npm.

## Ejecutar localmente

```powershell
npm install
npm run build
npm start
```

Abre `http://localhost:8080`. Para desarrollo con recarga automática, ejecuta `npx ng serve` y abre `http://localhost:4200`.

## Publicar en Azure App Service

1. En Azure Portal, crea una **Aplicación web (Web App)** con publicación de **Código**, sistema operativo **Linux** y pila **Node 24 LTS**.
2. En **Configuración > Configuración general**, establece el comando de inicio como `npm start`.
3. En **Configuración > Variables de entorno**, agrega `SCM_DO_BUILD_DURING_DEPLOYMENT=true` para que App Service instale las dependencias y ejecute `npm run build` durante la publicación.
4. Desde la carpeta del proyecto, crea el ZIP con PowerShell. `package-lock.json` se crea al ejecutar `npm install`:

   ```powershell
   Compress-Archive -Path package.json,package-lock.json,angular.json,tsconfig.json,tsconfig.app.json,server.js,src -DestinationPath app.zip -Force
   ```

5. Inicia sesión con `az login` y publica el ZIP:

   ```powershell
   az webapp deploy --resource-group "<grupo-de-recursos>" --name "<nombre-de-la-app>" --src-path ".\app.zip" --type zip
   ```

6. Abre la URL `https://<nombre-de-la-app>.azurewebsites.net`.

El servidor escucha automáticamente en el puerto que App Service indique mediante `PORT`. Estas instrucciones preparan el sitio; no crean recursos ni publican en una suscripción Azure.
