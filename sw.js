/* Levántate · v4.0 · Mantener en sincronía CACHE_NAME con el lanzamiento. */
const CACHE_NAME = 'levantate-v4-2026-11-07';
const CORE = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(CORE.map(file=>new Request(file,{cache:'reload'})))));
  // La nueva versión espera hasta que se confirme desde la app.
});
self.addEventListener('message',event=>{if(event.data?.type==='SKIP_WAITING')self.skipWaiting()});
self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(key=>key.startsWith('levantate-')&&key!==CACHE_NAME).map(key=>caches.delete(key)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET'||new URL(request.url).origin!==self.location.origin)return;
  if(request.mode==='navigate'){
    event.respondWith((async()=>{
      try{const response=await fetch(request,{cache:'no-store'});if(response.ok){const cache=await caches.open(CACHE_NAME);await cache.put('./index.html',response.clone());}return response}
      catch(e){return (await caches.match('./index.html')) || (await caches.match('./')) || Response.error()}
    })());
    return;
  }
  event.respondWith((async()=>{
    const cached=await caches.match(request);if(cached)return cached;
    try{return await fetch(request)}catch(e){return Response.error()}
  })());
});
