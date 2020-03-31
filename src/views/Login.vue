<!--
 * @Description: 登陆
 * @Author: yangkai
 * @Date: 2019-10-30 19:55:24
 * @LastEditTime: 2019-11-01 17:15:32
 * @LastEditors: yangkai
 -->
<template>
  <div class="cont">
    <div class="demo">
      <div class="login" ref="login">
        <Earth class="earth" />
        <div class="login__form">
          <div class="login__row">
            <svg class="login__icon name svg-icon" viewBox="0 0 20 20">
              <path
                d="M0,20 a10,8 0 0,1 20,0z M10,0 a4,4 0 0,1 0,8 a4,4 0 0,1 0,-8"
              />
            </svg>
            <input
              type="text"
              class="login__input name"
              v-model="username"
              placeholder="Username"
            />
          </div>
          <div class="login__row">
            <svg class="login__icon pass svg-icon" viewBox="0 0 20 20">
              <path
                d="M0,20 20,20 20,8 0,8z M10,13 10,16z M4,8 a6,8 0 0,1 12,0"
              />
            </svg>
            <input
              type="password"
              class="login__input pass"
              v-model="password"
              placeholder="Password"
            />
          </div>
          <button
            type="button"
            :class="'login__submit ' + submitClass"
            ref="login__submit"
            @click="clickLogin"
          >
            <div class="ripple" ref="ripple" v-show="rippleIsShow"></div>
            登 录
          </button>
          <p class="login__signup">
            还没有权限? &nbsp;
            <a href="/login" target="_blank">联系大数据部门</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
// import { Toast } from "mand-mobile";
import Earth from "@c/Earth.vue";

import variables from "@/styles/variables.scss";

import { Component, Prop, Vue } from "vue-property-decorator";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";

@Component({
  components: { Earth }
})
export default class Login extends Vue {
  // @Prop() private msg!: string;

  // @(namespace("login").State)
  // @State(state => state.login.sidebar)
  // private sidebar;

  @Action ToggleSideBar: any;
  // private variables = variables;
  private username = "";
  private password = ""; // "Zx12345",
  private submitClass = "";
  private rippleIsShow = false;
  private animating = false;

  // login(that)
  private login() {
    setTimeout(() => {
      const res = {
        code: 0
      };
      this.rippleIsShow = false;
      this.animating = false;
      if (res.code === 0) {
        this.submitClass = "processing success";
        setTimeout(() => {
          // this.$router.replace("/");
        }, 400);
      } else {
        this.submitClass = "";
        // Toast.failed(res.msg);
      }
    }, 3000);
  }
  private clickLogin() {
    if (!this.username || !this.password) {
      // /Toast.failed("请输入账号名或密码");
      return;
    }
    if (this.animating) return;
    this.animating = true;
    this.rippleIsShow = true;
    this.submitClass = "processing";
    setTimeout(() => {
      this.login();
    }, 500);
  }
}
</script>
<style lang="scss" scoped>
$rpx: 4.8;
.earth {
  width: 4rem;
  height: 4rem;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 2.5rem;
}
.md-toast .md-popup .md-popup-box {
  font-size: 8rem / $rpx !important;
  width: 20rem / $rpx !important;
  padding: 3rem / $rpx !important;
}

svg {
  display: inline-block;
  width: 2rem / $rpx;
  height: 2rem / $rpx;
  overflow: visible;
}

.svg-icon {
  cursor: pointer;
}
.svg-icon path {
  stroke: rgba(255, 255, 255, 0.9);
  fill: none;
  stroke-width: 1;
}

input,
button {
  outline: none;
  border: none;
}

.cont {
  position: relative;
  height: 100%;
  background: #02093f url("../assets/images/bg3.jpg") no-repeat;
  background-size: 100% auto;
  // background-size: cover;
  overflow: auto;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
}

.demo {
  position: absolute;
  height: 100%;
  width: 100%;
  /* top: 50%;
  left: 50%;
  margin-left: -15/$rpx;
  margin-top: -26.5/$rpx;
  width: 30/$rpx;
  height: 53/$rpx; */
  overflow: hidden;
}

.login {
  position: relative;
  height: 100%;
  // background: -webkit-linear-gradient(
  //   top,
  //   rgba(16, 55, 111, 0.8) 0%,
  //   rgba(0, 0, 0, 0.6) 100%
  // );
  // background: linear-gradient(
  //   to bottom,
  //   rgba(16, 55, 111, 0.8) 0%,
  //   rgba(0, 0, 0, 0.6) 100%
  // );
  transition: opacity 0.1s,
    transform 0.3s cubic-bezier(0.17, -0.65, 0.665, 1.25);

  transform: scale(1);
}
.login.inactive {
  opacity: 0;
  transform: scale(1.1);
}

