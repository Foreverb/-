import { createRouter, createWebHistory } from "vue-router"
const Index = () => import("@/pages/Index.vue");
const List = () => import("@/pages/List.vue");
const Detail = () => import("@/pages/Detail.vue");
const Search = () => import("@/pages/Search.vue");
const City = () => import("@/pages/City.vue");
const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/list',
        name: 'List',
        component: List
    },
    {
        path: '/detail',
        name: 'Detail',
        component: Detail
    },
    {
        path: '/search',
        name: 'Search',
        component: Search
    },
    {
        path: '/city',
        name: 'City',
        component: City
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
