var html = require('bel')
var raw = require('bel/raw')
var css = require('sheetify')

var title = 'stef.sh'

module.exports = view

function view (state, emit) {
  if (state.title !== title) emit(state.events.DOMTITLECHANGE, title)

  return html`
    <body>
      ${Intro(emit)}
    </body>
  `
}

function Intro (emit) {
  var introBox = css`
    :host {
      font-size: 1.1em;
    }
    :host .intro {
      font-size: 1.3em;
    }
  `

  return html`
    <div class="item-box ${introBox}">
      <div class="row">
        <p>
          ${item('📮', 'stef@srilq.email', 'mailto:stef@srilq.email')}<br>
          ${item('🌍', 'github.com/srilq', 'https://github.com/srilq')}<br>
          ${item('🔎', 'View source', 'https://github.com/srilq/stef')}
        </p>
      </div>
    </div>
  `

  function item (char, text, url) {
    return html`
      <span>
        ${raw(char + ' &nbsp; ')}
        ${url ? html`<a href="${url}">${text}</a>` : text}
      </span>
    `
  }
}
