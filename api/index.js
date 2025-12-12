import fs from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default async function handler(req, res) {
  try {
    const url = req.url;

    let template, render;

    template = await fs.readFile(path.join(__dirname, '../dist/client/index.html'), 'utf-8');
    render = (await import('../dist/server/entry-server.js')).render;

    const appHtml = await render(url);
    const html = template.replace(`<div id="root"></div>`, `<div id="root">${appHtml}</div>`);

    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(html);
  } catch (e) {
    console.error(e.stack);
    res.status(500).send(e.stack);
  }
}
