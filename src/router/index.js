import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Registro from '../views/Registro.vue'
import Acceso from '../views/Acceso.vue'
import Panel from '../views/Panel.vue'
import DetallesPokemon from '../views/DetailsPokemon.vue'
import RickNMorty from '../views/RickMorty.vue'


import {auth} from '../firebase'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/registro',
    name: 'Registro',
    component: Registro
  },
  {
    path: '/acceder',
    name: 'Acceder',
    component: Acceso
  },
  {
    path: '/home',
    name: 'Panel',
    component: Panel,
    meta: {requiresAuth: true}
  },
  {
    path: '/pokemon-detail/:id',
    name: 'DetailsPokes',
    component: DetallesPokemon,
    meta: {requiresAuth: true}
  },
  {
    path: '/rick-morty/',
    name: 'RickMorty',
    component: RickNMorty,
    meta: {requiresAuth: true}
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    const usuario = auth.currentUser
    console.log("usuario desde router: "+usuario)

    if(!usuario){
      next('/')
    }else{
      next()
    }
  } else {
    next()
  }
})

export default router
