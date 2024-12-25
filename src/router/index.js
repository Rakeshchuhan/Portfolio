import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: '/about',
  //   name: 'about',

  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  { path: '/Serivice',
    name: 'Serivice',
     component: () => import('@/components/Serivice.vue') 
    },
  { path: '/homepage',
    name: 'homepage',
     component: () => import('@/components/HomePage.vue') 
    },
  { path: '/project',
    name: 'Project',
     component: () => import('@/components/Project.vue') 
  },
  { path: '/about',
    name: 'About',
     component: () => import('@/components/About.vue') 
  },
  { path: '/Experience',
    name: 'Experience',
     component: () => import('@/components/Experience.vue') 
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
