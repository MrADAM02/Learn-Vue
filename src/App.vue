<script setup lang="ts">
import { computed, ref } from "vue";
import { RouterView } from "vue-router";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

const isDarkMode = ref(false);
const themeClass = computed(() => (isDarkMode.value ? "dark-theme" : "light-theme"));

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
};
</script>

<template>
  <div :class="['theme-shell', themeClass]">
    <div class="app-frame">
      <Header :isDarkMode="isDarkMode" @toggle-theme="toggleTheme" />
      <main class="app-shell">
        <RouterView v-slot="{ Component }">
          <component :is="Component" :is-dark-mode="isDarkMode" />
        </RouterView>
      </main>
      <Footer />
    </div>
  </div>
</template>

<style scoped>
.theme-shell {
  min-height: 100vh;
  padding: clamp(16px, 3vw, 24px);
  transition:
    background 0.25s ease,
    color 0.25s ease;
}

.app-frame {
  max-width: 1180px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.app-shell {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 8px 0 4px;
}

.light-theme {
  background: var(--page-bg);
  color: var(--text-primary);
}

.dark-theme {
  background: var(--page-bg);
  color: var(--text-primary);
}
</style>
