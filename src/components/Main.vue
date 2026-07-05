<script lang="ts" setup>
import { computed, ref } from "vue";
import { programmingQuotes } from "@/data/programmingQuotes";

const initialQuote = programmingQuotes[0] ?? {
  quote: "Keep coding.",
  author: "Developer",
};
const quote = ref(initialQuote.quote);
const author = ref(initialQuote.author);
const isDarkMode = ref(false);
const isTransitioning = ref(false);
const copied = ref(false);

const themeClass = computed(() => (isDarkMode.value ? "dark" : "light"));

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

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
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

generateQuote();
</script>

<template>
  <main :class="themeClass">
    <div class="top-row">
      <div class="badge">Developer Inspiration</div>
      <button class="theme-btn" @click="toggleTheme">
        {{ isDarkMode ? "☀️ Light" : "🌙 Dark" }}
      </button>
    </div>
    <section>
      <p :class="{ transitioning: isTransitioning }">{{ quote }}</p>
      <span>{{ author }}</span>
    </section>
    <div class="footer-row">
      <div class="actions">
        <button class="secondary-btn" @click="copyQuote">
          {{ copied ? "Copied!" : "Copy" }}
        </button>
        <button @click="generateQuote">Generate</button>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  width: 100%;
  max-width: 760px;
  border-radius: 24px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.16);
  border: 1px solid rgba(64, 100, 115, 0.15);
  transition:
    background 0.3s ease,
    color 0.3s ease;
}

main.light {
  background: linear-gradient(135deg, #f4f8fb 0%, #dbe7eb 100%);
  color: #23353b;
}

main.dark {
  background: linear-gradient(135deg, #17252b 0%, #23353b 100%);
  color: #f4f8fb;
}

.top-row {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.badge {
  background: #406473;
  color: white;
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.theme-btn,
.secondary-btn {
  border: 0;
  padding: 8px 12px;
  border-radius: 999px;
  cursor: pointer;
  font-weight: 600;
}

.theme-btn {
  background: rgba(64, 100, 115, 0.12);
  color: inherit;
}

section {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 8px;
  min-height: 140px;
  justify-content: center;
}

p {
  font-weight: 700;
  font-style: italic;
  font-size: 1.2rem;
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
  color: #406473;
  font-weight: 700;
  font-size: 0.95rem;
}

main.dark span {
  color: #9dc4d0;
}

span::before {
  content: "- ";
}

.footer-row {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  color: #56717a;
}

small {
  font-size: 0.9rem;
}

.actions {
  display: flex;
  gap: 10px;
}

.secondary-btn {
  background: rgba(64, 100, 115, 0.16);
  color: inherit;
}

button {
  background: linear-gradient(135deg, #406473 0%, #2f5160 100%);
  color: white;
  border: 0;
  padding: 10px 18px;
  font-size: 1rem;
  border-radius: 999px;
  font-weight: 700;
  cursor: pointer;
  transition:
    transform 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;
  box-shadow: 0 8px 18px rgba(64, 100, 115, 0.25);
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 22px rgba(64, 100, 115, 0.3);
}

main.dark .theme-btn,
main.dark .secondary-btn {
  background: rgba(255, 255, 255, 0.12);
}

@media (max-width: 600px) {
  main {
    padding: 20px;
    border-radius: 18px;
  }

  .top-row {
    flex-direction: column;
    align-items: flex-start;
  }

  .footer-row {
    flex-direction: column;
    align-items: stretch;
  }

  .actions {
    width: 100%;
    flex-wrap: wrap;
  }

  .actions button {
    flex: 1 1 140px;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
  }
}
</style>
