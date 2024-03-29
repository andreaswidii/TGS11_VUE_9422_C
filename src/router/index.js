import Vue from 'vue' 
import Router from 'vue-router' 
const DashboardLayout = () => import(/* webpackChunkName: "dashboard" */ '../components/dashboardLayout.vue') 
const HelloWorld = () => import(/* webpackChunkName: "dashboard" */ '../components/HelloWorld.vue') 
function loadView(view) {
    return () => import(/* webpackChunkName: "view-[request]" */ `../components/dashboardContents/${view}.vue`) 
}
const routes = [ 
    {
        path: '/', 
        component: HelloWorld, 
    },
    { 
        path: '/components/dashboardLayout.vue', 
        component: DashboardLayout, 
        children: [ 
            { 
                name: 'UserController', 
                path: '/dashboardContents/userController', 
                component: loadView('userController') 
            },
            { 
                name: 'BengkelController', 
                path: '/dashboardContents/bengkelController', 
                component: loadView('bengkelController') 
            },
            { 
                name: 'loginPage', 
                path: '/login', 
                component: loadView('loginPage') 
            },
        ] 
    },
] 

Vue.use(Router) 
const router = new Router({mode: 'history', routes: routes}) 
export default router