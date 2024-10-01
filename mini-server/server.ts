import { port } from './config.ts';
import { DataJson } from './types.ts';

let data: Uint8Array;
try {
  data = await Deno.readFile('./mini-server/data.json');
} catch (error) {
  console.error('Error reading data file:', error);
}
const handler = (request: Request): Response => {
  const url = new URL(request.url);

  if (url.pathname === '/api/data') {
    const dataString = new TextDecoder().decode(data);
    const dataObject: DataJson = JSON.parse(dataString);

    return new Response(JSON.stringify(dataObject), {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response('Not Found', { status: 404 });
};

console.log(`HTTP webserver running. Access it at: http://localhost:${port}/`);
Deno.serve({ port }, handler);
