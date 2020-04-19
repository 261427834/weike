
import axios from "axios";

export default {
    //请求发送之前
    beforeRequest:[
        config => {
            return config;
        }, error => {
            return Promise.reject(error);
        }
    ],

    //结果返回给前端使用之前
    beforeResponse:[
        res => {
            // if(res.data.code =='401'){
            //     //没有登录时 返回登陆页面
            //     return false;
            // }
            return Promise.resolve(res);
        }, error => {
            return Promise.reject(error);
        }
    ]
}