/*
 * @Description:vue 打包配置
 * @Author: yangkai
 * @Date: 2019-08-01 15:02:56
 * @LastEditTime: 2020-04-01 15:48:37
 * @LastEditors: yangkai
 */
"use strict";
const path = require("path");
const CONFIG = { CLIENT_DEV_PORT: 8000 };

function resolve(dir) {
  return path.join(__dirname, dir);
}

// page title
const name = "金科文化大数据-移动端";

console.log(
  CONFIG.CLIENT_DEV_PORT,
  process.env.port,
  process.env.npm_config_port
);
const port = 8000; // dev port

const debug = false; // process.env.ENV !== 'production'

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  publicPath: "/jkbi",
  outputDir: "/jkbi",
  assetsDir: "static",
  lintOnSave: process.env.NODE_ENV === "development",
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      [CONFIG.BASE_API]: {
        // target: 'http://localhost:' + CONFIG.SERVER_PORT || 80,
        target: "https://old-bigdata.zhexinit.com",
        changeOrigin: true
      },
      "/api/": {
        target: "https://bigdata.zhexinit.com",
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    // webpack配置，为方法时会改写配置··
    // 打包是否使用source-map，配置·后可查看源码，便于调试
    devtool: debug ? "cheap-module-eval-source-map" : false,
    name: name,
    resolve: {
      alias: {
        "@": resolve("src"),
        "@c": resolve("src/components")
      }
    }
  },
  chainWebpack(config) {},
  css: {
    loaderOptions: {
      css: {},
      postcss: {},
      // 将文件中的变量打包时自动引入， 配置高于chainWebpack中关于 css loader 的配置
      // 给 sass-loader 传递选项
      // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号。
      scss: {
        // 注意：在 sass-loader v7 中，这个选项名是 "data"
        prependData: `@import "~@/styles/variables.scss";`
      }
      // 另外一个注入方法，使用style-resources-loader
      // https://cli.vuejs.org/zh/guide/css.html#%E8%87%AA%E5%8A%A8%E5%8C%96%E5%AF%BC%E5%85%A5
      // sass: {
      //   prependData: `@import "~@/styles/variables.sass"`
      // },
    }
  }
};
