import { createRouter, createWebHashHistory } from 'vue-router'
import ViewNotes from '@/Views/ViewNotes.vue'
import ViewStats from '@/Views/ViewStats.vue'
import ViewEditNote from '@/Views/ViewEditNote.vue'

const routes = [
  {
    path: '/',
    name: 'notes',
    component: ViewNotes
  },
  {
    path: '/editNote/:id',
    name: 'edit-note',
    component: ViewEditNote
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