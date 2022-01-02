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

	const btnFont = document.querySelector('#toDo-fon')
	const btnMin = document.querySelector('#todo-font')
	let fontNumber = '20'
	trake.style['font-size'] = `${fontNumber}px`
	let fontHei = '21'
	trakeP.style['line-height'] = `${fontHei}px`
	btnFont.addEventListener('click', addFont)
	btnMin.addEventListener('click', removerFont)

	function addFont() {
		fontNumber = Number(fontNumber) + 1
		trake.style['font-size'] = `${fontNumber}px`
		fontHei = Number(fontHei) + 1
		trakeP.style['line-height'] = `${fontHei}px`
		if (fontNumber === 28) {
			fontNumber = 20
			trake.style['font-size'] = `${fontNumber}px`
		}
		if (fontHei === 29) {
			fontHei = 21
			trakeP.style['line-height'] = `${fontHei}px`
		}
	}

	function removerFont() {
		fontNumber = Number(fontNumber) - 1
		trake.style['font-size'] = `${fontNumber}px`
		fontHei = Number(fontHei) - 1
		trakeP.style['line-height'] = `${fontHei}px`
		if (fontNumber === 15) {
			fontNumber = 20
			trake.style['font-size'] = `${fontNumber}px`
		}
		if (fontHei === 16) {
			fontHei = 21
			trakeP.style['line-height'] = `${fontHei}px`
		}
	}

	tInput.value = ''
	tInput.focus()
}