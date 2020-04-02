/*
 * @Description:
 * @Author: yangkai
 * @Date: 2019-11-01 15:28:39
 * @LastEditTime: 2020-04-01 16:46:08
 * @LastEditors: yangkai
 */
import {
  VuexModule,
  Module,
  Mutation,
  Action,
  getModule
} from "vuex-module-decorators";
import store from "@/store";
import defaultSetting from "@/defaultSetting";
// @dynamic 设置是否自动导入store的modules中，若需要则还要设置参数@store
// @namespaced 是否开启nameSpace 开启时，@(namespace("name").State(xxx))
@Module({ dynamic: true, store, namespaced: true, name: "app" })
class Login extends VuexModule {
  public defaultSetting: object = defaultSetting;
}

export const LoginModule = getModule(Login);
