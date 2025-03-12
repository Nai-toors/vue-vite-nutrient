import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import NutrientView from '../views/NutrientView.vue'  // ваша nutrient-страница

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/nutrient',
    name: 'Nutrient',
    component: () => import('../layouts/FullscreenLayout.vue'),
    children: [
      {
        path: '',
        component: NutrientView,
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
