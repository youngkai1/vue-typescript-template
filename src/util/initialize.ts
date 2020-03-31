/*
 * @Description: 初始化文件
 * @Author: yangkai
 * @Date: 2019-10-31 14:50:50
 * @LastEditTime: 2019-11-01 17:12:07
 * @LastEditors: yangkai
 */
require("./common");
// 是否重设
const RESET_FOR_MOBILE = true;

// 是否是PC。设备屏幕宽大于高
const IS_PC = window.screen.width > window.screen.height;

/**
 * @description: 取窗口可视范围的高度
 * @param : nerver
 * @return:  number
 */
export function getClientHeight(): number {
  let clientHeight = 0;
  if (document.body.clientHeight && document.documentElement.clientHeight) {
    clientHeight =
      document.body.clientHeight < document.documentElement.clientHeight
        ? document.body.clientHeight
        : document.documentElement.clientHeight;
  } else {
    clientHeight =
      document.body.clientHeight > document.documentElement.clientHeight
        ? document.body.clientHeight
        : document.documentElement.clientHeight;
  }
  return clientHeight;
}

/**
 * @description: 初始化HTML文字大小，项目所有字体size将使用rem单位。保证设备观感一致
 * @param : never
 * @return: never
 */
(() => {
  if (!RESET_FOR_MOBILE) return;
  if (document.readyState !== "loading") {
    resize();
  } else {
    document.addEventListener("DOMContentLoaded", resize);
  }
  window.addEventListener("resize", resize);
})();
function resize() {
  var clientWidth = document.body.clientWidth;
  var clientHeight = getClientHeight();

  if (clientWidth > window.screen.width) {
    window.requestAnimationFrame(resize);
  } else {
    // 判断是否是PC,且宽大于高。否则按移动端处理
    // console.log(IS_PC, clientWidth, clientHeight);
    if (IS_PC && clientWidth > clientHeight) {
      // PC基本字体大小（占宽度比例）
      const PC_FONT_SIZE_SCALE = 20;
      document.documentElement.style.fontSize =
        clientWidth / PC_FONT_SIZE_SCALE + "px";
    } else {
      // if (clientWidth > 720) {
      //   clientWidth = 720;
      // }
      // PC基本字体大小（占宽度比例）
      const MOBILE_FONT_SIZE_SCALE = 7.5;
      // set 1rem based on iPhone6 750px width, 750/7.5=100
      document.documentElement.style.fontSize =
        clientWidth / MOBILE_FONT_SIZE_SCALE + "px";
    }
    document.body.style.opacity = "1";
  }
}
