/*
 * @Description:
 * @Author: yangkai
 * @Date: 2020-03-31 16:56:07
 * @LastEditTime: 2020-04-01 15:35:33
 * @LastEditors: yangkai
 */
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk"
      }
    ]
  ]
};
