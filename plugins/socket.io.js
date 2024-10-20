import io from 'socket.io-client'

const socket = io({
  path: '/api/socket.io/',
})

export default defineNuxtPlugin(() => {
  return {
    provide: {
      socket,
    },
  }
})
