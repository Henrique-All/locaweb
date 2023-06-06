import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../views/auth/views/LoginPageView.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
    meta: { requiresAuth: false },
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/home/view/HomeView.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/escolha-seu-plano",
    name: "escolha-seu-plano",
    component: () => import("../views/infra/view/ChoosePlan.vue"),
    meta: { requiresAuth: false },
  },
  {
    path: "/cadastro",
    name: "cadastro",
    component: () => import("../views/auth/views/CreateAccount.vue"),
    meta: { requiresAuth: false },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  if (token === null) {
    return false;
  }
  return token !== null;
};

router.beforeEach((to, from, next) => {
  if (to.matched.some((route) => route.meta.requiresAuth)) {
    if (isAuthenticated()) {
      next();
    } else {
      next("/");
    }
  } else {
    next();
  }
});

export default router;
