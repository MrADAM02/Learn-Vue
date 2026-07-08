<script setup lang="ts">
import { ref } from "vue";

const currentYear = new Date().getFullYear();
const year = ref(currentYear);

const author = ref("MrADAM02");
const href = ref("https://github.com/MrADAM02");
</script>

<template>
  <footer>
    Created by
    <a :href="href" target="_blank" rel="noopener noreferrer">
      <span>{{ author }}</span>
    </a>
    &copy; {{ year }}
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  margin: 0 auto;
  padding: 14px 0 6px;
  text-align: center;
  color: var(--text-secondary);
  font-size: 0.95rem;
  flex-wrap: wrap;
}

span {
  font-family: "Poppins", cursive;
  font-weight: 700;
  color: var(--accent-start);
}

a {
  text-decoration: none;
}

@media (max-width: 640px) {
  footer {
    font-size: 0.9rem;
  }
}
</style>
