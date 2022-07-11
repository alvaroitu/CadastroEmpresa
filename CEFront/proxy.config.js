const proxy = [
    {
      context: '/home',
      target: 'http://localhost:8080',
      pathRewrite: {'^/home' : ''}
    }
  ];
  module.exports = proxy;