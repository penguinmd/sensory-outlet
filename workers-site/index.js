// Worker for static site hosting

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // Just pass through to the static assets
  return fetch(request)
}