const Reducer = (state, action) => {

    const CREATE_TASK = 'CREATE_TASK';
    const TOGGLE_TASK = 'TOGGLE_TASK';
    const DELETE_TASK = 'DELETE_TASK';

    switch (action.type) {
        case CREATE_TASK:
            const newTask = action.payload;
            const newTaskToList = [...state.taskList, newTask]
            const newStateOfTasks = {
                ...state, taskList: newTaskToList
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
        default: 
            return state
        }
}

export default Reducer;

