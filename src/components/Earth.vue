<!--
 * @Description:
 * @Author: yangkai
 * @Date: 2019-10-29 15:47:55
 * @LastEditTime: 2019-11-01 11:17:28
 * @LastEditors: yangkai
 -->
<template>
  <div class="earth">
    <img src="../assets/images/map.png" class="map1" />
    <img src="../assets/images/cirle.png" class="map2" />
    <img src="../assets/images/line.png" class="map3" />
    <h2 class="title">
      金科文化·大数据平台
    </h2>
    <!-- <img src="../assets/images/logo2.png" class="map4" /> -->
  </div>
</template>

<script lang="ts">
import variables from "@/styles/variables.scss";

import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  private variables = variables;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.earth {
  height: 100%;
  width: 100%;
  position: relative;

  .map1,
  .map2,
  .map3,
  .map4,
  .title {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
  .map1 {
    height: 70%;
    width: 70%;
    opacity: 0.8;
  }
  .map2 {
    height: 78%;
    width: 75%;
    animation: rotate2 15s infinite linear;
  }

  .map3 {
    animation: rotate 15s infinite linear;
  }
  .map4 {
    height: 30%;
    width: 30%;
    opacity: 0.6;
  }
  .title {
    font-size: 0.5rem;
    color: #fff;
    width: 7.5rem;
    height: 1rem;
    left: -1.775rem;
    bottom: -1rem;
    top: auto;
    text-align: center;
    line-height: 1rem;
    background-image: -webkit-linear-gradient(top, #fff, #2145e4); //#66aff8
    background-clip: text;
    -webkit-text-fill-color: transparent;
    img {
      width: 0.6rem;
      height: 0.6rem;
      vertical-align: middle;
    }
  }
}

@keyframes rotate {
  0% {
    -webkit-transform: rotate(0deg);
  }

  25% {
    -webkit-transform: rotate(90deg);
  }

  50% {
    -webkit-transform: rotate(180deg);
  }

  75% {
    -webkit-transform: rotate(270deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes rotate2 {
  0% {
    -webkit-transform: rotate(360deg);
  }

  25% {
    -webkit-transform: rotate(270deg);
  }

  50% {
    -webkit-transform: rotate(180deg);
  }

  75% {
    -webkit-transform: rotate(90deg);
  }

  100% {
    -webkit-transform: rotate(0deg);
  }
}
</style>
