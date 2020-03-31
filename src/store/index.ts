/*
 * @Description:
 * @Author: yangkai
 * @Date: 2019-10-29 15:47:55
 * @LastEditTime: 2019-11-01 16:02:03
 * @LastEditors: yangkai
 */
import Vue from "vue";
import Vuex from "vuex";
// import("./modules/login");

// context所有文件路径 []String
const context = require.context("./modules", false, /\.ts$/);
context.keys().forEach(key => {
  // 导入操作，所有文件会自动注入 store modules中
  import("./modules/" + key.slice(2));
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {}
});
