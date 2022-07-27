import React, { useContext } from 'react';
import { Store } from '../Store/config/StoreProvider';
import Task from '../pure/Task'


const TaskList = ({toggleTask}) => {

    const {state, dispatch} = useContext(Store);

    return (
        <>
            <h1>Task List</h1>
            <ul>
                {   (state.taskList.length > 0) 
                    ? 
                        state.taskList.map((task, index) => {
                            return(
                                <Task task={task} key={index}/>
                            )
                        })
                    :
                        <p>No Tasks to Show - Please create one</p>
                }
            </ul>
        </>            
        );
    
}

export default TaskList;


// { (state.taskList.length > 0) ? 
//     state.taskList.map((task, index) => {
//         return (
//             <Task />
//         )
        
//     }):
//     <p>No Tasks to Show</p>

//     }