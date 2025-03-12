<script setup>
import { ref } from "vue";
const nutrientAppUrl = ref("http://localhost:8080");
</script>

<template>
  <div class="nutrient-container">
    <iframe
      :src="nutrientAppUrl"
      class="nutrient-iframe"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </div>
</template>

<style scoped>
.nutrient-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.nutrient-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: transparent;
}
</style>
