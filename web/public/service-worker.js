// ensvia notificação
self.addEventListener('push', function (event) {
  const body = event.data?.text() ?? ''

  // é para o arquivo manter-se rodando e e sperar até receber uma notificação
  event.waitUntil(
    self.registration.showNotification('Habits', {
      body
    })
  )
})
