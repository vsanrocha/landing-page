(function(win, doc) {
	'use strict';
	var $countDown = doc.querySelector('[data-js="countDown"]');
	var countDownDate = new Date('mar 29 2018').getTime();
	var countDown = setInterval(function () {
		var now = new Date().getTime();
		var distance = countDownDate - now;
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	  	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	  	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
 		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		$countDown.innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';
		if (distance < 0) {
			clearInterval(countDown);
			$countDown.innerHTML = 'Prazo Expirado';
		}
	});	
})(window, document);