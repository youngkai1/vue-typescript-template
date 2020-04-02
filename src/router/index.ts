/*
 * @Description:
 * @Author: yangkai
 * @Date: 2019-10-29 15:47:55
 * @LastEditTime: 2020-04-01 16:35:05
 * @LastEditors: yangkai
 */
import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Home from "../Layout/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  }
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  routes
});

export default router;
