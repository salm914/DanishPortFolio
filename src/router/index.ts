import { createRouter, createWebHistory } from 'vue-router'
import dashboard from '@/page/dashboard.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: dashboard,
    },
  ],
})

export default router
