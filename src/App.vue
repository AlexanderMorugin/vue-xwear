<script>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore, collection, query, getDocs } from 'firebase/firestore'
import MainLayout from './layouts/MainLayout.vue'
import { useUserStore } from '@/stores/user-store'

export default {
  components: { MainLayout },
  setup() {
    const route = useRoute()
    const userStore = useUserStore()
    const db = getFirestore()

    // Функция получения с сервера профиля пользователя (Имя, фамилия и тд)
    const getProfile = async () => {
      const getData = query(collection(db, `users/${userStore.user.id}/profile`))
      const listDocs = await getDocs(getData)
      const profileData = listDocs.docs.map((doc) => doc.data())
      if (profileData[0]) {
        userStore.setUserProfile(profileData[0])
      }
    }

    // Функция получения с сервера избранных товаров пользователя и записью их в стор
    const getFavorite = async () => {
      const getData = query(collection(db, `users/${userStore.user.id}/favorite`))
      const listDocs = await getDocs(getData)
      userStore.addUserFavoriteFromServer(listDocs.docs.map((doc) => doc.data()))
    }

    // Слежение за наличием пользователя в приложении и избранными товарами
    onMounted(async () => {
      onAuthStateChanged(getAuth(), (user) => {
        if (user) {
          userStore.user.id = user.uid
          userStore.user.email = user.email
          getProfile()
          getFavorite()
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
