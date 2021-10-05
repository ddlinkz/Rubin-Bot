const fs = require('fs')

const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('server/mock/mock.json')
const middlewares = jsonServer.defaults()

router.db._.id = 'tweet_id';

server.use(jsonServer.bodyParser);

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// Set custom router
var routes = JSON.parse(fs.readFileSync('server/mock/routes.json'));
server.use(jsonServer.rewriter(routes));

// In this example, returned resources will be wrapped in a body property
router.render = (req, res) => {
  res.jsonp({
    data: res.locals.data
  })
}

server.use(router)
server.listen(5000, () => {
	console.log('JSON Server is running');
})