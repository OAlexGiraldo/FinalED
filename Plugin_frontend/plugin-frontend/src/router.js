import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import ProductCard from './components/ProductCard.vue';

const routes = [
  { path: '/', component: Home },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
