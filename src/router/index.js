import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Items from '../views/Items.vue';
import AI from '../views/AI.vue';
import Preferences from '../views/Preferences.vue';
import Shopping_List from '../views/Shopping_List.vue';

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
    },
    {
      path: '/preferences',
      name: 'preferences',
      component: Preferences
    },
    {
      path: '/shopping_list',
      name: 'shopping list',
      component: Shopping_List
    }
  ]
});

export default router;
