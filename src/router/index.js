// src/router/index.js

import { createRouter, createWebHistory } from "vue-router";
import MainApp from "../components/MainApp.vue";
import GalleryApp from "../components/GalleryApp.vue";
import PoemsApp from "../components/PoemsApp.vue";
import HistoryApp from "../components/HistoryApp.vue";

const routes = [
  {
    path: "/",
    name: "MainApp",
    component: MainApp,
  },
  {
    path: "/gallery",
    name: "GalleryApp",
    component: GalleryApp,
  },
  {
    path: "/poems",
    name: "PoemsApp",
    component: PoemsApp,
  },
  {
    path: "/history",
    name: "HistoryApp",
    component: HistoryApp,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
