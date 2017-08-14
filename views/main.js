var html = require('choo/html')
var css = require('sheetify')
var path = require('path')
var fs = require('fs')

var title = 'stef'
var items = [
    { id: 'lifeisstrange', url: 'http://www.feralinteractive.com/en/games/lifeisstrange/' },
    { id: 'companyofheroes2', url: 'http://www.feralinteractive.com/en/games/companyofheroes2/' },
    { id: 'madmax', url: 'http://www.feralinteractive.com/en/games/madmax/' },
    { id: 'winningsolutions', url: 'http://www.winningsolutions.co.uk' },
    { id: 'legomarvelsavengers', url: 'http://www.feralinteractive.com/en/mac-games/legomarvelsavengers/' },
    { id: 'alienisolation', url: 'http://www.feralinteractive.com/en/games/alienisolation/' },
    { id: 'dirtrally', url: 'http://www.feralinteractive.com/en/linux-games/dirtrally/' },
    { id: 'co600', url: 'https://github.com/srilq/GP-Unity-Shockwaves' },
    { id: 'cab1', url: 'https://github.com/srilq/taxi-game' },
    { id: 'cab2', url: 'https://github.com/srilq/taxi-game' }
]

var body = css`
  :host {
    background-color: #fff;
    background-image: url("/assets/bg4.png");
    background-image: -webkit-image-set(url("/assets/bg4.png") 1x, url("/assets/bg4@2x.png") 2x);
    background-image: image-set(url("/assets/bg4.png") 1x, url("/assets/bg4@2x.png") 2x);
    background-size: 24px;
    background-position: top center;
  }
`

module.exports = view

function view (state, emit) {
  if (state.title !== title) emit(state.events.DOMTITLECHANGE, title)
  items = items.map(function (item) {
    item.imgsrc = state.staticHost.base + '/assets/' + item.id + '.jpg'
    return item
  })
  var Ticker = require('./ticker')
  return html`
    <body class="${body}">
      ${Intro(emit)}
      ${Ticker(items, emit)}
    </body>
  `
}

function Intro (emit) {
  var introBox = css`
    :host {
      font-size: 1.1em;
    }
    @media (min-width: 365px) {
      :host .intro { font-size: 1.3em; }
    }
  `

  return html`
    <div class="item-box ${introBox}">
      <div class="row">
        <p class="intro">${fs.readFileSync(path.join(__dirname, '../assets/intro.txt'), 'utf8')}</p>
        <p>
          ${item('📮', 'hi@stef.sh', 'mailto:hi@stef.sh')}<br>
          ${item('📝', 'Please ask for my CV.')}<br>
          ${item('🌍', 'github.com/srilq', 'https://github.com/srilq')}<br>
          ${item('🌍', 'gitlab.com/srilq', 'https://gitlab.com/users/srilq/projects')}<br>
          ${item('🔎', 'View source', 'https://github.com/srilq/stef')}
        </p>
      </div>
    </div>
  `

  function item (char, text, url) {
    var span = html`<span></span>`
    span.innerHTML = char + '&nbsp;&nbsp;'
    if (url) span.appendChild(html`<a href="${url}">${text}</a>`)
    else span.appendChild(html`<span>${text}</span>`)
    return span
  }
}
