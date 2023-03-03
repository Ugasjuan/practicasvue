import { createRouter, createWebHashHistory } from "vue-router";


const routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/pokemon',
        name: 'pokemon',
        component: () =>
            import ("@/modules/pokemon/layouts/pokemonLayouts.vue"),
        children: [{
                path: 'home',
                name: 'pokemon-home',
                component: () =>
                    import ("@/modules/pokemon/pages/ListPage.vue")
            },
            {
                path: 'pokemonid/:id',
                name: 'pokemon-id',
                component: () =>
                    import ("@/modules/pokemon/pages/PokemonPage.vue"),
                props: (route) => {
                    const id = Number(route.params.id);
                    return isNaN(id) ? { id: 1 } : { id }
                }
            },
            {
                path: 'about',
                name: 'pokemon-about',
                component: () =>
                    import ("@/modules/pokemon/pages/AboutPage.vue")
            },
            {
                path: '',
                redirect: { name: 'pokemon-about' }
            },

        ]

    },
    {
        path: '/dbz',
        name: 'dbz',
        component: () =>
            import ("@/modules/dbz/layouts/dbzlaout.vue"),
        children: [{
                path: 'personajes',
                name: 'dbz-personajes',
                component: () =>
                    import ("@/modules/dbz/pages/Characters.vue")
            },
            {
                path: 'about',
                name: 'about-dbz',
                component: () =>
                    import ("@/modules/dbz/pages/About.vue"),
            },
            {
                path: '',
                redirect: { name: 'dbz-personajes' }
            },

        ]

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