const { Joi } = require('jsonapi-server')
const fs = require('fs')
const RestHandler = require('jsonapi-handler-rest')

module.exports = function (define) {
  define({
    resource: 'posts',
    handlers: new RestHandler({
      url: 'http://jsonplaceholder.typicode.com/posts'
    }),
    attributes: {
      userId: Joi.any(),
      title: Joi.string(),
      body: Joi.string()
    }
  })
}
