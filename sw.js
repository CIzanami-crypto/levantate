/* Yuno 8.19 · Actualiza el nombre de caché en cada nueva publicación */
const CACHE_NAME='yuno-v8-19-silean-dialogos-2026-11-11';
const CORE=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./silean-levantate.webp','./silan-serena.webp','./silan-alegre.webp','./silan-orgullosa.webp','./silan-protectora.webp','./silan-cariñosa.webp','./silan-juguetona.webp','./princesa-serena.webp','./princesa-alegre.webp','./princesa-sorprendida.webp','./princesa-pensativa.webp','./princesa-cariñosa.webp','./princesa-confiada.webp','./compa-radiante.webp','./compa-curiosa.webp','./compa-motivada.webp','./compa-serena.webp','./compa-cariñosa.webp','./compa-juguetona.webp'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(CORE.map(path=>new Request(path,{cache:'reload'})))))});
self.addEventListener('message',event=>{if(event.data&&event.data.type==='SKIP_WAITING')self.skipWaiting()});
self.addEventListener('activate',event=>{event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(key=>(key.startsWith('levantate-')||key.startsWith('yuno-')||key.startsWith('juno-'))&&key!==CACHE_NAME).map(key=>caches.delete(key)));await self.clients.claim()})())});
self.addEventListener('fetch',event=>{
 const request=event.request;
 if(request.method!=='GET'||new URL(request.url).origin!==self.location.origin)return;
 if(request.mode==='navigate'){
  event.respondWith((async()=>{try{const fresh=await fetch(request,{cache:'no-store'});if(fresh.ok){const cache=await caches.open(CACHE_NAME);await cache.put('./index.html',fresh.clone())}return fresh}catch(err){return(await caches.match('./index.html'))||(await caches.match('./'))||Response.error()}})());return;
 }
 event.respondWith((async()=>{const cached=await caches.match(request);if(cached)return cached;try{return await fetch(request)}catch(err){return Response.error()}})());
});
// Preparado para Web Push futuro. GitHub Pages no es un servicio emisor.
self.addEventListener('push',event=>{
 let payload={};try{payload=event.data?.json()||{}}catch(e){payload={body:event.data?.text()||''}}
 const title=typeof payload.title==='string'?payload.title:'Yuno · Una voz a tu lado';
 const body=typeof payload.body==='string'?payload.body:'Tu historia todavía tiene capítulos hermosos por descubrir.';
 event.waitUntil(self.registration.showNotification(title,{body,icon:'./icon-192.png',badge:'./icon-96.png',tag:payload.tag||'yuno-push',data:{url:self.registration.scope}}));
});
self.addEventListener('notificationclick',event=>{
 event.notification.close();
 event.waitUntil((async()=>{const windows=await clients.matchAll({type:'window',includeUncontrolled:true});for(const win of windows){if(win.url.startsWith(self.registration.scope)&&'focus' in win){await win.focus();return}}await clients.openWindow(self.registration.scope)})());
});
