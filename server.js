const http  =  require('http')
const app  = require('./config/express.js')();

http.createServer(app)
  .listen(app.get('port'), () => {
    console.log(`Server is running: ${app.get('port')}`);
  });
