import { ShowError, CreateTask } from "./classes.js"

// Error when input has not value and click add task fails
const errorValueNoWindow = document.querySelector('.error')
const errorValueNoCloseBtn = document.querySelector('.error').querySelector('.btn-close')

const errorValueNo = new ShowError(errorValueNoWindow, errorValueNoCloseBtn)


const listWithTasks = document.querySelector('.tasks')
const inputTask = document.querySelector('#inputAdd')

const btnForAddTask = document.querySelector('#addTaskBtn')

const addTaskFn = () => {
    if (inputTask.value.length >= 1) {
        new CreateTask(inputTask.value, listWithTasks).addingTask()

        inputTask.value = ''
    } else {
        errorValueNo.showingError()
    }
}

export { inputTask, btnForAddTask, addTaskFn }

// For redactor task 
export default errorValueNo