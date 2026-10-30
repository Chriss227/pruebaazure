const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');

const distDirectory = path.resolve(__dirname, 'dist', 'azure-demo');
const candidateRoots = [path.join(distDirectory, 'browser'), distDirectory];
const buildRoot = candidateRoots.find((directory) =>
  fs.existsSync(path.join(directory, 'index.html'))
);

if (!buildRoot) {
  console.error('No se encontró dist/azure-demo/index.html. Ejecuta npm run build antes de iniciar el servidor.');
  process.exit(1);
}

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
};

function sendText(response, statusCode, message) {
  response.writeHead(statusCode, { 'Content-Type': 'text/plain; charset=utf-8' });
  response.end(message);
}

function resolveRequestPath(requestPath) {
  const relativePath = path.normalize(requestPath).replace(/^[/\\]+/, '');
  const filePath = path.resolve(buildRoot, relativePath);
  const relativeToRoot = path.relative(buildRoot, filePath);

  if (relativeToRoot.startsWith('..') || path.isAbsolute(relativeToRoot)) {
    return null;
  }

  return filePath;
}

const server = http.createServer((request, response) => {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.setHeader('Allow', 'GET, HEAD');
    sendText(response, 405, 'Método no permitido');
    return;
  }

  let requestPath;
  try {
    requestPath = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
  } catch {
    sendText(response, 400, 'Ruta no válida');
    return;
  }

  const filePath = resolveRequestPath(requestPath);
  if (!filePath) {
    sendText(response, 400, 'Ruta no válida');
    return;
  }

  let resolvedPath = filePath;
  if (fs.existsSync(resolvedPath) && fs.statSync(resolvedPath).isDirectory()) {
    resolvedPath = path.join(resolvedPath, 'index.html');
  }

  const isAssetRequest = path.extname(requestPath) !== '';
  if (!fs.existsSync(resolvedPath) && !isAssetRequest) {
    resolvedPath = path.join(buildRoot, 'index.html');
  }

  if (!fs.existsSync(resolvedPath) || !fs.statSync(resolvedPath).isFile()) {
    sendText(response, 404, 'No encontrado');
    return;
  }

  const contentType = mimeTypes[path.extname(resolvedPath).toLowerCase()] || 'application/octet-stream';
  response.writeHead(200, { 'Content-Type': contentType });

  if (request.method === 'HEAD') {
    response.end();
    return;
  }

  fs.createReadStream(resolvedPath).pipe(response);
});

const port = Number(process.env.PORT) || 8080;
server.listen(port, '0.0.0.0', () => {
  console.log(`Azure Angular Demo escuchando en el puerto ${port}`);
});
