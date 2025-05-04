const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://urbancare-backend.onrender.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api/v1', // rewrite path
      },
    })
  );
};