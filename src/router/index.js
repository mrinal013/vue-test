import { createRouter, createWebHashHistory  } from 'vue-router'
import Home from '../views/Home.vue'
import Showcase from '../views/top_menu_pages/Showcase.vue'
import Learn from '../views/top_menu_pages/Learn.vue'
import Themes from '../views/top_menu_pages/Themes.vue'
import Plugins from '../views/top_menu_pages/Plugins.vue'
import Mobile from '../views/top_menu_pages/Mobile.vue'
import Support from '../views/top_menu_pages/Support.vue'
import GetInvolved from '../views/top_menu_pages/GetInvolved.vue'
import About from '../views/top_menu_pages/About.vue'
import Blog from '../views/top_menu_pages/Blog.vue'
import Hosting from '../views/top_menu_pages/Hosting.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/showcase',
    name: 'Showcase',
    component: Showcase
  },
  {
    path: '/learn',
    name: 'Learn',
    component: Learn
  },
  {
    path: '/themes',
    name: 'Themes',
    component: Themes
  },
  {
    path: '/plugins',
    name: 'Plugins',
    component: Plugins
  },
  {
    path: '/mobile',
    name: 'Mobile',
    component: Mobile
  },
  {
    path: '/support',
    name: 'Support',
    component: Support
  },
  {
    path: '/get-involved',
    name: 'GetInvolved',
    component: GetInvolved
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/hosting',
    name: 'Hosting',
    component: Hosting
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
