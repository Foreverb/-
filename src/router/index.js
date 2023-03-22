import { createRouter, createWebHistory } from "vue-router"
import Home from "@/pages/Index.vue"
const routes = [{
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
        path: '/list',
        name: 'List',
        component: () =>
            import ('@/pages/List.vue')
    },
    {
        path: '/detail',
        name: 'Detail',
        component: () =>
            import ('@/pages/Detail.vue')
    },
    {
        path: '/search',
        name: 'Search',
        component: () =>
            import ('@/pages/Search.vue')
    },
    {
        path: '/city',
        name: 'City',
        component: () =>
            import ('@/pages/City.vue')
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;