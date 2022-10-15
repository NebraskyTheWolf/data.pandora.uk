const config = require('./src/app/config/config.json');

const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();

const fs = require("fs");
const https = require('https');

const privateKey  = fs.readFileSync(config.security.ssl.key, 'utf8');
const certificate = fs.readFileSync(config.security.ssl.crt, 'utf8');
const credentials = {key: privateKey, cert: certificate};

const httpsServer = https.createServer(credentials, app);

app.use(express.static('public'));
app.set('trust proxy', 1);

const sessionHandler = session({
    secret: 'oGKdTGBHmCQgB4UNme',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
});

app.use(bodyParser.json());
app.use(function (req, res, next) {
  if (!req.accepts('json'))
    return res.status(400).json({status: false, error: 'API only accept JSON.'});
  next();
});

app.get('/', function (req, res) {
    res.status(200).json({
        name: 'PANDORA DATA SERVER',
        version: config.version,
        author: {
            email: 'farfy.dev@gmail.com',
            name: 'NebraskyTheWolf'
        },
        isDev: config.isDev
    });
});

const auth = require('./src/middlewares/Authentication');
const routes = require('./src/app/config/routes');
for (var route in routes) {
  // get method
  if (route.split(' ').length > 1) {
    var method = route.split(' ')[0];
    var url = route.split(' ')[1];
  } else {
    var method = 'get';
    var url = route;
  }
  // get controller & method
  if (typeof routes[route] === 'string') { // not protected
    var controller = routes[route].split('.')[0];
    var action = routes[route].split('.')[1];
  } else { // protected
    var controller = routes[route].function.split('.')[0];
    var action = routes[route].function.split('.')[1];

    if (routes[route].protected) {
      // init protected route
      app[method](url, auth, require('./src/controllers/' + controller)[action]);
      continue
    }
  }
  // init route
  app[method](url, require('./src/controllers/' + controller)[action]);
}

app.use(function (req, res, next) {
    res.status(404).json({
        status: false,
        error: 'INVALID_REQUEST',
        message: 'The method asked is not valid.'
    });
});
  
app.use(function (err, req, res, next) {
    res.status(500).json({
        status: false, 
        error: 'INTERNAL_SERVER_ERROR', 
        message: 'An error has occured.'
    });
});

httpsServer.listen(config.port, function() {
    console.log('[+] Listening to port ' + config.port);
});