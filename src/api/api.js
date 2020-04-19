
import axios from "axios";
import Methods from './methods/index'
import setConfig from './axios/config'
import interceptors from "./axios/interceptors"

/**
 * Api
 * @param options
 */
export default class Api extends Methods{
    constructor(options={}) {
        super()
        this.baseURL = options.baseURL || location.origin
        this.axios = axios;
        this.init();
    }

    init(){
        //配置相关
        setConfig({
            baseURL:this.baseURL,
            beforeRequest:interceptors.beforeRequest,
            beforeResponse:interceptors.beforeResponse
        })

        //其他 ...
    }
}