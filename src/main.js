import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n'
import filters from './filters'
import plugins from './plugins'
import router from './router'
import FontAwesome from './FontAwesome'
import 'flag-icon-css/css/flag-icon.css'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(FontAwesome)
Vue.use(filters)
Vue.use(plugins)

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
