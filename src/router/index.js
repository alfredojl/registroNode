import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Validar from "../views/Validar.vue";
import Registrar from "../views/Registrar.vue";
import Asignar from "../views/Asignar.vue";
import Capturar from "../views/Capturar.vue";
// import Registrar from '../views/Registrar.vue'

Vue.use(VueRouter);

const routes = [{
        path: "*",
        redirect: "/",
    },
    {
        path: "/",
        name: "Login",
        component: Login,
        beforeEnter: (to, from, next) => {
            if (isAuthenticated()) next("/home");
            else next();
        },
    },
    {
        path: "/home",
        name: "Home",
        component: Home,
        beforeEnter: (to, from, next) => {
            if (isAuthenticated()) next();
            else next(false);
        },
    },
    {
        path: "/validar",
        name: "Validar",
        component: Validar,
        beforeEnter: (to, from, next) => {
            if (isAuthenticated()) next();
            else next(false);
        },
    },
    {
        path: '/registrar',
        name: 'Registrar',
        component: Registrar
    },
    {
        path: '/asignar',
        name: 'Asignar',
        component: Asignar
    },
    {
        path: '/capturar',
        name: 'Capturar',
        component: Capturar
    },
];

const isAuthenticated = () => {
    return !!localStorage.loggedIn;
};

const router = new VueRouter({
    // mode: 'history',
    routes,
});

export default router;