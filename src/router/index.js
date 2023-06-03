import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../views/auth/views/LoginPageView.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/home/view/HomeView.vue"),
  },
  {
    path: "/escolha-seu-plano",
    name: "escolha-seu-plano",
    component: () => import("../views/infra/view/ChoosePlan.vue"),
  },
  {
    path: "/cadastro",
    name: "cadastro",
    component: () => import("../views/auth/views/CreateAccount.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
