<script setup lang="ts">
import { onMounted, ref } from "vue";

const emoji = ref("😀");
const isLoading = ref(false);
const selectedCategory = ref("all");
const categories = ["all", "smileys", "animals", "food", "travel", "activity"];

const decodeHtmlEntity = (entity: string) => {
  const parser = new DOMParser();
  const decoded = parser.parseFromString(entity, "text/html").documentElement
    .textContent;
  return decoded || entity;
};

const parseUnicodeEntry = (unicodeEntry: string) => {
  const codepoints = unicodeEntry
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part.replace(/^U\+/i, ""));

  try {
    return String.fromCodePoint(
      ...codepoints.map((code) => parseInt(code, 16)),
    );
  } catch {
    return unicodeEntry;
  }
};

const selectEmojiValue = (item: any) => {
  if (!item) return "😀";
  if (item?.unicode?.length) return parseUnicodeEntry(item.unicode[0]);
  if (item?.htmlCode?.length) return decodeHtmlEntity(item.htmlCode[0]);
  if (item?.char) return item.char;
  return "😀";
};

const fetchRandomEmoji = async () => {
  isLoading.value = true;

  try {
    const url =
      selectedCategory.value === "all"
        ? "https://emojihub.yurace.pro/api/random"
        : `https://emojihub.yurace.pro/api/all/category/${selectedCategory.value}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to load emoji");
    }

    const data = await response.json();
    const payload = Array.isArray(data) ? data : [data];
    const randomItem = payload[Math.floor(Math.random() * payload.length)];
    emoji.value = selectEmojiValue(randomItem);
  } catch {
    emoji.value = "😅";
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchRandomEmoji();
});
</script>

<template>
  <div class="emoji-page">
    <h2>Random Emoji</h2>
    <p>Pick a category and fetch a fun emoji from the API.</p>

    <div class="category-row">
      <button
        v-for="category in categories"
        :key="category"
        class="chip"
        :class="{ active: selectedCategory === category }"
        @click="selectedCategory = category"
      >
        {{ category }}
      </button>
    </div>

    <div class="emoji-card">
      <div class="emoji-display" v-if="isLoading">Loading...</div>
      <div class="emoji-display" v-else>{{ emoji }}</div>
      <button @click="fetchRandomEmoji">Get another emoji</button>
    </div>
  </div>
</template>

<style scoped>
.emoji-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  color: #f4f8fb;
  text-align: center;
}

.category-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

.chip {
  border: 0;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.16);
  color: #f4f8fb;
  cursor: pointer;
  text-transform: capitalize;
}

.chip.active {
  background: #ffffff;
  color: #406473;
}

.emoji-card {
  background: rgba(255, 255, 255, 0.16);
  padding: 24px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  min-width: min(320px, 90vw);
}

.emoji-display {
  font-size: 4rem;
  min-height: 4.5rem;
  transition: transform 0.2s ease;
}

.emoji-display:hover {
  transform: scale(1.08);
}

button {
  border: 0;
  padding: 10px 16px;
  border-radius: 999px;
  background: #ffffff;
  color: #406473;
  cursor: pointer;
  font-weight: 700;
}
</style>
