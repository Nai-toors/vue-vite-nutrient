<template>
  <div class="fullscreen-layout mt-5">
    <router-view />
  </div>
</template>

<script setup>
// Этот лэйаут просто рендерит вложенный роут
</script>

<style scoped>
.fullscreen-layout {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #fff; /* При необходимости можно изменить */
}
</style>
