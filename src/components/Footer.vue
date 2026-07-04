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
    <a :href target="_blank" rel="noopener noreferrer"
      ><span>
        {{ author }}
      </span>
    </a>
    &copy; {{ year }}
  </footer>
</template>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
  margin: 0 auto;
  text-align: center;
  color: #cdd6d9;
  padding-bottom: 20px;
}

span {
  font-family: cursive;
}

a {
  color: white;
}
</style>
