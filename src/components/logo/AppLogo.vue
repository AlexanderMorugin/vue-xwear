<template>
  <router-link to="/" v-slot="{ navigate }" custom>
    <img :src="logoUrl" alt="Логотип" :class="logoClass" @click="navigate" />
  </router-link>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps(['place'])

let logoUrl = ref('')
let logoClass = ref('')

if (props.place === 'footer') {
  logoUrl.value = '/logo/logo-grey.png'
  logoClass.value = 'logoFooter'
} else {
  logoUrl.value = '/logo/logo.png'
  logoClass.value = 'logoHeader'
}
</script>

<style scoped>
.logoHeader {
  width: 84px;
  cursor: pointer;
}

@media (max-width: 768px) {
  logoHeader {
    width: 68px;
  }
}

.logoFooter {
  width: 99px;
  cursor: pointer;
}
</style>
