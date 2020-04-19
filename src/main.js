import Vue from 'vue'
import Router from 'vue-router'
import App from './renderer/app.vue'
import scroll from 'vue-seamless-scroll'

Vue.use(Router)
Vue.use(scroll)
Vue.use(scroll,{componentName: 'scroll-seamless'})

//wkUi
import '@ui/wkUi'

//api
import Api from './api/api'
window.Api = new Api({baseURL:''});

//router 配置
import routes from './renderer/router/routes'
const router = new Router({
    mode: 'history',
    routes,
})


window.vm = new Vue({
    el: '#app',
    router,
    data: {
        eventHub: new Vue()
    },
    render: h => h(App),
})

