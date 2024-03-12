import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StandardLayout from '@/components/StandardLayout.vue'
import CocktailSuche from '@/views/CocktailSuche.vue'
import EinzelansichtCocktails from "@/components/EinzelansichtCocktails.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {                                                             //start 13.2 davor siehe unten
      path: '/',
      component: StandardLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView
        },
        {                                     
          path: '/Buchstabe/:buchstabe?',
          name: 'mitBuchstabe',
          component: HomeView
        },   
        {                                                       //Start 14.1
          path: '/suche/:name?',
          name: 'cocktailSuche',
          component: CocktailSuche
        },                                                      //Ende 14.1   
        {                                                       //Start 16.2
          path: '/Cocktails/:id',
          name: 'CocktailEinzelansicht',
          component: EinzelansichtCocktails
        },                                                      //Ende 16.2                                                                                 
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        }
      ]
    }                                                           //Ende 13.2
    
  ]
})
export default router

//!!!!!!!OBEN ERST AB SCHRITT 13. DAVOR HIER UNTEN DAS ODER IN src/Vortrag/Index1.js!!!!!!

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: HomeView
//     },
//     {                                         //start 8.1
//       path: '/Buchstabe/:buchstabe?',
//       name: 'mitBuchstabe',
//       component: HomeView
//     },                                        //Ende
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import('../views/AboutView.vue')
//     }
//   ]
// })

// export default router
