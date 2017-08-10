var html = require('choo/html')

var TITLE = 'stef'
var INTRO = 'Stef is a 22yo computer science graduate (BSc), web developer and Unity developer, former designer for publications + marketing.'
var TICKER_ITEMS = [
    { id: 'winningsolutions', url: 'http://www.winningsolutions.co.uk' },
    { id: 'lifeisstrange', url: 'http://www.feralinteractive.com/en/games/lifeisstrange/' },
    { id: 'legomarvelsavengers', url: 'http://www.feralinteractive.com/en/mac-games/legomarvelsavengers/' },
    { id: 'dirtrally', url: 'http://www.feralinteractive.com/en/linux-games/dirtrally/' },
    { id: 'alienisolation', url: 'http://www.feralinteractive.com/en/games/alienisolation/' }
]

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)
  TICKER_ITEMS = TICKER_ITEMS.map(function (item) {
    item.image = state.staticBase + '/assets/' + item.id + '.jpg'
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
        <p>📮 <a href="mailto:hi@stef.sh">hi@stef.sh</a>
        <br>📝 Please ask for my CV.
        <br>🌍 <a href="https://github.com/srilq">github.com/srilq</a>
        <br>🌍 <a href="https://gitlab.com/users/srilq/projects">gitlab.com/srilq</a></p>
      </div>
    </div>
  `
}

function Ticker () {
  return html`
    <div class="home__ticker item-box">
      <div class="ticker ticker--video">
        <div class="ticker__wrapper">
          <div class="ticker__rot">
            <ul class="ticker__list">${tickerVideos()}${tickerVideos()}</ul>
          </div>
        </div>
      </div>
    </div>
  `

  function tickerVideos () {
    return TICKER_ITEMS.map(tickerVideo)
  }

  function tickerVideo (item) {
    return html`
      <li class="ticker__item ticker__item--image"><a href="${item.url}"><div class="ticker__media ticker__media--image image"><img src="${item.image}"></div></a></li>
    `
  }
}
