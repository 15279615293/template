import { createRouter,createWebHashHistory,RouteRecordRaw } from "vue-router";



let routes:RouteRecordRaw[] = [
    {
        path:'/login',
        name:'login',
        component:()=>import('@/views/login/login.vue'),
        meta:{isShow:false}
    },
    {
        path:'/dashboard',
        name:'dashboard',
        component:()=>import('@/views/dashboard/dashboard.vue'),
        meta:{isShow:true,title:'数据概览'}
    },
    {
        path:'/',
        redirect:'/dashboard'
    }
]

export const newRoutes:RouterItf[]=[
    {
        path:'/companys/list',
        name:'companys-list',
        component:()=>import('@/views/companys/companys.vue'),
        meta:{title:'企业管理',icon:'icon-peoples',isShow:true}
    },
    {
        path:'/questions',
        name:'questions',
        meta:{title:'题库管理',icon:'icon-documentation'},
        children:[
            {
                path:'list',
                name:'questions-list',
                component:()=>import('@/views/questions/list/list.vue'),
                meta:{isShow:true,title:'基础题库'}, 
            },
            {
                path:'new',
                name:'questions-new',
                component:()=>import('@/views/questions/new/new.vue'),
                meta:{isShow:true,title:'试题录入'}, 
            }
        ]
    }
]

routes=[...routes,...newRoutes] as RouteRecordRaw[]
// console.log(routes)

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

router.beforeEach((to, from, next)=>{
    if(window.localStorage.getItem('token')){
        if(to.path=='/login'){
            next('/dashboard')
        }else{
            next()
        }
    }else{
        if(to.path=='/login'){
            next()
        }else{
            next('/login')
        }
    }
})

export default router