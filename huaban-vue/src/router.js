import Vue from 'vue'
import Router from 'vue-router'
import NotFound from './views/NotFound.vue'
import Home from './views/Home.vue'
import HomeXq from './views/HomeXq.vue'
import Abaut from './views/Abaut.vue'
import Gallery from './views/Gallery.vue'
import Contact from './views/Contact.vue'


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/homexq', component: HomeXq },
    { path: '/abaut', component: Abaut },
    { path: '/gallery', component: Gallery },
    { path: '/contact', component: Contact },
    { path: '*', component: NotFound }
  ]
})
