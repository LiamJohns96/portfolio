import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Resume from '../pages/Resume.vue'
import Contact from '../pages/Contact.vue'
import PhoneNumber from '@/pages/PhoneNumber.vue'

const routes = [
  { path: '/', name: 'Home', component: Home, meta: { title: 'Home – L. Johns' }},
  { path: '/resume', name: 'Resume', component: Resume, meta: { title: 'Resume – L. Johns' }},
  { path: '/contact', name: 'Contact', component: Contact, meta: { title: 'Contact – L. Johns' }},
  { path: '/phone', name: 'Phone', component: PhoneNumber, meta: { title: 'Phone – L. Johns' }},
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.afterEach((to) => {
    document.title = to.meta.title || 'Liam Johns Portfolio'
  })

export default router