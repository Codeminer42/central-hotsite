const http  =  require('http')
const app  = require('./config/express.js')();
const logger = require('logger')

http.createServer(app)
  .listen(app.get('port'), () => {
    console.log(`Server is running: ${app.get('port')}`);
  });
