/*
 * Specifying name of cache store to which we map our resources
 * Mension resources we will need to cache on install
 * Install the the serviceWorker to cache resources in resourceToCache
 * fetch cached resources to make things work even when user is offline
*/
const CACHE_NAME = 'cache-icons';

const resourceToCache =
 ['/index.html','/icons.png','/main.js'];



 self.addEventListener('install',(event)=>{
  console.log('serviceworker is on to cache the resources');
  event.waitUntil(
   caches.open(CACHE_NAME)
   .then((cache)=>{
     return cache.addAll(resourceToCache);
   })
  )
 })



 self.addEventListener('fetch',(event)=>{
   if(event.request.mode !== 'navigate')
   return null;
   event.respondWith(
     fetch(event.request)
     .catch(()=>{
       return caches.open(CACHE_NAME)
       .then((cache)=>{
         return cache.match(event.request);
       })
     })
   )
 })
