import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      layout: "main",
    },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
    meta: {
      layout: "page",
    },
  },
  {
    path: "/client",
    name: "client",
    component: () => import("../views/ClientView.vue"),
    meta: {
      layout: "page",
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/ClientView.vue"),
    meta: {
      layout: "page",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
