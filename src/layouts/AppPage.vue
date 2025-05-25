<template>
  <main class="main">
    <slot />
  </main>
</template>

<style scoped>
.main {
  width: 100%;
  max-width: 1380px;
  margin: 0 auto;
  padding: 48px 10px 100px 10px;
}

@media (max-width: 1023px) {
  .main {
    padding: 28px 50px 80px 50px;
  }
}

@media (max-width: 767px) {
  .main {
    padding: 16px 10px 80px 10px;
  }
}
</style>
