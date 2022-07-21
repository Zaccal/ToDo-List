// Errors for functions
class ShowError {
    constructor(errorWindow, btnForCloseError) {
        this.errorWindow = errorWindow
        this.btnForCloseError = btnForCloseError
    }

    closeError() { this.errorWindow.style.display = 'none' }

    showingError() {
        this.errorWindow.style.display = 'block'

        setTimeout(() => {
            this.closeError()
        }, 6000)

        this.btnForCloseError.addEventListener('click', () => { this.closeError() })
    }
}

// classes for functions 
class CreateTask {
    constructor(task, list) {
        this.task = task
        this.list = list
    }

    addingTask() {
        const newTask = `
        <li class="animate__animated">
            <div class="tasks__task">
              <p>${this.task}</p>
              <button title="Удалить эту задачу"><img src="img/delete.png" alt="delete.task-icon"></button>
            </div>
        </li>
        `

        this.list.insertAdjacentHTML('beforeend', newTask)
    }
}

class DeleteTask {
    constructor(task, tasks) {
        this.task = task
        this.tasks = tasks
    }

    removeTask() {
        this.task.remove()
    }

    removeAllTasks() {
        this.tasks.forEach(task => {
            task.classList.add('animate__fadeOutRight')
            setTimeout(() => { task.remove() }, 1000)
        })
    }
}

class RedactorTask {
    constructor (task, windowRedactor, input) {
        this.task = task
        this.windowRedactor = windowRedactor
        this.input = input
    }

    openChangeTaskWindow() {
        this.windowRedactor.style.display = 'block'
        this.input.value = this.task.innerHTML
    }

    saveChange() {
        this.windowRedactor.style.display = 'none'
        this.task.innerHTML = this.input.value
    }

    closeChangeWindow() {
        this.windowRedactor.style.display = 'none'
        this.input.value = ''
    }
}

let inputHeaderTextInSettings = document.querySelector('#inputHeaderText').value
let inputFontInSettings = document.querySelector('#selectFont').value
let inputFontSizeInSettings = document.querySelector('#sizeFont').value
let inputColorHeaderInSettings = document.querySelector('#headerColorInput').value
let inputColorShadowInSettings = document.querySelector('#headerShadowInput').value
let inputColorTextInSettings = document.querySelector('#textColorInput').value

class Setting {
    constructor(settingWindow, headerInnerText, font, fontSize, colorHeader, colorShadowHeader, colorText) {
        this.settingWindow = settingWindow
        this.headerInnerText = headerInnerText
        this.font = font
        this.fontSize = fontSize
        this.colorHeader = colorHeader
        this.colorShadowHeader = colorShadowHeader
        this.colorText = colorText
    }

    openSettings() {
        this.settingWindow.style.display = 'block'
    }

    saveSettings() {
        // text header
        document.querySelector('.header__title').innerHTML = this.headerInnerText

        const textTasks = document.querySelectorAll('.tasks__task p')

        // Font
        textTasks.forEach(taskText => {
            switch (this.font) {
                case 'default':
                    taskText.style.fontFamily = "'Averia Sans Libre', cursive"
                    break
                case 'Georgia':
                    taskText.style.fontFamily = "Georgia,Times,Times New Roman,serif"
                    break
                case 'Courier New':
                    taskText.style.fontFamily = "Courier New,Courier,Lucida Sans Typewriter,Lucida Typewriter,monospace"
                    break
            }
        })

        // Font size
        const errorWindow = document.querySelector('.error-setting')
        const closeError = document.querySelector('.error-setting .btn-close')

        if (Number(this.fontSize) <= 25) {
            textTasks.forEach(task => { task.style.fontSize = `${this.fontSize}px` })
        } 
        else if (this.fontSize === '') {
            textTasks.forEach(task => { task.style.fontSize = '23px' })
        }
        else {
            new ShowError(errorWindow, closeError).showingError()
            throw new Error('Font size option can not be 26 or more')
        }

        // Color header 
        const header = document.querySelector('.header')

        header.style.backgroundColor = this.colorHeader

        // Color shadow header
        header.style.boxShadow = `0px 4px 2px ${this.colorShadowHeader}`

        // tasks text is color
        textTasks.forEach(task => task.style.color = this.colorText)

        // updata data
        inputHeaderTextInSettings = document.querySelector('#inputHeaderText').value
        inputFontInSettings = document.querySelector('#selectFont').value
        inputFontSizeInSettings = document.querySelector('#sizeFont').value
        inputColorHeaderInSettings = document.querySelector('#headerColorInput').value
        inputColorShadowInSettings = document.querySelector('#headerShadowInput').value
        inputColorTextInSettings = document.querySelector('#textColorInput').value

        this.settingWindow.style.display = 'none'
    }

    closeSettingWindow() {

        const openWindowAreYouSure = () => {
            this.settingWindow.style.display = 'none'
            areYouSureWindow.style.display = 'block'
        } 

        // Are you sure save changes? the window 
        const areYouSureWindow = document.querySelector('#sure')

        if (this.headerInnerText != inputHeaderTextInSettings) { openWindowAreYouSure() } 
        else if (this.font != inputFontInSettings) { openWindowAreYouSure() }
        else if (this.fontSize != inputFontSizeInSettings) { openWindowAreYouSure() } 
        else if (this.colorHeader != inputColorHeaderInSettings) { openWindowAreYouSure() } 
        else if (this.colorShadowHeader != inputColorShadowInSettings) { openWindowAreYouSure() } 
        else if (this.colorText != inputColorTextInSettings) { openWindowAreYouSure() }
        else { this.settingWindow.style.display = 'none' } 

    }
}

class WindowAreYouSure extends Setting {
    constructor (settingWindow, headerInnerText, font, fontSize, colorHeader, colorShadowHeader, colorText) {
        super (settingWindow, headerInnerText, font, fontSize, colorHeader, colorShadowHeader, colorText)
    }

    save() { 
        this.saveSettings()
        
        const areYouSureWindow = document.querySelector('#sure')

        areYouSureWindow.style.display = 'none'

        // use options
        inputHeaderTextInSettings = this.headerInnerText   
        
        inputFontInSettings = this.font

        inputFontSizeInSettings = this.fontSize

        inputColorHeaderInSettings = this.colorHeader

        inputColorShadowInSettings = this.colorShadowHeader

        inputColorTextInSettings = this.colorText

    }

    dontSave() {
        // Close modal
        const areYouSureWindow = document.querySelector('#sure')

        areYouSureWindow.style.display = 'none'
    
        // Remove settings options in default like was
        document.querySelector('#inputHeaderText').value = inputHeaderTextInSettings

        document.querySelector('#selectFont').value = inputFontInSettings

        document.querySelector('#sizeFont').value = inputFontSizeInSettings

        document.querySelector('#headerColorInput').value = inputColorHeaderInSettings

        document.querySelector('#headerShadowInput').value = inputColorShadowInSettings

        document.querySelector('#textColorInput').value = inputColorTextInSettings
    }
}

export { ShowError, CreateTask, DeleteTask, RedactorTask, Setting, WindowAreYouSure }