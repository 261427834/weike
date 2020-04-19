
import axios from 'axios'

/**
 * 设置axios默认配置
 * @param options
 */
export default function config(options){

    // 配置axios请求的地址
    axios.defaults.baseURL = 'https://api.pc.jujiaweike.com/renren-web/';
    // axios.defaults.baseURL = 'http://hy.hn3.mofasuidao.cn/renren-web/';
    // 设置请求头为 Authorization

    axios.defaults.headers.common['Authorization'] = options.auth || '';
    //是否允许跨域
    axios.defaults.crossDomain = options.crossDomain || true;
    //设置cross跨域 并设置访问权限 允许跨域携带cookie信息
    axios.defaults.withCredentials = options.withCredentials || true;
    //设置 content-type
    axios.defaults.headers.post['Content-Type'] = options.contentType || 'application/json; charset=utf-8';

    //配置发送请求前的拦截器
    axios.interceptors.request.use(...options.beforeRequest);

    // 配置响应拦截器
    axios.interceptors.response.use(...options.beforeResponse);
}
