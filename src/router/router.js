import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

const routes = createRouter({
    history: createWebHistory(),
    routes: [

    ]
})

function forbiddenRoute(next) {
    console.log('forbiddenRoute')
    next('/login')
}

routes.beforeEach((to, from, next) => {
    const isLogin = localStorage.getItem('token') ? true : false;
    if (to.path == '/login') {
        next();
    } else {
        isLogin ? next() : forbiddenRoute(next);
    }
})



export default router;