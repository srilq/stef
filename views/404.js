var html = require('choo/html')

var TITLE = '404'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)
  return html`
    <body class="error 404">
      <div class="error404 page">
          <div class="error404__404">404</div>
      </div>
    </body>
  `
}
