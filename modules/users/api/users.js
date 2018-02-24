const { Joi } = require('jsonapi-server')
const fs = require('fs')
const RestHandler = require('jsonapi-handler-rest')

module.exports = function (define) {
  define({
    resource: 'users',
    handlers: new RestHandler({
      url: 'http://jsonplaceholder.typicode.com/users'
    }),
    attributes: {
      name: Joi.string(),
      username: Joi.string(),
      email: Joi.string(),
      address: Joi.object().keys({
        street: Joi.string(),
        suite: Joi.string(),
        zipcode: Joi.string(),
        city: Joi.string(),
        geo: Joi.object().keys({
          lat: Joi.string(),
          lng: Joi.string()
        })
      }),
      phone: Joi.string(),
      website: Joi.string(),
      company: Joi.object().keys({
        name: Joi.string(),
        catchPhrase: Joi.string(),
        bs: Joi.string()
      })
    }
  })
}
