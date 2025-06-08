import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initializeApp } from 'firebase/app'

import App from './App.vue'
import router from './router'

initializeApp({
  apiKey: 'AIzaSyB-0doWEXiJdzBes0_CF20yOMD8Rm99LaM',
  authDomain: 'vue-xwear-users.firebaseapp.com',
  projectId: 'vue-xwear-users',
  storageBucket: 'vue-xwear-users.firebasestorage.app',
  messagingSenderId: '312306823553',
  appId: '1:312306823553:web:aca03689484cc62158f880',
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
