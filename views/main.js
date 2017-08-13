var html = require('choo/html')
var css = require('sheetify')

var TITLE = 'stef'
var INTRO = 'Stef is a 22yo computer science graduate (BSc), web developer, Unity developer and former marketing designer.'
var TICKER = [
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

var main = css`
  @import '../scss/global';
  :host {
    background-color: #fff;
    $background-size: 15px 15px;
    @include retina-image($static-base + '/assets/bg', $background-size, 'png');
    background-size: $background-size;
    background-position: top center;
    background-repeat: repeat;
    background-attachment: fixed;
  }
`

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)
  TICKER = TICKER.map(function (item) {
    item.image = state.staticHost.base + '/assets/' + item.id + '.jpg'
    return item
  })
  return html`
    <body>
      <div class="page ${main}">
        ${Intro()}
        ${Ticker()}
      </div>
    </body>
  `
}

function Intro () {
  var introBox = css`
    :host {
      font-size: 1.1em;

      .intro {
        font-size: 1.4em;
        @media screen and (max-width: 365px) { font-size: 1.2em; }
      }
    }
  `

  return html`
    <div class="item-box ${introBox}">
      <div class="row">
        <p class="intro">${INTRO}</p>
        <p>
          ${link('📮', 'hi@stef.sh', 'mailto:hi@stef.sh')}
          <br>${link('📝', 'Please ask for my CV.')}
          <br>${link('🌍', 'github.com/srilq', 'https://github.com/srilq')}
          <br>${link('🌍', 'gitlab.com/srilq', 'https://gitlab.com/users/srilq/projects')}
          <br>${link('🔎', 'Source', 'https://github.com/srilq/stef')}
        </p>
      </div>
    </div>
  `

  function link (pretext, text, url) {
    var span = html`<span></span>`
    span.innerHTML = pretext + '&nbsp;&nbsp;'
    if (url) span.appendChild(html`<a href="${url}">${text}</a>`)
    else span.appendChild(html`<span>${text}</span>`)
    return span
  }
}

function Ticker () {
  return html`
    <div class="item-box">
      <div class="ticker">
        <div class="ticker__wrapper">
          <div class="ticker__rot">
            ${ul(TICKER)}
          </div>
        </div>
      </div>
    </div>
  `

  function ul (ticker) {
    var ul = html`<ul class="ticker__list"></ul>`
    var items = ticker.map(li)
    items = items.concat(items.map(item => item.cloneNode(true)))
    items.forEach(item => ul.appendChild(item))
    return ul

    function li (item) {
      var li = html`<li class="ticker__item ticker__item--image"></li>`
      var imageContainer = li
      var image = html`<div class="ticker__media ticker__media--image image"><img src="${item.image}"></div>`
      if (item.url) {
        imageContainer = html`<a href="${item.url}"></a>`
        li.appendChild(imageContainer)
      }
      imageContainer.appendChild(image)
      return li
    }
  }
}
