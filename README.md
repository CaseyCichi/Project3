

1. Express Routing https://stackoverflow.com/questions/27227650/difference-between-app-use-and-router-use-in-express

    #router.use(); 
        mounts middleware for the routes served by the specific router

    #app.use();  
        mounts middleware for all routes of the app (or those matching the routes specified
        if you use app.use('/ANYROUTESHERE', yourMiddleware());).

    #Example 1
        An app with one router with standard routes and one router that handles api routes, which need a valid user.
        You would then mount the authentication middleware for the api router only with 
            
            router.use(yourAuthMiddleware());.
            
    #Example 2
        If your app requires a valid user for all routes, mount the middleware for the app with 
        
            app.use(yourAuthMiddleware());
    
    #Example 3
        Route:/first/sud
        
        var app = express();
        var router = express.Router();

        // Mount the router as middleware at path /first
        app.use('/first', router); 
        router.get('/sud', smaller);
        router.get('/user', bigger);

        router.get('/', universalLoader);

        app.use('/first', fun);
        app.get('/sud', bigger);
        app.get('/user', smaller);

    #Example 4
    
    1. app.js
        var express = require('express');
        var rootRoutes = require('./routes/index');
        var userRoutes = require('./routes/user');

        var app = express();

        app.use('/', rootRoutes);
        app.use('/user', userRoutes);

        module.exports = app;


    2. routes/index.js
        var express = require('express');
        var router = express.Router();

        router.get('/', function(req, res) {
        res.render('index.jade');
        });

        router.get('/about', function(req, res) {
        res.render('about.jade');
        });

        module.exports = router;

     3. routes/user.js
        
        var express = require('express');
        var router = express.Router();

        router.get('/:name', function(req, res) {
        var userName = req.params.name;
        res.render('user.jade', {
            userName: userName
        });
        });

        module.exports = router;