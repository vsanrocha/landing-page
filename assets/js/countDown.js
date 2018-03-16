(function(win, doc) {
  'use strict';

  var $countDown,
      countDownDate,
      countDown,
      now,
      distance,
      days,
      hours,
      minutes,
      seconds

	$countDown = doc.querySelector('[data-js="countDown"]')
	countDownDate = new Date('mar 29 2018').getTime()
	countDown = setInterval(
    function () {
      now = new Date().getTime()
      distance = countDownDate - now
      days = Math.floor(distance / (1000 * 60 * 60 * 24))
      hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      seconds = Math.floor((distance % (1000 * 60)) / 1000)
      $countDown.innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's'

      if (distance < 0) {
        clearInterval(countDown)
        $countDown.innerHTML = 'Prazo Expirado'
      }
    });
})(window, document);
