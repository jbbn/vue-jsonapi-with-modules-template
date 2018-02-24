export default ({ routes, store, resource, modules, route }) => {
  console.debug('registerModules', resource)

  const newStore = modules.store()

  routes = modules.routes.forEach(_route => {

    if (route.alias) {
      route.alias.forEach(item => {
        const [ match, alias ] = item.split('=')
        if (_route.path === match) _route.path = alias
      })
    }

    if (route.props) _route.props = route.props

    routes.push(_route)
  })

  store.state = Object.assign({}, store.state, newStore.state)
  store.actions = Object.assign({}, store.actions, newStore.actions)
  store.mutations = Object.assign({}, store.mutations, newStore.mutations)
  store.getters = Object.assign({}, store.getters, newStore.getters)
}
