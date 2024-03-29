import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/home/home.vue";

const routes = [
  {
    path: "/",
    redirect:"/login",
  },
  {
    path:'/login',
    name:"Login",
    component:()=>import(/*webpackChunkName:"login*/ "../views/login/login.vue")
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
