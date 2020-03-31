/*
 * @Description:
 * @Author: yangkai
 * @Date: 2019-10-23 10:36:22
 * @LastEditTime: 2019-10-31 14:37:20
 * @LastEditors: yangkai
 */
declare namespace Ajax {
  // axios 返回数据
  export interface AxiosResponse {
    data: AjaxResponse;
  }

  // 请求接口数据
  export interface AjaxResponse {
    code: number | string;
    data: any;
    message?: string;
  }
}
