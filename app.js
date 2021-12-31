const tForm = document.querySelector('#todo-form')
const tInput = document.querySelector('#todo-input')
const tList = document.querySelector('#todo-list')

tForm.addEventListener('submit', formH)

function formH(e) {
  e.preventDefault()
  const taskText = tInput.value
  const liH = `<li class="make"><input type="checkbox" class="tik">${taskText}</li>`
  tList.insertAdjacentHTML('beforeend', liH)
  tInput.value = ''
  tInput.focus()
}