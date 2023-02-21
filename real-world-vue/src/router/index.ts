import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
import EventDetailView from '../views/EventDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: {
        name: 'EventListView'
      },
    },
    {
      path: '/list',
      name: 'EventListView',
      component: EventListView,
      props: route => ({
        page:  Number(route.query.page) || 1,
      })
    },
    {
      name: 'EventDetailView',
      path: '/event/:id',
      props: true,
      component: EventDetailView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
  ],
})

export default router
