
export const CREATE_TASK = 'CREATE_TASK'


export const createTask = (taskName,taskDescription) => {
    return {
        type: CREATE_TASK,
        payload: {
            id: new Date().getTime(),
            taskName,
            taskDescription,
            comleted: false
        }

    }
}