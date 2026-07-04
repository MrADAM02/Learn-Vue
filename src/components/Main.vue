<script lang="ts" setup>
import { ref } from "vue";

const quote = ref("First, solve the problem. Then, write the code.");
const author = ref("John Johnson");

const isButtonDisabled = ref(true);
</script>

<template>
  <main>
    <section>
      <p>{{ quote }}</p>
      <span>{{ author }}</span>
    </section>
    <button>Another!</button>
    <button :disabled="isButtonDisabled">Share</button>
  </main>
</template>

<style scoped>
main {
  background: #ccd6d9;
  width: 100%;
  max-width: 90%;
  border-radius: 0 15px 0 15px;
  padding: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

section {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 25px;
}

p {
  font-weight: bold;
  font-style: italic;
}

p::before {
  content: '"';
}

p::after {
  content: '"';
}

span {
  align-self: end;
  color: #406473;
}

span ::before {
  content: "- ";
}

button {
  background: #406473;
  color: white;
  border: 0;
  padding: 10px;
  font-size: 1.2rem;
  border-radius: 0 5px 0 5px;
  font-weight: bold;
  margin-top: 20px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

button:hover {
  transform: scale(1.05);
}

button:disabled {
  background: #406473;
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
