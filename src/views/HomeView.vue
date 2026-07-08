<script setup lang="ts">
import Main from "@/components/Main.vue";

const props = defineProps<{ isDarkMode: boolean }>();
</script>

<template>
  <div class="page-shell home-page">
    <div class="page-heading">
      <h2 class="page-title">Quote Generator</h2>
      <p class="page-subtitle">
        Explore programming quotes and discover a calmer, more polished way to
        browse inspiration.
      </p>
    </div>

    <Main :is-dark-mode="props.isDarkMode" />
  </div>
</template>

<style scoped>
.home-page {
  max-width: 860px;
  gap: 20px;
}
</style>
