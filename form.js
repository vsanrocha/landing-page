(function(win, doc) {
	'use strict';
	var $formName = doc.querySelector('[data-js="name"]');
	var $formEmail = doc.querySelector('[data-js="email"]');
	var $btnCTA = doc.querySelector('[data-js="btnCTA"]');
	var $errorMsg = doc.querySelector('[data-js="errorMsg"]');
	console.dir($errorMsg);

	$btnCTA.addEventListener('click', handleCTA);

	function handleCTA() {
		isNameValid();
		isEmailValid();
	}

	function isNameValid() {
		if (!$formName.value) {
			$errorMsg.style.display = 'block';
			$errorMsg.innerHTML = 'Favor preencher todos os campos.';
		}
	}
	function isEmailValid() {
		if ($formEmail.value.match(/^\w+@\w+.\w\w+(?:.\w\w)?$/) === null) {
			$errorMsg.style.display = 'block';
			$errorMsg.innerHTML = 'Favor conferir o seu email.';		
		}	
	}
	
})(window, document);