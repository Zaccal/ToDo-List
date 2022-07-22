import { DeleteTask } from './classes.js'

const deleteAllTasksFn = () => {
    const tasks = document.querySelectorAll('.tasks li')
    
    new DeleteTask(null, tasks).removeAllTasks()
}

export default deleteAllTasksFn