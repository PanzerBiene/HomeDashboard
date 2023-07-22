import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Items from '../views/Items.vue';
import AI from '../views/AI.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/items',
      name: 'items',
      component: Items
    },
    {
      path: '/chat',
      name: 'ai_chat',
      component: AI
    }
  ]
});

export default router;
