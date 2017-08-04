function showNextQuote(index) {
  const allQuotes = $('.quote');

  const quote = allQuotes.eq(index % allQuotes.length);
  const wordCount = quote.html().split(" ").length;
  const delay = wordCount * 100;

  quote.delay(3000).fadeIn(2000).delay(delay).fadeOut(2000);

  setTimeout(function () {
    showNextQuote(++index);
  }, 4000 + delay);
};

$(document).ready(function () {
  $('.header').fadeIn(3000);
  showNextQuote(0);
});
