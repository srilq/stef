var html = require('choo/html')
var css = require('sheetify')
var path = require('path')
var fs = require('fs')

var title = 'stef'
var items = [
  {
    id: 'lifeisstrange',
    alt: 'Life Is Strange™ for Mac and Linux | Feral Interactive',
    url: 'http://www.feralinteractive.com/en/games/lifeisstrange/'
  },
  {
    id: 'companyofheroes2',
    alt: 'Company of Heroes 2 for Mac and Linux | Feral Interactive',
    url: 'http://www.feralinteractive.com/en/games/companyofheroes2/'
  },
  {
    id: 'madmax',
    alt: 'Mad Max for Mac and Linux | Feral Interactive',
    url: 'http://www.feralinteractive.com/en/games/madmax/'
  },
  {
    id: 'winningsolutions',
    alt: 'Winning Solutions Ltd.',
    url: 'http://www.winningsolutions.co.uk'
  },
  {
    id: 'legomarvelsavengers',
    alt: 'LEGO® Marvel\'s Avengers for Mac | Feral Interactive',
    url: 'http://www.feralinteractive.com/en/mac-games/legomarvelsavengers/'
  },
  {
    id: 'alienisolation',
    alt: 'Alien: Isolation™ for Mac and Linux | Feral Interactive',
    url: 'http://www.feralinteractive.com/en/games/alienisolation/'
  },
  {
    id: 'dirtrally',
    alt: 'DiRT Rally for Linux | Feral Interactive',
    url: 'http://www.feralinteractive.com/en/linux-games/dirtrally/'
  },
  {
    id: 'co600',
    alt: 'https://github.com/srilq/GP-Unity-Shockwaves',
    url: 'https://github.com/srilq/GP-Unity-Shockwaves'
  },
  {
    id: 'cab1',
    alt: 'https://github.com/srilq/taxi-game',
    url: 'https://github.com/srilq/taxi-game'
  },
  {
    id: 'cab2',
    alt: 'https://github.com/srilq/taxi-game',
    url: 'https://github.com/srilq/taxi-game'
  }
]

var body = css`
  :host {
    background-color: #ffc6ef;
    background-image: url("/assets/bg5_32.png");
    background-image: -webkit-image-set(url("/assets/bg5_32.png") 1x, url("/assets/bg5_32@2x.png") 2x);
    background-image: image-set(url("/assets/bg5_32.png") 1x, url("/assets/bg5_32@2x.png") 2x);
    background-size: 32px;
    background-position: top center;
  }
`

module.exports = view

function view (state, emit) {
  if (state.title !== title) emit(state.events.DOMTITLECHANGE, title)
  items = items.map(item => {
    item.imgsrc = '/assets/' + item.id + '.jpg'
    return item
  })
  var Ticker = require('./ticker')
  return html`
    <body class="${body}">
      <main role="main">
        ${Intro(emit)}
        ${Ticker(items, emit)}
      </main>
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
          ${item('📮', 'stef@srilq.email', 'mailto:stef@srilq.email')}<br>
          ${item('📚', 'CV on stackoverflow.com', 'https://stackoverflow.com/story/srilq')}<br>
          ${item('📝', 'Please ask for my full CV.')}<br>
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
