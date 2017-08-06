var html = require('choo/html')

var TITLE = '404'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)
  return html`
    <body>
      404
    </body>
  `
}
