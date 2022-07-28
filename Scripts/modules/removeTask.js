import { DeleteTask } from './classes.js';

const removeOneTask = event => {
    new DeleteTask(event.target.parentElement.parentElement.parentElement).removeTask()
}

export default removeOneTask;