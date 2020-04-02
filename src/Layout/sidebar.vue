<!--
 * @Description:Layout
 * @Author: yangkai
 * @Date: 2020-04-01 14:55:28
 * @LastEditTime: 2020-04-01 18:01:09
 * @LastEditors: yangkai
 -->
<template>
  <el-menu
    :default-active="2"
    mode="horizontal"
    @select="handleSelect"
    :background-color="defaultSetting.menuBg"
    :text-color="defaultSetting.menuText"
    :active-text-color="defaultSetting.menuActiveText"
  >
    <el-submenu index="2">
      <template slot="title"
        >数据管理</template
      >
      <el-menu-item index="2-1">数据源</el-menu-item>
      <el-menu-item index="2-2">数据建模</el-menu-item>
    </el-submenu>
    <el-menu-item index="3">报表创作</el-menu-item>
    <el-menu-item index="4">任务中心</el-menu-item>
  </el-menu>
</template>
<script lang="ts">
import { Menu, Submenu, MenuItem, MenuItemGroup, Avatar } from "element-ui";
import { Component, Prop, Vue } from "vue-property-decorator";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";
import Silderbar from "./sidebar.vue";
@Component({
  components: {
    Silderbar,
    elMenu: Menu,
    elSubmenu: Submenu,
    elMenuItem: MenuItem,
    elMenuItemGroup: MenuItemGroup,
    elAvatar: Avatar
  }
})
export default class Sidebar extends Vue {
  @(namespace("app").State)
  private defaultSetting: any;
}
</script>

<style lang="scss" scoped></style>
