<script setup lang="ts">
import { ref } from "vue";
import { RouterView, useRoute } from "vue-router";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Main from "@/components/Main.vue";

const route = useRoute();
const mainRef = ref<{
  generateQuote: () => void;
  toggleTheme: () => void;
} | null>(null);

const handleGenerate = () => {
  mainRef.value?.generateQuote();
};

const handleToggleTheme = () => {
  mainRef.value?.toggleTheme();
};
</script>

<template>
  <Header @generate="handleGenerate" @toggle-theme="handleToggleTheme" />
  <main class="app-shell">
    <RouterView v-if="route.path === '/emoji'" />
    <Main v-else ref="mainRef" />
  </main>
  <Footer />
</template>

<style scoped>
.app-shell {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 0 24px;
}
</style>
