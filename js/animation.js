function showNextQuote(index) {
  const allQuotes = $('.quote');

  const quote = allQuotes.eq(index % allQuotes.length);
  const wordCount = quote.html().split(" ").length;
  const delay = wordCount * 140;

  quote.fadeIn(1500).delay(delay).fadeOut(2000);

  setTimeout( function () { showNextQuote(++index); }, 3500 + delay);
};

function toggleAvatars() {
  $('.resume').hover(
    function () {
      $('.face').attr("src", "img/avatar/avatar-smile.png");
    },
    function () {
      $('.face').attr("src", "img/avatar/avatar-smirk.png");
    }
  );

  $('.code').hover(
    function () {
      $('.face').attr("src", "img/avatar/avatar-tongue.png");
    },
    function () {
      $('.face').attr("src", "img/avatar/avatar-smirk.png");
    }
  );

  $('.company').hover(
    function () {
      $('.face').attr("src", "img/avatar/avatar-laugh.png");
    },
    function () {
      $('.face').attr("src", "img/avatar/avatar-smirk.png");
    }
  );

  $('.film').hover(
    function () {
      $('.face').attr("src", "img/avatar/avatar-surprised.png");
    },
    function () {
      $('.face').attr("src", "img/avatar/avatar-smirk.png");
    }
  );

  $('.contact').hover(
    function () {
      $('.face').attr("src", "img/avatar/avatar-eyebrow.png");
    },
    function () {
      $('.face').attr("src", "img/avatar/avatar-smirk.png");
    }
  );
};

$(document).ready(function () {
  $('.header').animate({ opacity: 1 }, 5000);
  $('.cover').animate({ opacity: 1 }, 5000);
  $('.avatar').animate({ opacity: 1 }, 5000);
  $('.svg-wrapper').animate({ opacity: 1 }, 5000);
  $('.footer').animate({ opacity: 1 }, 5000);

  toggleAvatars();

  const randomStart = Math.floor(Math.random() * 20);
  showNextQuote(randomStart);
});
