<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

const props = defineProps<{ isDarkMode: boolean }>();
const themeClass = computed(() => (props.isDarkMode ? "dark" : "light"));

type Recipe = {
  name: string;
  image: string;
  cuisine: string;
  difficulty: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  rating: number;
  ingredients: string[];
  instructions: string[];
};

const recipe = ref<Recipe | null>(null);
const isLoading = ref(false);
const copyMessage = ref("Copy recipe");
let recipeCount = 0;

const fetchRecipeCount = async () => {
  if (recipeCount > 0) return recipeCount;

  const response = await fetch("https://dummyjson.com/recipes?limit=1&select=id");
  const data = await response.json();
  recipeCount = data.total ?? 50;
  return recipeCount;
};

const fetchRandomRecipe = async () => {
  isLoading.value = true;

  try {
    const total = await fetchRecipeCount();
    const randomId = Math.floor(Math.random() * total) + 1;
    const response = await fetch(`https://dummyjson.com/recipes/${randomId}`);

    if (!response.ok) {
      throw new Error("Failed to load recipe");
    }

    recipe.value = await response.json();
  } catch {
    recipe.value = null;
  } finally {
    isLoading.value = false;
  }
};

const copyRecipe = async () => {
  if (!recipe.value) return;

  const textToCopy = `${recipe.value.name}\n\nIngredients:\n${recipe.value.ingredients
    .map((item) => `- ${item}`)
    .join("\n")}\n\nInstructions:\n${recipe.value.instructions
    .map((step, index) => `${index + 1}. ${step}`)
    .join("\n")}`;

  try {
    await navigator.clipboard.writeText(textToCopy);
    copyMessage.value = "Copied!";
    window.setTimeout(() => {
      copyMessage.value = "Copy recipe";
    }, 1200);
  } catch {
    copyMessage.value = "Copy failed";
  }
};

onMounted(() => {
  fetchRandomRecipe();
});
</script>

<template>
  <div :class="['page-shell', 'recipe-page', themeClass]">
    <div class="page-heading">
      <h2 class="page-title">Random Recipe</h2>
      <p class="page-subtitle">
        Fetch a random recipe for dinner inspiration, then copy it for later.
      </p>
    </div>

    <div class="page-card recipe-card">
      <div v-if="isLoading" class="skeleton-card" aria-hidden="true">
        <div class="skeleton-image"></div>
        <div class="skeleton-lines">
          <div class="skeleton-line title"></div>
          <div class="skeleton-line"></div>
          <div class="skeleton-line short"></div>
        </div>
      </div>

      <template v-else-if="recipe">
        <img :src="recipe.image" :alt="recipe.name" class="recipe-image" />

        <div class="recipe-meta">
          <h3 class="recipe-name">{{ recipe.name }}</h3>
          <div class="recipe-tags">
            <span class="tag">{{ recipe.cuisine }}</span>
            <span class="tag">{{ recipe.difficulty }}</span>
            <span class="tag">{{ recipe.prepTimeMinutes + recipe.cookTimeMinutes }} min</span>
            <span class="tag">{{ recipe.servings }} servings</span>
            <span class="tag">★ {{ recipe.rating }}</span>
          </div>
        </div>

        <div class="recipe-details">
          <div class="recipe-section">
            <h4>Ingredients</h4>
            <ul>
              <li v-for="ingredient in recipe.ingredients" :key="ingredient">
                {{ ingredient }}
              </li>
            </ul>
          </div>

          <div class="recipe-section">
            <h4>Instructions</h4>
            <ol>
              <li v-for="step in recipe.instructions" :key="step">{{ step }}</li>
            </ol>
          </div>
        </div>
      </template>

      <div v-else class="placeholder">Could not load a recipe right now.</div>

      <div class="recipe-actions">
        <button @click="fetchRandomRecipe" class="button-secondary">Get another recipe</button>
        <button @click="copyRecipe" class="button-primary" :disabled="!recipe">
          {{ copyMessage }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.recipe-page {
  max-width: 780px;
}

.recipe-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
}

.recipe-image {
  width: 100%;
  max-width: 420px;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 20px;
  display: block;
}

.recipe-meta {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;
}

.recipe-name {
  margin: 0;
  font-size: 1.3rem;
}

.recipe-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
}

.tag {
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 700;
  background: rgba(148, 163, 184, 0.25);
  color: var(--text-secondary);
}

.recipe-details {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  text-align: left;
}

.recipe-section h4 {
  margin: 0 0 10px;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--accent-start);
}

.recipe-section ul,
.recipe-section ol {
  margin: 0;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  color: var(--text-primary);
}

.placeholder {
  padding: 48px 20px;
  color: var(--text-secondary);
}

.skeleton-card {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.skeleton-image {
  width: 100%;
  max-width: 420px;
  aspect-ratio: 4 / 3;
  border-radius: 20px;
  background: linear-gradient(90deg, #e2e8f0 25%, #f1f5f9 37%, #e2e8f0 63%);
  background-size: 400% 100%;
  animation: shimmer 1.2s ease infinite;
}

.skeleton-lines {
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}

.skeleton-line {
  width: 70%;
  height: 10px;
  border-radius: 999px;
  background: linear-gradient(90deg, #e2e8f0 25%, #f1f5f9 37%, #e2e8f0 63%);
  background-size: 400% 100%;
  animation: shimmer 1.2s ease infinite;
}

.skeleton-line.title {
  width: 50%;
  height: 14px;
}

.skeleton-line.short {
  width: 40%;
}

@keyframes shimmer {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
}

.recipe-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}

.recipe-actions button {
  flex: 1 1 auto;
  min-width: 140px;
}

.recipe-actions button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

@media (max-width: 720px) {
  .recipe-details {
    grid-template-columns: 1fr;
  }

  .recipe-actions button {
    flex-basis: 100%;
  }
}
</style>
