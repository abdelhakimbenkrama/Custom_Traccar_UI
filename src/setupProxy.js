const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app) {
    app.use( '/api/socket', 
    createProxyMiddleware({
         target: 'ws://localhost:8082' ,
         ws:true ,
        changeOrigin: true,
    }
    ));
    app.use('/api',
          createProxyMiddleware( 
        { target: 'http://localhost:8082' ,
        changeOrigin: true,
    }
    ));
}

