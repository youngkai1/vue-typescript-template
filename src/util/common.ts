/*
 * @Description:
 * @Author: yangkai
 * @Date: 2019-11-01 11:47:41
 * @LastEditTime: 2019-11-01 16:34:09
 * @LastEditors: yangkai
 */
import Vue from "vue";
/**
 * @description: await promise使用promise封装 let [err, res] = to( Promise )
 * @param : promise
 * @return: [err,data]
 */

export const to = function(promise: any) {
  if (!promise) return ["fun to: promise为空"];
  if (arguments.length === 1) {
    return promise
      .then((data: any) => {
        return [null, data];
      })
      .catch((err: any) => [err]);
  }
  return Promise.all([...arguments])
    .then(res => {
      return [null, res];
    })
    .catch(err => [err, []]);
};
Vue.prototype._to = to;
