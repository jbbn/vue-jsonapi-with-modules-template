import Vue from 'vue'
import Router from 'vue-router'
import Vuex from "vuex"
import Demonstration from './demonstration'
import routes from '../routes'
import store from '../store'

import UsersListPage from '../UsersListPage'
import UserPage from '../UserPage'

Vue.use(Router)
Vue.use(Vuex)

// Examples
routes.push({
  path: '/example',
  component: UsersListPage,
  props: {
    users: [
      { id: '1', name: 'José', address: { city: 'São Paulo' } },
      { id: '2', name: 'Jaiminho', address: { city: 'São Paulo' } },
      { id: '3', name: 'Raphael', address: { city: 'São Paulo' } }
    ]
  }
})
routes.push({
  path: '/example/user/1',
  component: UserPage,
  props: { id: '1' }
})

new Vue ({
  el: '#app',
  router: new Router({ routes }),
  store: new Vuex.Store(store()),
  render: h => h(Demonstration)
})
