console.log("sw.js");
var cache_name = "service-worker-test-cache-v1";
var urlToCache = [
  '/',
  'bootstrap.min.css',
  'jquery.min.js',
  'bootstrap.min.js',
];
self.addEventListener('install', function(event){
  console.log("inside install event");
  
  event.waitUntil(
    caches.open(cache_name)
    .then(function(cache){
      console.log("inside cache");
      return cache.addAll(urlToCache);
    })
  );
  
  self.addEventListener('activate', function(event){
    console.log("inside activate event");
    
    event.waitUntil(
      caches.keys().then(function(cacheNames){
        return Promise.all(
          cacheNames.filter(function(cacheName){
            // Return true if you want to remove this cache,
            // but remember that caches are shared across
            // the whole origin
          }.map(function(cacheName){
            return caches.delete(cacheName);
          })
         );
        );
      });
    );
  });
  
  self.addEventListener('fetch', function(event){
    console.log("inside fetch event");
  });
  
});
