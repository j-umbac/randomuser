import { RouteRecordRaw } from 'vue-router';
import { RouteName } from '@/constants/route-names';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: RouteName.Home,
    component: () => import('../views/Home.vue'),
    props: true,
  },
  {
    path: '/:page',
    name: RouteName.List,
    component: () => import('../views/Home.vue'),
    props: true,
  },
  {
    path: '/user/:id',
    name: RouteName.User,
    component: () => import('../views/Home.vue'),
    props: true,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
  },
];

export default routes;
