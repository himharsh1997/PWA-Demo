/*
 * Specifying name of cache store to which we map our resources
 * Mension resources we will need to cache on install
 * Install the the serviceWorker to cache resources in resourceToCache
 * fetch cached resources to make things work even when user is offline
*/
const CACHE_NAME = 'cache-icons-v1';

const resourceToCache =
 [ '/index.html',
   '/icons.png',
   '/manifest.json',
   '/main.js',
   '/main.css',
   '/materialize.min.css',
   '/materialize.min.js',
   '/materialize.css',
   '/materialize.js'
 ];


 self.addEventListener('install',(event)=>{
  console.log('serviceworker is on to cache the resources');
  event.waitUntil(
   caches.open(CACHE_NAME)
   .then((cache)=>{
     return cache.addAll(resourceToCache);
   })
  )
 })


 self.addEventListener('fetch', (event) => {
   console.info('Event: Fetch');

   //Tell the browser to wait for newtwork request and respond with below
   event.respondWith(
     //If request is already in cache, return it
     caches.match(event.request).then((response) => {
       if (response) {
         return response;
       }

       //if request is not cached or navigation preload response, add it to cache
       return fetch(event.request).then((response) => {
         var responseInCache = response.clone();
         caches.open(CACHE_NAME).then((cache) => {
             cache.put(request, responseInCache).catch((err) => {
               console.warn(request.url + ': ' + err.message);
             });
           });

         return response;
       });
     })
   );
 });
