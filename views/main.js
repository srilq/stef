var html = require('choo/html')

var TITLE = 'stef'
var INTRO = 'Stef is a 22yo computer science graduate (BSc), web developer and Unity developer, former designer for publications + marketing.'
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

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)
  TICKER = TICKER.map(function (item) {
    item.image = state.staticHost.base + '/assets/' + item.id + '.jpg'
    return item
  })
  return html`
    <body>
      <div class="home page">
        ${Intro()}
        ${Ticker()}
      </div>
    </body>
  `
}

function Intro () {
  return html`
    <div class="home__intro item-box">
      <div class="row">
        <p class="home__intro-text">${INTRO}</p>
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
    <div class="home__ticker item-box">
      <div class="ticker ticker--video">
        <div class="ticker__wrapper">
          <div class="ticker__rot">
            <ul class="ticker__list">${items(TICKER)}${items(TICKER)}</ul>
          </div>
        </div>
      </div>
    </div>
  `

  function items (ticker) {
    return ticker.map(item)

    function item (item) {
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
