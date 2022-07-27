import { CREATE_TASK, DELETE_TASK, TOGGLE_TASK,  SET_VISIBILITY_FILTER } from "../actions/actions";

const Reducer = (state, action) => {
    switch (action.type) {
        case CREATE_TASK:
            const newTask = action.payload;
            const newTaskToList = [...state.taskList, newTask]
            const newStateOfTasks = {
                ...state, taskList: newTaskToList, taskListFilter: newTaskToList
            }
            return newStateOfTasks
        case TOGGLE_TASK:
            const taskToUpdate = state.taskList.map(task =>{
                if(task.id === action.payload.id){
                    return action.payload
                }
                return task;
            })
            const newStateUpdatedTask = {...state, taskList: taskToUpdate}
            return newStateUpdatedTask
        case DELETE_TASK:
            const newListOfTaskAfterDeleting = state.taskList.filter(task => task.id !== action.payload.id)
            const newStateOfTaskAfterDeleting = {...state, taskList: newListOfTaskAfterDeleting}
            return newStateOfTaskAfterDeleting
        case SET_VISIBILITY_FILTER:
            return action.payload.filter
        default: 
            return state
        }
}

export default Reducer;

