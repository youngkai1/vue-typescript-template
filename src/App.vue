<!--
 * @Description:app
 * @Author: yangkai
 * @Date: 2019-10-29 15:47:55
 * @LastEditTime: 2020-04-01 16:25:29
 * @LastEditors: yangkai
 -->
<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>
<style lang="scss">
#app {
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
