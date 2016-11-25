import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import albumpage from './components/albumpage'
import imagepage from './components/imagepage'
import index from './components/index'
Vue.use(VueRouter)
/* eslint-disable no-new */
const routes = [
  { path: '/albumpage', component: albumpage },
  { path: '/imagepage', component: imagepage },
  { path: '/', component: index }
]
const router = new VueRouter({
  routes // short for routes: routes
});
(function (d, s, id) {
  var js
  var fjs = d.getElementsByTagName(s)[0]
  if (d.getElementById(id)) return
  js = d.createElement(s); js.id = id
  js.src = '//connect.facebook.net/en_US/sdk.js'
  fjs.parentNode.insertBefore(js, fjs)
}(document, 'script', 'facebook-jssdk'))

new Vue({
  router,
  template: '<App/>',
  components: { App },
  el: '#app',
  render: h => h(App) // Start component App.vue
}).$mount('#app')

/* eslint-disable no-new */
