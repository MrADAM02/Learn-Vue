<script setup lang="ts">
import { computed } from "vue";
import { useRoute, RouterLink } from "vue-router";

const props = defineProps<{ isDarkMode: boolean }>();
const emit = defineEmits<{
  (event: "toggle-theme"): void;
}>();
const route = useRoute();

const toggleTheme = () => emit("toggle-theme");

const pageTitles: Record<string, string> = {
  "/": "Quote generator",
  "/emoji": "Emoji generator",
  "/logo": "Logo generator",
};

const title = computed(() => pageTitles[route.path] ?? "App generator");

const navItems = [
  { label: "Quotes", to: "/" },
  { label: "Emoji", to: "/emoji" },
  { label: "Logos", to: "/logo" },
];

const isActive = (path: string) => route.path === path;
</script>

<template>
  <header class="topbar">
    <div class="brand-block">
      <div class="brand-mark">✦</div>
      <div class="brand-details">
        <p class="eyebrow">Developer Playground</p>
        <h1>{{ title }}</h1>
      </div>
    </div>

    <div class="nav-group">
      <nav class="nav-links" aria-label="Primary">
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="nav-link"
          :class="{ active: isActive(item.to) }"
        >
          {{ item.label }}
        </RouterLink>
      </nav>

      <button class="theme-toggle" @click="toggleTheme">
        {{ props.isDarkMode ? "☀️ Light" : "🌙 Dark" }}
      </button>
    </div>
  </header>
</template>

<style scoped>
.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: clamp(16px, 2.5vw, 22px) clamp(16px, 3vw, 24px);
  border-radius: 24px;
  background: var(--surface-strong);
  border: 1px solid var(--border-soft);
  box-shadow: var(--shadow-sm);
  backdrop-filter: blur(18px);
}

.brand-block {
  display: flex;
  align-items: center;
  gap: 14px;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 16px;
  font-size: 1.2rem;
  background: linear-gradient(135deg, var(--accent-start), var(--accent-end));
  color: white;
  box-shadow: 0 14px 28px rgba(56, 189, 248, 0.18);
}

.brand-details {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.eyebrow {
  margin: 0;
  font-size: 0.72rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: var(--accent-start);
}

h1 {
  margin: 0;
  font-size: 1.2rem;
  color: var(--text-primary);
}

.nav-group {
  display: flex;
  align-items: center;
  gap: 12px;
}

.nav-links {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.nav-link {
  padding: 10px 14px;
  border-radius: 999px;
  font-size: 0.94rem;
  font-weight: 700;
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.2s ease;
}

.nav-link:hover {
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.12);
}

.nav-link.active {
  color: var(--button-text);
  background: linear-gradient(135deg, var(--accent-start), var(--accent-end));
}

.theme-toggle {
  border: 0;
  padding: 10px 16px;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.08);
  color: var(--text-primary);
  font-size: 0.94rem;
  font-weight: 700;
  cursor: pointer;
  transition:
    background 0.2s ease,
    transform 0.2s ease;
}

.dark-theme .theme-toggle {
  background: rgba(255, 255, 255, 0.14);
  color: var(--button-text);
}

.theme-toggle:hover {
  transform: translateY(-1px);
}

@media (max-width: 720px) {
  .topbar {
    flex-direction: column;
    align-items: stretch;
  }

  .nav-group {
    flex-direction: column;
    align-items: stretch;
  }

  .nav-links {
    justify-content: center;
  }

  .theme-toggle {
    width: 100%;
  }
}
</style>
