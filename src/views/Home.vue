<!--
 * @Description: home
 * @Author: yangkai
 * @Date: 2019-10-29 15:47:55
 * @LastEditTime: 2019-11-01 16:57:07
 * @LastEditors: yangkai
 -->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@c/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
