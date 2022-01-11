import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Events from '../views/Events.vue'
import General from '../views/General.vue'
import Add from "../views/Add";

const routes = [
  {
    path: '/',
    alias: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/home/general',
        component: General
      },
      {
        path: '/home/add',
        component: Add
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/events',
    name: 'Events',
    component: Events
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
