import './assets/main.css'

import { ViteSSG } from 'vite-ssg/single-page'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'


export const createApp = ViteSSG(
  App,
  (ctx) => {
    const pinia = createPinia()
    if (ctx.isClient) {
      pinia.use(piniaPluginPersistedstate)
    }
    ctx.app.use(pinia)
  },
)
