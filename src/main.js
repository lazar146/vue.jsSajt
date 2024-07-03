import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import "bootstrap/dist/css/bootstrap.css";
import main from "./components/pages/main.vue";
import shop from "./components/pages/shop.vue";
import cart from "./components/pages/cart.vue";
import login from "./components/pages/login.vue";
import register from "./components/pages/register.vue";
import admin from "./components/pages/admin.vue";
import store from "./store/store"
Vue.use(VueRouter)

const routes = [
  {path: "/main",component:main},{path: "/shop",component:shop},{path: "/login",component:login},{path: "/register",component:register},{path: "/cart",component:cart},{path: "/admin",component:admin}
 
]
const router = new VueRouter({
  routes 
})



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
