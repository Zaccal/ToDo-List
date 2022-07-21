import { openSettings, saveChangeSettings, closeSettingWindow, areYouSureFn } from './modules/settings.js';

import redactorTaskFn from './modules/redactorTask.js';

import deleteAllTasksFn from './modules/removeAllTasks.js';

import { inputTask, btnForAddTask, addTaskFn } from "./modules/addTask.js";
import removeOneTask from "./modules/removeTask.js";

// Check settings, if there has changes to use options
saveChangeSettings()

// Add task script

btnForAddTask.addEventListener('click', () => {
    addTaskFn()

    // Check settings, it for tasks because in function check variables when you launch function
    // if launch function and there has not task script just will not work

    // why did i launch function in uo code line ? 
    // Because in settings has some options, which does not for tasks
    saveChangeSettings()
})

inputTask.addEventListener('keypress', event => {
    if (event.key === 'Enter') { addTaskFn() } 
})

// Delete the task Script

btnForAddTask.addEventListener('click', () => {
    const btnsForDeleteTask = document.querySelectorAll('.tasks__task button')

    btnsForDeleteTask.forEach(btnForDeleteTask  => {
        btnForDeleteTask.addEventListener('click', (event) => { removeOneTask(event) })
    })
})

// Delete All Tasks

const btnForDeleteAllTask = document.querySelector('#deleteAll')

btnForDeleteAllTask.addEventListener('click', deleteAllTasksFn)

// Redactor task script

btnForAddTask.addEventListener('click', () => {
    const tasks = document.querySelectorAll('.tasks li div p')

    tasks.forEach(clickedTask => {
        clickedTask.addEventListener('click', event => { redactorTaskFn(event) })
    })
})

// Sttings script

const forOpenSettingsBtn = document.querySelector('#settingBtn')

forOpenSettingsBtn.addEventListener('click', openSettings)


const forSaveSettingsBtn = document.querySelector('#settingSaveBtn')

forSaveSettingsBtn.addEventListener('click', saveChangeSettings)


const forCloseSettingsBtn = document.querySelector('#closeSettingWindow')

forCloseSettingsBtn.addEventListener('click', closeSettingWindow)


const modalAreYouWantToSave = document.querySelector('.modal-footer')

modalAreYouWantToSave.addEventListener('click', event => {
    if (event.target.id === 'sureSave') { areYouSureFn('save') }
    else if (event.target.id === 'unSureSave') { areYouSureFn('dont') }
})