import { createRouter, createWebHistory } from 'vue-router';
import AdminRouter from './AdminRouter.js';
import HomeRouter from './HomeRouter.js';

const routes = [...AdminRouter, ...HomeRouter];

const router = createRouter({
    history: createWebHistory(),
    routes,
    // routes: [
    //     {
    //   path: '/:catchAll(.*)',
    //   name: 'NotFound',
    //   component: NotFound
    // }
    // ]
});

export default router;