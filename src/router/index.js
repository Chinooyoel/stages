import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import stagesRouter from "@/modules/stages/router";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/stages",
    ...stagesRouter
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
