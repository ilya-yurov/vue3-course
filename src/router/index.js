import { createRouter, createWebHistory } from 'vue-router';
import {
    ABOUT,
    HOME,
    POSTS,
    POST,
    STORE,
    COMPOSITION
} from '@/constant/routes';

const routes = [
    {
        path: HOME,
        name: 'main',
        component: () => import('@/pages/Home')
    },
    {
        path: POSTS,
        name: 'posts',
        component: () => import('@/pages/Posts')
    },
    {
        path: ABOUT,
        name: 'about',
        component: () => import('@/pages/About')
    },
    {
        path: POST,
        name: 'post',
        component: () => import('@/pages/Post')
    },
    {
        path: STORE,
        name: 'store',
        component: () => import('@/pages/PostsWithStore')
    },
    {
        path: COMPOSITION,
        name: 'composition',
        component: () => import('@/pages/Composition')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
