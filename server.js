import fs from 'node:fs/promises';
import express from 'express';
import compression from 'compression';
import sirv from 'sirv';
import * as vite from 'vite';

const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 5173;

async function createServer() {
  const app = express();
  app.use(compression());

  let viteInstance;
  if (!isProduction) {
    viteInstance = await vite.createServer({
      server: { middlewareMode: true },
      appType: 'custom'
    });
    app.use(viteInstance.middlewares);
  } else {
    app.use(sirv('dist/client', { gzip: true }));
  }

  app.use('*', async (req, res) => {
    try {
      const url = req.originalUrl;
      let template, render;

      if (!isProduction) {
        template = await fs.readFile('index.html', 'utf-8');
        template = await viteInstance.transformIndexHtml(url, template);
        render = (await viteInstance.ssrLoadModule('/src/entry-server.tsx')).render;
      } else {
        template = await fs.readFile('dist/client/index.html', 'utf-8');
        render = (await import('./dist/server/entry-server.js')).render;
      }

      const appHtml = await render(url);
      const html = template.replace(`<div id="root"></div>`, `<div id="root">${appHtml}</div>`);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      if (!isProduction) {
        viteInstance.ssrFixStacktrace(e);
      }
      console.log(e.stack);
      res.status(500).end(e.stack);
    }
  });

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

createServer();