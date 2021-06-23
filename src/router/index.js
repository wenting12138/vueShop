import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/login/Login.vue'



// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    {
        name: 'login',
        path: "/login",
        component: Login
    }
]

var router = new VueRouter({
    routes
})
export default router;