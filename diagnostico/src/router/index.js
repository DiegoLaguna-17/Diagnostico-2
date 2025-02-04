import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', name: 'Inicio', component: () => import('../views/Inicio.vue') },
  { path: '/inscripciones', name: 'Inscripciones', component: () => import('../views/Inscripciones.vue') }

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;