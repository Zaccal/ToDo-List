// Add task Fn

const input = document.querySelector('#inputAdd')
const btnAdd = document.querySelector('#addTaskBtn')
const list = document.querySelector('.tasks')

// error fn if there hasn't words

const errorWindow = document.querySelector('.error')

const openErrorWindow = () => {
    errorWindow.style.display = 'block'
    setTimeout(() => {
        errorWindow.style.display = 'none'
    }, 10000) 
}

// close error window in there hasn't words Fn 

const errorWindowCloseBtn = document.querySelector('.btn-close')

errorWindowCloseBtn.addEventListener('click', () => {
    errorWindow.style.display = 'none'
})

// setting check and use if has change start

const checkSettingAndUse = () => {
    textHeader.innerHTML = inputTextHeader.value

    // Font size change Fn 
    const textTasks = document.querySelectorAll('.tasks__task p')
    
    const fontSizeErrorWindow = document.querySelector('.error-setting')
    const errorFontSizeWindow = () => {
        sizeFontInput.value = '23px'
        fontSizeErrorWindow.style.display = 'block'
        setTimeout(() => {
            fontSizeErrorWindow.style.display = 'none'
        }, 8000)
    } 

    textTasks.forEach((element) => {
        if (sizeFontInput.value <= 25) {
            element.style.fontSize = `${sizeFontInput.value}px`
        } else {
            errorFontSizeWindow()
            // If font size input has 25 or big number 25 next code enough working
            throw new Error("Размер шрифта не можеть быть больше 25");
        }
    })
    
    // text font change Fn and check fonts
    textTasks.forEach((element) => {
        switch (fontInput.value) {
            case 'Georgia':
                element.style.fontFamily = "Georgia, 'Times New Roman', Times, serif"
                break
            case 'Courier New':
                element.style.fontFamily = "'Courier New', monospace"
                break
            case 'Default':
                element.style.fontFamily = "'Averia Sans Libre', cursive"
                break
            default:
                element.style.fontFamily = "'Averia Sans Libre', cursive"
                
        }
    })

    // Header color background Fn 
    const  headerColorInput = document.querySelector('#headerColorInput')
    const headerTodo = document.querySelector('.header')

    headerTodo.style.backgroundColor = headerColorInput.value

    // header color shadow Fn

    const headerShadow = document.querySelector('#headerShadowInput')

    headerTodo.style.boxShadow = `0px 4px 2px ${headerShadow.value}`

    // Btns color change Fn
    const btns = document.querySelectorAll('.btnWindow')
    btns.forEach(element => element.style.background = headerColorInput.value)

    // Text color Fn 
    const textColorInput = document.querySelector('#textColorInput')

    textTasks.forEach(element => element.style.color = textColorInput.value)

    settingWindow.style.display = 'none'
}
// setting check and use if has change end


// close error window Fn end

const addTask = () => {
    if (input.value.length >= 1) {        
        const newTask = `<li class="animate__animated"><div class="tasks__task"><p>${input.value}</p><button title="Удалить эту задачу"><img src="img/delete.png" alt="delete.task-icon"></button></div></li>`

        list.insertAdjacentHTML('beforeend', newTask)
        input.value = ''

        // Delete task Fn
        const btnDelete = document.querySelectorAll('.tasks__task button')
        btnDelete.forEach((element) => {
            element.addEventListener('click', (event) => {
                event.target.closest('li').remove();
            })
        })

        setTimeout(checkSettingAndUse(), 100)

        // redactor task Fn start
        redactorTask()
    } else {
        openErrorWindow()
    }
}
btnAdd.addEventListener('click', addTask)

input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {addTask()} 
})

// delete all tasks Fn

const deleteBtnAll = document.querySelector('#deleteAll')

deleteBtnAll.addEventListener('click', () => {
    const tasks = document.querySelectorAll('.tasks li')
    tasks.forEach((element) => {
        element.classList.add('animate__fadeOutRight')
        setTimeout(() => {
            element.remove()
            element.classList.remove('animate__fadeOutRight')
        }, 1000)
    })
})

// redactor task Function

const changeWindow = document.querySelector('.redactor')

const redactorTask = () => {
    const tasks = document.querySelectorAll('.tasks li div p')

    tasks.forEach((element) => {
         element.addEventListener('click', (event) => {
            changeWindow.style.display = 'block'
            const changeWindowInput = document.querySelector('#change-input')

            changeWindowInput.value = event.target.innerHTML

            // redactor task Save button

            const saveChangeWindowBtn = document.querySelector('#changeSaveBtn')

            saveChangeWindowBtn.addEventListener('click', () => {
                event.target.innerHTML = changeWindowInput.value
                changeWindow.style.display = 'none'    
            })
        })
    })
}

