const app = require('../init/app.js');

require('../routes/init')();

module.exports = function({
  port     = 3000,
  callback = () => console.log(`Example app listening on port ${ port }!`),
} = {}) {
  app.listen(port, callback);
};
