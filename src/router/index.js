import { createRouter, createWebHashHistory } from 'vue-router'
import ViewNotes from '@/Views/ViewNotes.vue'
import ViewStats from '@/Views/ViewStats.vue'

const routes = [
  {
    path: '/',
    name: 'notes',
    component: ViewNotes
  },
  {
    path: '/stats',
    name: 'stats',
    component: ViewStats
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router