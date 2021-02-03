var input = document.getElementById('trip')
var button = document.getElementById('submit-button')

button.addEventListener('click', function (event) {
	event.preventDefault()
	button.classList.add('is-loading')
	button.disabled = true
	input.disabled = true
})