let debug = require('debug')('vue-jsonapi-with-modules:registerModules:api')

module.exports = ({ resource, modules, define }) => {
  debug('registerModules', resource)
  modules(define)
}
