import { createRouter, createWebHistory } from "vue-router";
import { authUserStore } from "../store/auth";
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/Dashboard.vue'
import Layout from '../components/Layout.vue'
import AuthLayout from '../components/AuthLayout.vue'
import Test from '../views/Test2.vue'
import Departments from '../views/Departments/Index.vue'
import EditUSer from '../views/User/EditUSer.vue'

const routes = [
    {
        path: '/auth',
        redirect: '/login',
        name: 'Auth',
        component: AuthLayout,
        children: [
            {
                path: '/login',
                name: 'Login',
                component: Login
            }, {
                path: '/register',
                name: 'Register',
                component: Register
            }
        ]
    },
    {
        path: '/',
        redirect: '/dashboard',
        component: Layout,
        meta:{requiresAuth:true},
        children: [
            { path: '/dashboard', name: 'Dashboard', component: Dashboard },
            { path: '/departments', name: 'Departments', component: Departments },
            { path: '/user', name: 'EditUSer', component: EditUSer },

        ]

    }
]

const router = createRouter(
    {
        history: createWebHistory(),
        routes
    }

)
router.beforeEach(async (to) => {
    const publicPages = ['/login', '/register']
    const authRequired = !publicPages.includes(to.path)
    const auth = authUserStore()
    if (authRequired && !auth.getUser) {
        auth.returnUrl = to.fullPath
        return '/login'
    }
})
export default router