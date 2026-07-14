<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

const props = defineProps<{ isDarkMode: boolean }>();
const themeClass = computed(() => (props.isDarkMode ? "dark" : "light"));

const emoji = ref("😀");
const isLoading = ref(false);
const copyMessage = ref("Copy emoji");

const decodeHtmlEntity = (entity: string) => {
  const parser = new DOMParser();
  const decoded = parser.parseFromString(entity, "text/html").documentElement.textContent;
  return decoded || entity;
};

const parseUnicodeEntry = (unicodeEntry: string) => {
  const codepoints = unicodeEntry
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part.replace(/^U\+/i, ""));

  try {
    return String.fromCodePoint(...codepoints.map((code) => parseInt(code, 16)));
  } catch {
    return unicodeEntry;
  }
};

type EmojiHubEntry = {
  unicode?: string[];
  htmlCode?: string[];
  char?: string;
};

const selectEmojiValue = (item: EmojiHubEntry | null | undefined) => {
  if (!item) return "😀";

  const unicode = item.unicode?.[0];
  if (unicode) return parseUnicodeEntry(unicode);

  const htmlCode = item.htmlCode?.[0];
  if (htmlCode) return decodeHtmlEntity(htmlCode);

  if (item.char) return item.char;
  return "😀";
};

const fetchRandomEmoji = async () => {
  isLoading.value = true;

  try {
    const response = await fetch("https://emojihub.yurace.pro/api/random");

    if (!response.ok) {
      throw new Error("Failed to load emoji");
    }

    const data = await response.json();
    emoji.value = selectEmojiValue(data);
  } catch {
    emoji.value = "😅";
  } finally {
    isLoading.value = false;
  }
};

const copyEmoji = async () => {
  try {
    await navigator.clipboard.writeText(emoji.value);
    copyMessage.value = "Copied!";
    window.setTimeout(() => {
      copyMessage.value = "Copy emoji";
    }, 1200);
  } catch {
    copyMessage.value = "Copy failed";
  }
};

onMounted(() => {
  fetchRandomEmoji();
});
</script>

<template>
  <div :class="['page-shell', 'emoji-page', themeClass]">
    <div class="page-heading">
      <h2 class="page-title">Random Emoji</h2>
      <p class="page-subtitle">Fetch a fun emoji from the API, then copy it to your clipboard.</p>
    </div>

    <div class="page-card emoji-card">
      <div class="emoji-display" v-if="isLoading">
        <div class="emoji-skeleton" aria-hidden="true">
          <div class="emoji-skeleton-shape"></div>
          <div class="emoji-skeleton-line"></div>
          <div class="emoji-skeleton-line short"></div>
        </div>
      </div>
      <div class="emoji-display" v-else>{{ emoji }}</div>

      <div class="emoji-actions">
        <button @click="fetchRandomEmoji" class="button-secondary">Get another emoji</button>
        <button @click="copyEmoji" class="button-primary">
          {{ copyMessage }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.emoji-page {
  max-width: 640px;
}

.emoji-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  min-width: min(320px, 90vw);
}

.emoji-display {
  font-size: clamp(4rem, 8vw, 6.5rem);
  min-height: 5rem;
  letter-spacing: 0.02em;
  transition: transform 0.2s ease;
}

.emoji-display:hover {
  transform: scale(1.08);
}

.emoji-skeleton {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: min(220px, 100%);
  padding: 18px 20px;
  border-radius: 24px;
  background: linear-gradient(90deg, #e2e8f0 25%, #f1f5f9 37%, #e2e8f0 63%);
  background-size: 400% 100%;
  animation: shimmer 1.2s ease infinite;
}

.emoji-skeleton-shape {
  width: 72px;
  height: 72px;
  border-radius: 999px;
  background: rgba(148, 163, 184, 0.35);
}

.emoji-skeleton-line {
  width: 100%;
  height: 10px;
  border-radius: 999px;
  background: rgba(148, 163, 184, 0.35);
}

.emoji-skeleton-line.short {
  width: 60%;
}

@keyframes shimmer {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
}

.emoji-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}

.emoji-actions button {
  flex: 1 1 auto;
  min-width: 140px;
}

@media (max-width: 720px) {
  .emoji-card {
    min-width: 100%;
  }

  .emoji-actions button {
    flex-basis: 100%;
  }
}
</style>
