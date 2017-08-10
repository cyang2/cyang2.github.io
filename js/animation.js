function showNextQuote(index) {
  const allQuotes = $('.quote');

  const quote = allQuotes.eq(index % allQuotes.length);
  const wordCount = quote.html().split(" ").length;
  const delay = wordCount * 140;

  quote.delay(3000).fadeIn(1500).delay(delay).fadeOut(2000);

  setTimeout( function () { showNextQuote(++index); }, 4000 + delay);
};

function toggleAvatars() {
  $('.resume').hover(
    function () {
      $('.avatar').attr("src", "img/avatar/avatar-smile-img.png");
    },
    function () {
      $('.avatar').attr("src", "img/avatar/avatar-smirk-img.png");
    }
  );

  $('.code').hover(
    function () {
      $('.avatar').attr("src", "img/avatar/avatar-tongue-img.png");
    },
    function () {
      $('.avatar').attr("src", "img/avatar/avatar-smirk-img.png");
    }
  );

  $('.company').hover(
    function () {
      $('.avatar').attr("src", "img/avatar/avatar-laugh-img.png");
    },
    function () {
      $('.avatar').attr("src", "img/avatar/avatar-smirk-img.png");
    }
  );

  $('.film').hover(
    function () {
      $('.avatar').attr("src", "img/avatar/avatar-surprised-img.png");
    },
    function () {
      $('.avatar').attr("src", "img/avatar/avatar-smirk-img.png");
    }
  );

  $('.contact').hover(
    function () {
      $('.avatar').attr("src", "img/avatar/avatar-smile-img.png");
    },
    function () {
      $('.avatar').attr("src", "img/avatar/avatar-smirk-img.png");
    }
  );
};

$(document).ready(function () {
  $('.header').animate({ opacity: 1 }, 5000);
  $('.avatar-wrapper').animate({ opacity: 1 }, 5000);
  $('.svg-wrapper').animate({ opacity: 1 }, 5000);

  // $('.cool-thing').delay(2000).animate({ opacity: 1 }, 5000);
  toggleAvatars();

  const randomStart = Math.floor(Math.random() * 20);
  showNextQuote(randomStart);
});
