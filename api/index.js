import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export default async function handler(req, res) {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`).pathname;

    const htmlPath = join(process.cwd(), 'dist/client/index.html');
    const template = await readFile(htmlPath, 'utf-8');
    const { render } = await import('../dist/server/entry-server.js');

    const appHtml = await render(url);
    const html = template.replace(`<div id="root"></div>`, `<div id="root">${appHtml}</div>`);

    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
    res.status(200).send(html);
  } catch (e) {
    console.error('SSR Error:', e.message);
    res.status(500).send(`<pre>${e.message}\n${e.stack}</pre>`);
  }
}
