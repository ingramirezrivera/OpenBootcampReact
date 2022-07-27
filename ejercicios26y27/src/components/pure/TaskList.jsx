import React, { useContext } from 'react';
import { Store } from '../Store/config/StoreProvider';
import Task from '../pure/Task'


const TaskList = () => {

    const {state, dispatch} = useContext(Store);
    
    const toggleTask = (task) => {
        const updateTask = {...task, completed: !task.completed}
        dispatch({
            type: 'TOGGLE_TASK',
            payload: updateTask
        })
    }

    const deleteTask = (task) => {
        dispatch({
            type: 'DELETE_TASK',
            payload: task
        })
    }

    return (
        <>
            <h1>Task List</h1>

            <ul>
                { (state.taskList.length > 0) ? 
                state.taskList.map((task, index) => {
                    return (
                        <Task />
                    )
                    
                }):
                <p>No Tasks to Show</p>

                }
                    
            </ul>
        </>            
        );
    
}

export default TaskList;
