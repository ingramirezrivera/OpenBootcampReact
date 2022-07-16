import React, { useContext } from 'react';
import Task from './Task';

const TasksList = ({ myContext, onTaskClick, tasks }) => {

  const state = useContext(myContext);


    return (
        
        <div>
            <h1>Your Tasks</h1>
            <ul>
                {tasks.map((todo, index) => 
                    (
                        <Task 
                            key={index}
                            {...todo} // id, text, completed
                            onClick = {
                                () => onTaskClick(todo.id)
                            }
                        />
                    )
                )}

            </ul>
            
        </div>
    );
}

export default TasksList;
