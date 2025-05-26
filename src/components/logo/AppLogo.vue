<template>
  <router-link
    to="/"
    v-slot="{ navigate }"
    custom
    class="logo"
    :class="props.place === 'footer' ? 'logo-footer-mobile' : ''"
  >
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
.logo {
  grid-area: logo;
}
@media (max-width: 767px) {
  .logo {
    margin-left: 60px;
  }
}
.logo-footer-mobile {
  display: flex;
  justify-self: center;
  margin-left: 0;
}
.logoHeader {
  width: 84px;
  cursor: pointer;
}

@media (max-width: 767px) {
  .logoHeader {
    width: 68px;
  }
}

.logoFooter {
  width: 99px;
  cursor: pointer;
}
</style>
