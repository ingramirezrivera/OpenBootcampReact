import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Store } from '../Store/config/StoreProvider';


const Task = ({index, task, toggleTask, deleteTask}) => {

    const {state, dispatch} = useContext(Store);


    return (
        <li key={index}
            style={
                {
                    textDecoration: task.completed ? 'line-through': 'none',
                    textDecorationColor: task.completed ? 'grey' : 'none',
                    color: task.completed ? 'green' : 'white'  
                }
            }
            onClick={() => toggleTask(task)}
            >{task.id} - {task.taskName} - {task.taskDescription} - 
            <button onClick={() => deleteTask(task)}>Delete</button>
        </li>
    );
};

export default Task

