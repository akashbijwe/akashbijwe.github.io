console.log("sw.js");
var cache_name = "service-worker-test-cache";
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
  });
  
  self.addEventListener('fetch', function(event){
    console.log("inside fetch event");
  });
  
});
