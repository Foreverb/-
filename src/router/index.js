import { createRouter, createWebHistory } from "vue-router"
import Home from "@/pages/Index.vue"
const routes = [
    {
        path: '/',
        // redirect重定向
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/List',
        name: 'List',
        component: () => import('@/pages/List.vue')
    },
    {
        path: '/Detail',
        name: 'Detail',
        component: () => import('@/pages/Detail.vue')
    },
    {
        path: '/Search',
        name: 'Search',
        component: () => import('@/pages/Search.vue')
    },
    {
        path: '/City',
        name: 'City',
        component: () => import('@/pages/City.vue')
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;