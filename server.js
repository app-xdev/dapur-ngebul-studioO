import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = 5000;

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css',
  '.js':   'application/javascript',
  '.ico':  'image/x-icon',
  '.png':  'image/png',
  '.svg':  'image/svg+xml',
  '.xml':  'application/xml',
  '.txt':  'text/plain',
  '.json': 'application/json',
};

http.createServer(function(req, res) {
  let urlPath = req.url.split('?')[0];
  if (urlPath === '/') urlPath = '/index.html';

  const filePath = path.join(__dirname, urlPath);
  const ext = path.extname(filePath);
  const contentType = mime[ext] || 'text/plain';

  fs.readFile(filePath, function(err, data) {
    if (err) {
      fs.readFile(path.join(__dirname, 'index.html'), function(e, d) {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(d || '404 Not Found');
      });
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
}).listen(PORT, '0.0.0.0', function() {
  console.log('Server running at http://0.0.0.0:' + PORT);
});
