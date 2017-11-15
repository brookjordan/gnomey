const app = require('../init/app.js');
const homeRoute = require('../routes/home');

module.exports = function() {
  app.get('/', homeRoute);
};