.login__form {
  position: absolute;
  //top: 50%;
  bottom: 0.5rem;
  left: 0;
  width: 100%;
  //height: 50%;
  padding: 1.5rem / $rpx 2.5rem / $rpx;
  text-align: center;
}
.login__row {
  height: 7rem / $rpx;
  padding-top: 1rem / $rpx;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
.login__icon {
  margin-bottom: -0.4rem / $rpx;
  margin-right: 0.5rem / $rpx;
}
.login__icon.name path {
  stroke-dasharray: 73.50196075439453;
  stroke-dashoffset: 73.50196075439453;
  -webkit-animation: animatePath 2s 0.5s forwards;
  animation: animatePath 2s 0.5s forwards;
}
.login__icon.pass path {
  stroke-dasharray: 92.10662841796875;
  stroke-dashoffset: 92.10662841796875;
  -webkit-animation: animatePath 2s 0.5s forwards;
  animation: animatePath 2s 0.5s forwards;
}
.login__input {
  display: inline-block;
  width: 22rem / $rpx;
  height: 100%;
  padding-left: 1.5rem / $rpx;
  font-size: 1.5rem / $rpx;
  background: transparent;
  color: #fdfcfd;
}
.login__submit {
  position: relative;
  width: 100%;
  height: 4rem / $rpx;
  margin: 5rem / $rpx 0 2.2rem / $rpx;
  color: rgba(255, 255, 255, 0.8);
  background: rgba(4, 53, 124, 0.7);
  font-size: 1.5rem / $rpx;
  border-radius: 3rem / $rpx;
  cursor: pointer;
  overflow: hidden;
  -webkit-transition: width 0.3s 0.15s, font-size 0.1s 0.15s;
  transition: width 0.3s 0.15s, font-size 0.1s 0.15s;

  background: linear-gradient(180deg, #0a31da, #2145e4);
  border: 1px solid #0229d7;
  /* -webkit-box-shadow: 0 1px 0 #3958e3 inset, 0 1px 5px #3956d7; */
  box-shadow: 0px -1px 0 #1130b8 inset, 0 2px 3px #1d3398;
}
.login__submit:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -1.5rem / $rpx;
  margin-top: -1.5rem / $rpx;
  width: 3rem / $rpx;
  height: 3rem / $rpx;
  border: 0.2rem / $rpx dotted #fff;
  border-radius: 50%;
  border-left: none;
  border-bottom: none;
  -webkit-animation: rotate 0.5s infinite linear;
  animation: rotate 0.5s infinite linear;
  -webkit-transition: opacity 0.1s 0.4s;
  transition: opacity 0.1s 0.4s;
  opacity: 0;
}
.login__submit.processing {
  width: 4rem / $rpx;
  font-size: 0;
}
.login__submit.processing:after {
  opacity: 1;
}
.login__submit.success {
  -webkit-transition: -webkit-transform 0.3s 0.1s ease-out, opacity 0.1s 0.3s,
    background-color 0.1s 0.3s;
  transition: transform 0.3s 0.1s ease-out, opacity 0.1s 0.3s,
    background-color 0.1s 0.3s;
  -webkit-transform: scale(30);
  -ms-transform: scale(30);
  transform: scale(30);
  opacity: 0.9;
}
.login__submit.success:after {
  -webkit-transition: opacity 0.1s 0s;
  transition: opacity 0.1s 0s;
  opacity: 0;
}
.login__signup {
  font-size: 1.2rem / $rpx;
  color: #aba8ae;
}
.login__signup a {
  color: #fff;
  cursor: pointer;
}

.ripple {
  position: absolute;
  width: 15rem / $rpx;
  height: 15rem / $rpx;
  margin-left: -7.5rem / $rpx;
  margin-top: -7.5rem / $rpx;
  background: rgba(0, 0, 0, 0.4);
  -webkit-transform: scale(0);
  -ms-transform: scale(0);
  transform: scale(0);
  -webkit-animation: animRipple 0.4s;
  animation: animRipple 0.4s;
  border-radius: 50%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: "auto";
}

@-webkit-keyframes animRipple {
  to {
    -webkit-transform: scale(3.5);
    transform: scale(3.5);
    opacity: 0;
  }
}

@keyframes animRipple {
  to {
    -webkit-transform: scale(3.5);
    transform: scale(3.5);
    opacity: 0;
  }
}
@-webkit-keyframes rotate {
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotate {
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-webkit-keyframes animatePath {
  to {
    stroke-dashoffset: 0;
  }
}
@keyframes animatePath {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
