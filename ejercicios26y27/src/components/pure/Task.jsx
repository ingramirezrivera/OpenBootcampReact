import React, { useContext } from 'react';
import { toggleTask } from '../Store/actions/actions';
import { deleteTask } from '../Store/actions/actions';
import { Store } from '../Store/config/StoreProvider';

const Task = ({index, task}) => {

    const {state,dispatch} = useContext(Store)

    const handleToggle = (e, task) => {
        e.preventDefault()
        const updateTask = {...task, completed: !task.completed}
        dispatch(toggleTask(updateTask))
    }

    const handleDelete = (e,task) => {
        e.preventDefault()
        dispatch(deleteTask(task))
    }

    return (
        <li key={index}
            style={
                {
                    textDecoration: task.completed ? 'line-through': 'none',
                    textDecorationColor: task.completed ? 'grey' : 'none',
                    color: task.completed ? 'green' : 'white'  
                }
            }
            onClick={(e) => handleToggle(e, task)}
            >{task.id} - {task.taskName} - {task.taskDescription} - 
            <button onClick={(e) => handleDelete(e, task)}>Delete</button>
        </li>
    );
};

export default Task

