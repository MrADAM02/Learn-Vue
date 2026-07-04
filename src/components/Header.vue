<script setup lang="ts">
import { ref } from "vue";

const title = ref("Quote generator");
</script>

<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<style scoped>
header {
  color: #ccd6d9;
  margin-bottom: 25px;
}
</style>
