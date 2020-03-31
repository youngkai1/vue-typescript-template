/*
 * @Description:
 * @Author: yangkai
 * @Date: 2019-11-01 15:28:39
 * @LastEditTime: 2019-11-01 17:00:59
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
// @dynamic 设置是否自动导入store的modules中，若需要则还要设置参数@store
// @namespaced 是否开启nameSpace 开启时，@(namespace("name").State(xxx))
@Module({ dynamic: true, store, namespaced: true, name: "login" })
class Login extends VuexModule {
  public sidebar = {
    withoutAnimation: false
  };

  @Mutation
  private TOGGLE_SIDEBAR(withoutAnimation: boolean) {
    this.sidebar.withoutAnimation = !this.sidebar.withoutAnimation;
  }

  @Action
  public ToggleSideBar(withoutAnimation: boolean) {
    this.TOGGLE_SIDEBAR(withoutAnimation);
  }
}

export const LoginModule = getModule(Login);
