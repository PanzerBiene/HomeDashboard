import { createRouter, createWebHistory } from 'vue-router';
import App from '../App.vue';
import Items from '../views/Items.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: App
    },
    {
      path: '/items',
      name: 'items',
      component: Items
    }
  ]
});

export default router;
