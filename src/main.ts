/*
 * @Description: index
 * @Author: yangkai
 * @Date: 2019-10-29 15:47:55
 * @LastEditTime: 2020-03-30 18:57:06
 * @LastEditors: Please set LastEditors
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import("./styles/index.scss");
require("@/util/initialize.ts");

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
