import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../layout/Layout.vue'),
            children: [
                {
                    path: '',
                    name: 'Home',
                    component: () => import('../views/Landing.vue'),
                    meta: {
                        title: 'Landing'
                    }
                },
                {
                    path: '/order',
                    name: 'Order',
                    component: () => import('../views/Order.vue'),
                    meta: {
                        title: 'Order',
                        requiresAuth: true

                    }
                }
            ]
        },
        {
            path: '/Home',
            redirect: '/'
        }

    ]
})

function forbiddenRoute(next) {
    console.log('forbiddenRoute')
    next('/login')
}

// router.beforeEach((to, from, next) => {
//     const isLogin = localStorage.getItem('token') ? true : false;
//     if (to.path == '/login') {
//         next();
//     } else {
//         isLogin ? next() : forbiddenRoute(next);
//     }
// })



export default router;