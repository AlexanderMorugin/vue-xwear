<script>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import MainLayout from './layouts/MainLayout.vue'
import { useUserStore } from '@/stores/user-store'

export default {
  components: { MainLayout },
  setup() {
    const route = useRoute()
    const userStore = useUserStore()

    // Слежение за наличием пользователя в приложении
    onMounted(() => {
      onAuthStateChanged(getAuth(), (user) => {
        if (user) {
          userStore.user.id = user.uid
          userStore.user.email = user.email

          console.log(user)
        } else {
          userStore.user.id = ''
        }
      })
    })

    return {
      layout: computed(() => route.meta.layout),
    }
  },
}
</script>

<template>
  <component :is="layout + '-layout'" v-if="layout" />
</template>

<style scoped></style>
