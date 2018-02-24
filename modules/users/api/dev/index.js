const { setConfig, define, start } = require("jsonapi-server")
const fs = require("fs")
const path = require("path")
const modules = require('..')

const port = process.env.PORT || 3000

setConfig({
  port,
  graphiql: false
})

modules(define)

start()
