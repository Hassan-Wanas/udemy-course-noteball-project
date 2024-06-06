import { createRouter, createWebHashHistory} from 'vue-router'
import { useStoreAuth } from '@/stores/storeAuth'
import ViewNotes from '@/Views/ViewNotes.vue'
import ViewStats from '@/Views/ViewStats.vue'
import ViewEditNote from '@/Views/ViewEditNote.vue'
import ViewAuth from '@/Views/ViewAuth.vue'

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
  },
  {
    path: '/auth',
    name: 'auth',
    component: ViewAuth
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


router.beforeEach(async (to, from) => {
  const storeAuth = useStoreAuth()
  console.log('to: ', to)
  if (!storeAuth.user.id && to.name !== 'auth') {
    return { name: 'auth' }
  }
  if (storeAuth.user.id && to.name === 'auth') {
    return false
  }
})


export default router