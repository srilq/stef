var css = require('sheetify')
var choo = require('choo')

css('sanitize.css')
css('./scss/main.scss')

var app = choo()

if (process.env.NODE_ENV === 'development') {
  app.use(require('choo-devtools')())
  app.use(require('choo-log')())
  app.use(require('choo-service-worker/clear')())
}
app.use(require('choo-service-worker')())

app.use(staticURL)
app.route('/', require('./views/main'))
app.route('/*', require('./views/404'))

if (!module.parent) app.mount('body')
else module.exports = app

function staticURL (state) {
  state.staticBase = 'http://static.stef.sh'
}
