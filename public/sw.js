const CACHE_NAME = "holiday-itinerary-v1"
const STATIC_CACHE_URLS = ["/", "/manifest.json", "/icon-192.png", "/icon-512.png"]

// Install event - cache static assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("Caching static assets")
        return cache.addAll(STATIC_CACHE_URLS)
      })
      .then(() => {
        console.log("Service worker installed")
        return self.skipWaiting()
      }),
  )
})

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log("Deleting old cache:", cacheName)
              return caches.delete(cacheName)
            }
          }),
        )
      })
      .then(() => {
        console.log("Service worker activated")
        return self.clients.claim()
      }),
  )
})

// Fetch event - serve from cache, fallback to network
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return (
          response ||
          fetch(event.request).then((fetchResponse) => {
            // Cache successful responses
            if (fetchResponse.status === 200) {
              const responseClone = fetchResponse.clone()
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, responseClone)
              })
            }
            return fetchResponse
          })
        )
      })
      .catch(() => {
        // Fallback for offline scenarios
        if (event.request.destination === "document") {
          return caches.match("/")
        }
      }),
  )
})

// Handle app updates
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting()
  }
})
