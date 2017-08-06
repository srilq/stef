var html = require('choo/html')

var TITLE = 'stef'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)
  return html`
    <body>
      what is up dog
    </body>
  `
}
