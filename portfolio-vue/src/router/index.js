import { createRouter, createWebHistory } from 'vue-router'

// Lazy loading
const Home = () => import('../pages/Home.vue')
const Budget = () => import('../pages/Budget.vue')

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/budget', name: 'Budget', component: Budget }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth'
            }
        }
        return { top: 0 }
    }
})

export default router