(function(win, doc) {
  'use strict'

  var $formName,
      $formEmail,
      $btnCTA,
      $errorMsg

	$formName   = doc.querySelector('[data-js="name"]')
	$formEmail  = doc.querySelector('[data-js="email"]')
	$btnCTA     = doc.querySelector('[data-js="btnCTA"]')
	$errorMsg   = doc.querySelector('[data-js="errorMsg"]')

	$btnCTA.addEventListener('click', handleCTA)

	function handleCTA() {
		isNameValid()
		isEmailValid()
	}

	function isNameValid() {
		if (!$formName.value) {
			$errorMsg.style.display = 'block'
			$errorMsg.innerHTML = 'Favor preencher todos os campos.'
		}
	}
	function isEmailValid() {
		if ($formEmail.value.match(/^\w+@\w+.\w\w+(?:.\w\w)?$/) === null) {
			$errorMsg.style.display = 'block'
			$errorMsg.innerHTML = 'Favor conferir o seu email.'
		}
	}

})(window, document);
