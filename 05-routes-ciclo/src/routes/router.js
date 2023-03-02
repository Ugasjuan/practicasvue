import { createRouter, createWebHashHistory } from "vue-router";


const routes = [{
        path: '/',
        component: () =>
            import ("@/modules/pokemon/pages/ListPage.vue")
    },
    {
        path: '/:id',
        name: 'pokemon-id',
        component: () =>
            import ("@/modules/pokemon/pages/PokemonPage.vue"),
        props: (route) => {
            const id = Number(route.params.id);
            return isNaN(id) ? { id: 1 } : { id }
        }
    },
    {
        path: '/about',
        component: () =>
            import ("@/modules/pokemon/pages/AboutPage.vue")
    },
    {
        path: '/:pathMatch(.*)*',
        component: () =>
            import ("@/modules/shared/pages/NoPageFound.vue")
    },
]


const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})


export default router