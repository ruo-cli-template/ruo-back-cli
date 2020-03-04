export default [
    {
        path: '/',
        name: 'index',
        redirect: '/dashboard',
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import( /* webpackChunkName: "dashboard" */ '@/pages/dashboard/index.vue'),
        meta: {
            title: "首页",
            keepAlive: true
        }
    }
]