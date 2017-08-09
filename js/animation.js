function showNextQuote(index) {
  const allQuotes = $('.quote');

  const quote = allQuotes.eq(index % allQuotes.length);
  const wordCount = quote.html().split(" ").length;
  const delay = wordCount * 140;

  quote.delay(3000).fadeIn(1500).delay(delay).fadeOut(2000);

  setTimeout(function () {
    showNextQuote(++index);
  }, 4000 + delay);
};

$(document).ready(function () {
  $('.header').animate({ opacity: 1 }, 5000);
  $('.svg-wrapper').animate({ opacity: 1 }, 5000);
  const randomNumber = Math.floor(Math.random() * 20);
  showNextQuote(randomNumber);
});
