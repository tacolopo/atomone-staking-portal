import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import TermsView from "@/views/TermsView.vue";
import PrivacyView from "@/views/PrivacyView.vue";

const routerHistory = createWebHistory();
const routes = [
  { path: "/", component: HomeView },
  { path: "/terms", component: TermsView },
  { path: "/privacy", component: PrivacyView },
  // { path: "/design", component: DesignView },
];
const router = createRouter({
  history: routerHistory,
  routes,
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 });
      }, 600);
    });
  },
});

export default router;
