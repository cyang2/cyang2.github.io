function showNextQuote(index) {
  const allQuotes = $('.quote');

  const quote = allQuotes.eq(index % allQuotes.length);
  const wordCount = quote.html().split(" ").length;
  const delay = wordCount * 140;

  quote.fadeIn(1500).delay(delay).fadeOut(2000);

  setTimeout(() => { showNextQuote(++index); }, 3500 + delay);
};

function toggleAvatars() {
  $('.resume').hover(
    () => { $('.face').attr("src", "img/avatar/avatar-smile.png") },
    () => { $('.face').attr("src", "img/avatar/avatar-smirk.png") }
  );

  $('.code').hover(
    () => { $('.face').attr("src", "img/avatar/avatar-tongue.png") },
    () => { $('.face').attr("src", "img/avatar/avatar-smirk.png") }
  );

  $('.company').hover(
    () => { $('.face').attr("src", "img/avatar/avatar-laugh.png") },
    () => { $('.face').attr("src", "img/avatar/avatar-smirk.png") }
  );

  $('.film').hover(
    () => { $('.face').attr("src", "img/avatar/avatar-surprised.png") },
    () => { $('.face').attr("src", "img/avatar/avatar-smirk.png") }
  );

  $('.contact').hover(
    () => { $('.face').attr("src", "img/avatar/avatar-eyebrow.png") },
    () => { $('.face').attr("src", "img/avatar/avatar-smirk.png") }
  );
};

function animateHeaderLinks() {
  $('.header-link').on('mouseenter', function () {
    $(this).velocity({ translateY: -3.5 }, { delay: 0, duration: 200 });
  });
  $('.header-link').on('mouseleave', function () {
    $(this).velocity('stop').velocity('reverse');
  });
};

$(document).ready(() => {
  $('.header').velocity({ opacity: 1 }, 5000);
  $('.cover').velocity({ opacity: 1 }, 5000);
  $('.avatar').velocity({ opacity: 1 }, 5000);
  $('.svg-wrapper').velocity({ opacity: 1 }, 5000);
  $('.footer').velocity({ opacity: 1 }, 5000);

  toggleAvatars();
  animateHeaderLinks();

  const randomStart = Math.floor(Math.random() * 20);
  showNextQuote(randomStart);
});
