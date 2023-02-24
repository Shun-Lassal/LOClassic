import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/components/pages/HomePage.vue";
import AnnouncementPage from "@/components/pages/AnnouncementPage.vue";

const routes = [
  { path: "/", name: "home", component: HomePage },
  {
    path: "/announcements",
    name: "announcements",
    component: AnnouncementPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
