import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Budget from '../pages/Budget.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/orcamento', component: Budget }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router