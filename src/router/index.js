import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../stubs/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../stubs/About.vue"),
  },
  {
    path: "/404",
    name: "NoSuchPageExists",
    component: () => import("../stubs/404.vue"),
  },
  {
    path: "/empty",
    name: "Empty",
    component: () => import("../stubs/Empty.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
