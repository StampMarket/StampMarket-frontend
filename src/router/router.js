import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../views/Landing.vue')
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