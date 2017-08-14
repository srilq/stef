var html = require('choo/html')
var css = require('sheetify')

module.exports = Ticker

function Ticker (items, emit) {
  var ticker = css`
    :host {
      width: 30000px;
      overflow-x: visible;
      margin: 1rem 0;
    }
    :host ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      position: relative;
    }
    :host li {
      width: 50rem;
      max-width: 80vw;
      overflow: hidden;
      margin-right: 1rem;
      display: inline-block;
    }
    :host img {
      width: 100%;
      display: block;
    }
    :host .rotator {
      display: inline-block;
    }
    :host .rotator ul {
      -webkit-animation: ticker-rotate 40s linear infinite;
      animation: ticker-rotate 40s linear infinite;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    @media (min-width: 600px) {
      :host .rotator ul:hover { -webkit-animation-play-state: paused; }
      :host .rotator ul:hover { animation-play-state: paused; }
    }
    @media (max-width: 599px) {
      :host img {
        min-width: 177.78%;
        margin-left: -39%;
      }
    }
    @keyframes ticker-rotate {
      0% { left: -25%; }
      100% { left: -75%; }
    }
  `

  return html`
    <div class="item-box">
      <div class="${ticker}">
        <div class="rotator">
          ${ul(items)}
        </div>
      </div>
    </div>
  `

  function ul (items) {
    var ul = html`<ul></ul>`
    var lis = items.map(li)
    lis = lis.concat(lis.map(item => item.cloneNode(true)))
    lis.forEach(item => ul.appendChild(item))
    return ul

    function li (item) {
      var li = html`<li></li>`
      var imgParent = li
      var img = html`<img src="${item.imgsrc}">`
      if (item.url) {
        imgParent = html`<a href="${item.url}"></a>`
        li.appendChild(imgParent)
      }
      imgParent.appendChild(img)
      return li
    }
  }
}
