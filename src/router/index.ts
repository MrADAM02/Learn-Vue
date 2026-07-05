import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import EmojiView from "@/views/EmojiView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/emoji",
    name: "emoji",
    component: EmojiView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
