module.exports = function(app) {
  // Install a "/ping" route that returns "pong"
  app.get('/ping', function(req, res) {
    res.send('pong');
  });
  //Routing in express way
  var router = app.loopback.Router();
  router.get('/pingexpress', function(req, res) {
    res.send('pongaroo');
  });
  app.use(router);
}
