const { setConfig, define, start } = require('jsonapi-server')
const fs = require('fs')
const path = require('path')
const registerModules = require('./registerModules')

setConfig({
  port: 3000,
  graphiql: false
})

registerModules({
  define,
  resource: 'users',
  modules: require('@vue-jsonapi-with-modules/users-module/api')
})

registerModules({
  define,
  resource: 'posts',
  modules: require('@vue-jsonapi-with-modules/posts-module/api')
})

start()
