var html = require('choo/html')
var fs = require('fs')
var path = require('path')

var TITLE = 'stef'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)
  return html`
    <body>
      <div class="home page">
        ${Intro()}
      </div>
    </body>
  `
}

function Intro () {
  return html`
    <div class="home__intro item-box">
      <div class="row">
        <p>${fs.readFileSync(path.join(__dirname, '../assets/intro.txt'), 'utf8')}</p>
        <p><a href="mailto:hi@stefi.io"><span class="icon email"><img src="/images/email.svg"></span></a>&nbsp;<a href="mailto:hi@stefi.io">hi@stefi.io</a></p>
        <p><span class="icon cv"><img src="/images/cv.svg"></span>&nbsp;Please ask for my CV.</p>
        <p><a href="https://github.com/srilq"><span class="icon gitlab"><img src="/images/github.svg"></span></a>&nbsp;<a href="https://github.com/srilq">github.com/srilq</a></p>
        <p><a href="https://gitlab.com/users/srilq/projects"><span class="icon gitlab"><img src="/images/gitlab.svg"></span></a>&nbsp;<a href="https://gitlab.com/users/srilq/projects">gitlab.com/srilq</a></p>
      </div>
    </div>
  `
}

/*
function Ticker() {
  return html`
    <div class="home__ticker item-box">
      <div class="ticker ticker--video">
        <p class="ticker__note note fx-text-appear">Mouse over to halt
        <div class="ticker__wrapper">
          <div class="ticker__rot">
            <ul class="ticker__list"><!--
              <?php
              $ticker_video = function ($id, $i, $url) use ($detect) {
                $has_link = !is_null($url) && strlen($url) > 0;
                if(isset($detect['autoplay']) && $detect['autoplay']) { ?>
                  --><li class="ticker__item ticker__item--video">
                    <?= $has_link ? '<a href="'.$url.'">' : '' ?>
                    <div class="ticker__media ticker__media--video video"><video id="video-<?= $id.$i ?>" class="video-js video-js--defer vjs-scalable vjs-nogui" poster="/video/<?= $id ?>.jpg" tabindex="0" preload="none" no-controls muted loop>
                      <source src="/video/<?= $id ?>.webm" type="video/webm">
                      <source src="/video/<?= $id ?>.mp4" type="video/mp4">
                    </video></div>
                    <?= $has_link ? '</a>' : '' ?>
                  </li><!--
                <?php } else { ?>
                --><li class="ticker__item ticker__item--image">
                    <?= $has_link ? '<a href="'.$url.'">' : '' ?>
                    <div class="ticker__media ticker__media--image image"><img src="/video/<?= $id ?>.jpg"></div>
                    <?= $has_link ? '</a>' : '' ?>
                  </li><!--
                <?php }
              };
              for($i = 0; $i < 2; $i++) {
                foreach($ticker_items as $item) {
                  $ticker_video($item, $i, $ticker_item_urls[$item]);
                }
              }
              ?>
            --></ul>
          </div>
        </div>
      </div>
    </div>
  `
}
*/
