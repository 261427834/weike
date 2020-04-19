
import axios from "axios";
import da from 'element-ui/src/locale/lang/da'

/**
 * 业务逻辑中用到的Api方法
 */
export default class Methods{
    // 登录
    async login(data){
        let res = await axios.post('/api/login',data)
        return res.data
    }
    // 扫码登录
    async loginQr(){
        let res = await axios.get('/api/loginQR')
        return res.data
    }

    // 搜索
    async getHomeSearch(data){
        let res = await axios.get('/api/home/search',{
            params: data
        })
        console.log(res)
        return res.data
    }


// 首页
    // 获取banner
    async getBanner(){
        let res = await axios.get('/api/home/banner')
        console.log(res)
        return res.data
    }
    // 课程推荐
    async getHomeTop(){
        let res = await axios.get('/api/home/top')
        console.log(res)
        return res.data
    }
    // 新闻资讯
    async getHomeNews(){
        let res = await axios.get('/api/home/info/list')
        console.log(res)
        return res.data
    }


    // 获取课程详情
    // async getCourseDetail(data){
    //     let res = await axios.get('/api/course/detail',{
    //         params: data
    //     })
    //     console.log(res)
    //     return res.data
    // }
    // 获取课程详情
    async getCourseDetail(data){
        let res = await axios.get('/api/course/detail/'+data.id)
        console.log(res)
        return res.data
    }

}