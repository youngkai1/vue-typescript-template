<!--
 * @Description:Layout
 * @Author: yangkai
 * @Date: 2020-04-01 14:55:28
 * @LastEditTime: 2020-04-01 18:02:16
 * @LastEditors: yangkai
 -->
<template>
  <section>
    <header>
      <div class="logo">
        <img src="@/assets/logo.png" alt="" />
        <span class="title"> {{ defaultSetting.LogoTitle }}</span>
      </div>
      <Silderbar />

      <div class="avatar">
        <el-avatar :src="avatarImg"></el-avatar>
      </div>
    </header>
  </section>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Avatar } from "element-ui";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";
import avatarImg from "../assets/person.jpg";
import Silderbar from "./sidebar.vue";
@Component({
  components: {
    Silderbar,
    elAvatar: Avatar
  }
})
export default class Layout extends Vue {
  @(namespace("app").State)
  private defaultSetting: any;
  private avatarImg: string = avatarImg;
}
</script>

<style lang="scss" scoped>
header {
  // height: 50px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  background-color: $menuBg;
  color: $menuText;
  vertical-align: bottom;
  height: 61px;
  border-bottom: solid 1px #e6e6e6;
  .logo {
    padding: $smallSpace;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;

    img {
      height: 40px;
    }
    .title {
      color: #fff;
      margin-left: $smallSpace;
      // font-weight: bold;
    }
  }
  .avatar {
    padding: $smallSpace;
  }
}
</style>