// redactor task Close button

const closeChangeWindowBtn = document.querySelector('#changeCloseBtn')

closeChangeWindowBtn.addEventListener('click', () => {
    changeWindow.style.display = 'none'    
})

// Setting section

const settingBtn = document.querySelector('#settingBtn')
const settingWindow = document.querySelector('#settingWindow')
const closeSettingWindow = document.querySelector('#closeSettingWindow')


settingBtn.addEventListener('click', () => {
    window.onbeforeunload = function(element) {
        console.log(element);
        return 'Вы не сохранили настройки вы уверены?';
    }
    settingWindow.style.display = 'block'
})

// Close seetin window 

closeSettingWindow.addEventListener('click', () => {
    settingWindow.style.display = 'none'
})

// setting change Fns

const inputTextHeader = document.querySelector('#inputHeaderText')
const textHeader = document.querySelector('.header__title')
inputTextHeader.value = textHeader.innerHTML
const fontInput = document.querySelector('#selectFont')
const sizeFontInput = document.querySelector('#sizeFont') 
const changeSave = document.querySelector('#settingSaveBtn')

changeSave.addEventListener('click', checkSettingAndUse)

// Header color background Fn check before open page

const headerColorInput = document.querySelector('#headerColorInput')
const headerTodo = document.querySelector('.header')

headerTodo.style.backgroundColor = headerColorInput.value

// header color shadow Fn

const headerShadow = document.querySelector('#headerShadowInput')

headerTodo.style.boxShadow = `0px 4px 2px ${headerShadow.value}`

// Btns color change Fn

const btns = document.querySelectorAll('.btnWindow')
btns.forEach((element) => {element.style.background = headerColorInput.value})

// Text color Fn 
const textTasks = document.querySelectorAll('.tasks__task p')
const textColorInput = document.querySelector('#textColorInput')

textTasks.forEach((element) => {
    element.style.color = textColorInput.value
})

// close window setting, check change

const sureWindow = document.querySelector('#sure')
const saveChangeSure = document.querySelector('#sureSave')
const unsureChangeSure = document.querySelector('#unSureSave')

unsureChangeSure.addEventListener('click', () => {
    // Change default setting
    inputTextHeader.value = 'ToDo'
    textHeader.innerHTML = 'ToDo'

    // font text
    fontInput.value = 'default'

    // text color 
    textColorInput.value = '#808080'

    sizeFontInput.value = ''

    // text size
    
    const textTasks = document.querySelectorAll('.tasks__task p')
    textTasks.forEach(element => {
        // font text 
        element.style.fontFamily = "'Averia Sans Libre', cursive"

        // text size
        element.style.fontSize = '23px'

        // text color
        element.style.color = '#808080'
    })

    // Color header 
    const header = document.querySelector('.header')
    headerColorInput.value = '#00d5e2'
    header.style.backgroundColor = '#00d5e2'

    // shadow color header
    headerShadow.value = '#00929b'
    header.style.boxShadow = '0px 4px 2px #00929b'

    sureWindow.style.display = 'none'
})

saveChangeSure.addEventListener('click', () => {
    checkSettingAndUse()
    sureWindow.style.display = 'none'
}) 

let headerInnerText = inputTextHeader.value
let fontInputInner = fontInput.value
let fontSizeInner = sizeFontInput.value
let headerShadowInner = headerShadow.value
let headerColorInner = headerColorInput.value
let textColorInner = textColorInput.value

const checkSetting = () => {
    if (inputTextHeader.value != headerInnerText) {
        sureWindow.style.display = 'block'
        headerInnerText = inputTextHeader.value   
    } 
    else if (fontInput.value != fontInputInner) {
        sureWindow.style.display = 'block'
        fontInputInner = fontInput.value
    } 
    else if (sizeFontInput.value != fontSizeInner) {
        sureWindow.style.display = 'block'
        fontSizeInner = sizeFontInput.value
    } 
    else if (headerColorInput.value != headerColorInner) {
        sureWindow.style.display = 'block'
        headerColorInner = headerColorInput.value
    } 
    else if (headerShadow.value != headerShadowInner) {
        sureWindow.style.display = 'block'
        headerColorInner = headerShadowInner.value
    }  
    else if (textColorInput.value != textColorInner) {
        sureWindow.style.display = 'block'
        textColorInner = textColorInput.value
    } 
}

closeSettingWindow.addEventListener('click', checkSetting)