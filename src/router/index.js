import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    { name: "default", path: "*", redirect: { name: "login" } },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/login")
    },
    {
      path: "/download",
      name: "download",
      component: () => import("@/views/download")
    }
    // { path: "*", redirect: "/404" },
  ]
});
