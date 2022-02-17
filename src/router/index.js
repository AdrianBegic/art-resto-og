import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('../views/Gallery.vue')
  },

  {
    path: '/services',
    name: 'SERVICES',
    component: () => import('../views/Services.vue')
  },

  

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
}
})




export default router
