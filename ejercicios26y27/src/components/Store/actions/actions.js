
export const CREATE_TASK = 'CREATE_TASK';
export const TOGGLE_TASK = 'TOGGLETASK';
export const DELETE_TASK = 'DELETE_TASK';
export const SET_VISIBILITY_FILTER = 'SET_VISISBILITY_FILTER';


export const createTask = (taskName,taskDescription) => {
    return {
        type: CREATE_TASK,
        payload: {
            id: new Date().getTime(),
            taskName,
            taskDescription,
            completed: false
        }

    }
}

export const toggleTask = (updateTask) => {
    return {
        type: TOGGLE_TASK,
        payload: updateTask
    }
}

export const deleteTask = (task) => {
    return{
        type: DELETE_TASK,
        payload: task
    }
} 

export const setVisibilityFilter = (filter) => {
    return {
        // type: SET_VISIBILITY_FILTER,
        // payload: {
        //     filter
        // }
    }
}



