import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
Vue.prototype.$axios = axios

import iView from 'iview'
import 'iview/dist/styles/iview.css' // 使用 CSS
Vue.use(iView);


Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
