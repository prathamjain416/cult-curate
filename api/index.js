export default async function handler(req, res) {
  try {
    const fs = await import('node:fs/promises');
    const path = await import('path');
    const { fileURLToPath } = await import('url');

    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const url = new URL(req.url, `http://${req.headers.host}`).pathname;

    const template = await fs.readFile(path.join(__dirname, '../dist/client/index.html'), 'utf-8');
    const { render } = await import('../dist/server/entry-server.js');

    const appHtml = await render(url);
    const html = template.replace(`<div id="root"></div>`, `<div id="root">${appHtml}</div>`);

    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
    res.status(200).send(html);
  } catch (e) {
    console.error('SSR Error:', e.stack);
    res.status(500).send(e.stack);
  }
}
