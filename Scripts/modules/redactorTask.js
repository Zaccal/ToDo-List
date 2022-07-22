import { RedactorTask, ShowError } from './classes.js';

// Error when input has not value and click add task fails
const errorWindow = document.querySelector('.redactor .error')
const errorCloseBtn = document.querySelector('.redactor .error .btn-close')

// Redactor task script
const windowRedactor = document.querySelector('.redactor')
const windowRedactorInput = document.querySelector('#change-input')

const windowRedactorCloseBtn = document.querySelector('#changeCloseBtn')
const windowRedactorSaveBtn = document.querySelector('#changeSaveBtn')

const redactorTaskFn = event => {
    const redactorTask = new RedactorTask(event.target, windowRedactor, windowRedactorInput)
    
    redactorTask.openChangeTaskWindow()

    windowRedactorCloseBtn.addEventListener('click', () => {
        redactorTask.closeChangeWindow()
    })

    windowRedactorSaveBtn.addEventListener('click', () => {
        if (windowRedactorInput.value.length >= 1) {
            redactorTask.saveChange()
        } else {
            new ShowError(errorWindow, errorCloseBtn).showingError()
        }
    })
}

export default redactorTaskFn