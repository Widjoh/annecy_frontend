import {createRouter, createWebHistory} from 'vue-router';
import Home from '../views/HomeView.vue';
import Pricing from '../views/Pricing.vue';
import Contact from '../views/Contact.vue';

const routes = [
    {
        path: '/',
        name: 'Accueil',
        component: Home,
    },

    {
        path: '/pricing',
        name: 'Tarifs',
        component: Pricing,
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/', // Redirect to the home route
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = to.name;
    next();
});
// Add a navigation guard to check authentication status

// router.beforeEach(async (to, from, next) => {
//     const isAuthenticated = !!localStorage.getItem('token');
//
//     if (to.meta.requiresAuth && !isAuthenticated) {
//         next('/Login');
//     } else if (to.meta.requiresAuth && isAuthenticated) {
//         try {
//             const response = await axios.get(process.env.VUE_APP_ROOT_API + 'user', {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem('token')}`
//                 }
//             });
//             if (response.status === 200) {
//                 next();
//             } else {
//                 next('/Login');
//             }
//         } catch (error) {
//             console.error(error);
//             next('/Login');
//         }
//     } else {
//         next();
//     }
// });


export default router;
