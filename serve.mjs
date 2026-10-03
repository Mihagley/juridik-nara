import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
const root=new URL('./dist/',import.meta.url);
createServer(async(req,res)=>{try{const path=new URL(req.url,'http://localhost').pathname;const name=path==='/'?'index.html':path.slice(1);if(!['index.html','app.js','style.css','family-photo.jpg','first-home-photo.jpg','future-photo.jpg'].includes(name)){res.writeHead(404);res.end();return}res.setHeader('Content-Type',name.endsWith('.jpg')?'image/jpeg':name.endsWith('.js')?'text/javascript; charset=utf-8':name.endsWith('.css')?'text/css; charset=utf-8':'text/html; charset=utf-8');res.end(await readFile(fileURLToPath(new URL(name,root))))}catch{res.writeHead(404);res.end()}}).listen(4173,'127.0.0.1',()=>console.log('Livsklart: http://localhost:4173'));
