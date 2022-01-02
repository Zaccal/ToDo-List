const tBtnM = document.querySelector('#todo-btn_min')
const tList = document.querySelector('.todo-list')
const tForm = document.querySelector('.todo-form')
const tInput = document.querySelector('#todo-input')
const dBtnStyle = document.querySelector('#todo-delete')

tForm.addEventListener('submit', addTray)

function addTray(e) {
	e.preventDefault()
	const textContent = tInput.value
	const trake = document.createElement('li')
	const trakeP = document.createElement('pre')
	trakeP.textContent = textContent
	tList.append(trake)
	trake.append(trakeP)

	tBtnM.setAttribute('role', 'button')
	tBtnM.addEventListener('click', () => {
		setTimeout(animai, 150)
		setTimeout(() => {trake.remove()}, 1000)		
	})

	function animai() {
		trake.classList.add('animate__animated')
		trake.classList.add('animate__fadeOutRight')
	}

	trake.addEventListener('click', () => {
		trake.classList.toggle('active')
		setTimeout(animai, 150)
		setTimeout(() => {trake.remove()}, 1000)
	})

	tInput.value = ''
	tInput.focus()
}