<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const title = ref("Quote generator");

const navItems = [
  { label: "Quotes", to: "/" },
  { label: "Emoji", to: "/emoji" },
];

const isActive = (path: string) => route.path === path;
</script>

<template>
  <header class="topbar">
    <div class="brand-block">
      <div class="brand-mark">✦</div>
      <div>
        <p class="eyebrow">Developer inspiration</p>
        <h1>{{ title }}</h1>
      </div>
    </div>

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
  </header>
</template>

<style scoped>
.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
  padding: 16px 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  background: rgba(15, 23, 42, 0.75);
  box-shadow: 0 12px 40px rgba(2, 8, 23, 0.25);
  backdrop-filter: blur(14px);
}

.brand-block {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  font-size: 1.1rem;
  background: linear-gradient(135deg, #8b5cf6, #38bdf8);
  color: white;
  box-shadow: 0 10px 25px rgba(56, 189, 248, 0.2);
}

.eyebrow {
  margin: 0 0 2px;
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #7dd3fc;
}

h1 {
  margin: 0;
  font-size: 1.15rem;
  color: #f8fafc;
}

.nav-links {
  display: flex;
  gap: 8px;
}

.nav-link {
  padding: 8px 12px;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 600;
  color: #cbd5e1;
  text-decoration: none;
  transition: all 0.2s ease;
}

.nav-link:hover {
  color: #f8fafc;
  background: rgba(255, 255, 255, 0.08);
}

.nav-link.active {
  color: #0f172a;
  background: linear-gradient(135deg, #f8fafc, #cbd5e1);
  box-shadow: 0 8px 20px rgba(248, 250, 252, 0.15);
}

@media (max-width: 640px) {
  .topbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .nav-links {
    width: 100%;
  }

  .nav-link {
    flex: 1;
    text-align: center;
  }
}
</style>
