import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './Routes/route'
import vueResource from 'vue-resource';
import {store} from './store/store';

Vue.config.productionTip = false

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(vueResource);
Vue.use(VueRouter);
const router=new VueRouter({
  routes:Routes,
  mode:'history'
});

new Vue({
  render: h => h(App),
  router:router,
  store:store
}).$mount('#app')
