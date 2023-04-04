import { App } from "vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes = [
  { path: "/login", component: () => import("@/views/login.vue") },
  { path: "/register", component: () => import("@/views/reg.vue") },
] as RouteRecordRaw[];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export function setupRouter(app: App<Element>) {
  app.use(router);
}
