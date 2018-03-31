// config/initializers/database.js

var nconf = require('nconf')
var mongoose = require('mongoose')
require('../../app/models/leitos') // created model loading here

module.exports = function (cb) {
  'use strict'
  mongoose.Promise = global.Promise
  var dbConfig = nconf.get('database')
  var dbAuth = (dbConfig.user === '' && dbConfig.password === '') ? '' : dbConfig.user + ':' + dbConfig.password + '@'

  mongoose.connect('mongodb://' + dbAuth + dbConfig.server + ':' + dbConfig.port + '/' + dbConfig.name, { useMongoClient: true }, function (error) {
    // Check error in initial connection. There is no 2nd param to the callback.
    if (!error) cb()
  })
}
