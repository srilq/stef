var css = require('sheetify')
var html = require('choo/html')

css('../scss/home.scss')

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
        <p>${INTRO}</p>
        <p><a href="mailto:srilq.me@gmail.com"><span class="icon email"><img src="/assets/email.svg"></span></a><a href="mailto:srilq.me@gmail.com">srilq.me@gmail.com</a></p>
        <p><span class="icon cv"><img src="/assets/cv.svg"></span> Please ask for my CV.</p>
        <p><a href="https://github.com/srilq"><span class="icon gitlab"><img src="/assets/github.svg"></span></a><a href="https://github.com/srilq">github.com/srilq</a></p>
        <p><a href="https://gitlab.com/users/srilq/projects"><span class="icon gitlab"><img src="/assets/gitlab.svg"></span></a><a href="https://gitlab.com/users/srilq/projects">gitlab.com/srilq</a></p>
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
      <li class="ticker__item ticker__item--image"><a href="${item.url}"><div class="ticker__media ticker__media--image image"><img src="/assets/${item.id}.jpg"></div></a></li>
    `
  }
}
