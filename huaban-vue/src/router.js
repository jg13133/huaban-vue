import Vue from 'vue'
import Router from 'vue-router'
import NotFound from './views/NotFound.vue'
import Home from './views/Home.vue'
import Abaut from './views/Abaut.vue'
import Gallery from './views/Gallery.vue'
import Pages from './views/Pages.vue'
import Contact from './views/Contact.vue'


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/abaut', component: Abaut },
    { path: '/gallery', component: Gallery },
    { path: '/pages', component: Pages },
    { path: '/contact', component: Contact },
    { path: '*', component: NotFound }
  ]
})
