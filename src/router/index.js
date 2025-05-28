import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Resume from '../pages/Resume.vue'
import Contact from '../pages/Contact.vue'

const routes = [
  { path: '/', name: 'Home', component: Home, meta: { title: 'Home – Liam Johns' }},
  { path: '/resume', name: 'Resume', component: Resume, meta: { title: 'Resume – Liam Johns' }},
  { path: '/contact', name: 'Contact', component: Contact, meta: { title: 'Contact – Liam Johns' }},
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