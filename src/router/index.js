import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('../views/Gallery.vue')
  },

  {
    path: '/:catchAll(.*)*',
    name: "PageNotFound",
    component: () => import('../components/PageNotFound.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
