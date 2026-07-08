<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import { programmingQuotes } from "@/data/programmingQuotes";

const props = defineProps<{ isDarkMode: boolean }>();

const initialQuote = programmingQuotes[0] ?? {
  quote: "Keep coding.",
  author: "Developer",
};
const quote = ref(initialQuote.quote);
const author = ref(initialQuote.author);
const isTransitioning = ref(false);
const copied = ref(false);

const themeClass = computed(() => (props.isDarkMode ? "dark" : "light"));

const generateQuote = () => {
  isTransitioning.value = true;

  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * programmingQuotes.length);
    const selectedQuote = programmingQuotes[randomIndex] ?? initialQuote;

    quote.value = selectedQuote.quote;
    author.value = selectedQuote.author;
    isTransitioning.value = false;
  }, 180);
};

const copyQuote = async () => {
  const textToCopy = `"${quote.value}" - ${author.value}`;

  try {
    await navigator.clipboard.writeText(textToCopy);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 1500);
  } catch {
    copied.value = false;
  }
};

onMounted(() => {
  generateQuote();
});
</script>

<template>
  <main :class="['page-shell', 'quote-shell', themeClass]">
    <div class="quote-header">
      <span class="badge">Developer Inspiration</span>
    </div>

    <section class="quote-card" aria-live="polite">
      <p :class="{ transitioning: isTransitioning }">{{ quote }}</p>
      <span>{{ author }}</span>
    </section>

    <div class="footer-row">
      <div class="actions">
        <button class="button-secondary" @click="copyQuote">
          {{ copied ? "Copied!" : "Copy" }}
        </button>
        <button class="button-primary" @click="generateQuote">Generate</button>
      </div>
    </div>
  </main>
</template>

<style scoped>
.quote-shell {
  max-width: 760px;
  gap: 20px;
}

.quote-header {
  width: 100%;
  display: flex;
  justify-content: flex-start;
}

.badge {
  background: linear-gradient(135deg, var(--accent-start), var(--accent-end));
  color: white;
  padding: 10px 16px;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.quote-card {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 28px 24px;
  border-radius: 24px;
  background: var(--surface-soft);
  border: 1px solid var(--border-soft);
  min-height: 180px;
  justify-content: center;
}

p {
  font-weight: 700;
  font-style: italic;
  font-size: clamp(1.1rem, 2.2vw, 1.5rem);
  line-height: 1.7;
  text-align: center;
  color: inherit;
  opacity: 1;
  transition: opacity 0.2s ease;
}

p.transitioning {
  opacity: 0.4;
}

p::before {
  content: '"';
}

p::after {
  content: '"';
}

span {
  align-self: end;
  color: var(--text-secondary);
  font-weight: 700;
  font-size: 0.95rem;
}

.footer-row {
  width: 100%;
  display: flex;
  justify-content: center;
}

.actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}

.actions button {
  flex: 0 1 auto;
}

@media (max-width: 720px) {
  .quote-header {
    justify-content: center;
  }

  .quote-card {
    padding: 22px 18px;
  }

  .actions {
    width: 100%;
  }

  .actions button {
    flex: 1 1 140px;
  }
}
</style>
