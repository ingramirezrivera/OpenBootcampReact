import React, { useContext } from 'react';
import { setVisibilityFilter } from '../Store/actions/actions';
import { Store } from '../Store/config/StoreProvider';


const Filter = () => {

    const { state,dispatch } = useContext(Store);

    const showAll = () => {
        
    }
    const showActive = () => {

    }
    const showCompleted = () => {

    }

    return (
        <div>
            <div>
                {
                    state.taskListFilter.map((task, index) => 
                    <li key={index}> {task.taskName} - {task.taskDescription}</li>)
                }
            </div>
            <button onClick={showAll}>Show All</button>
            <button onClick={showActive}>Show Active</button>
            <button onClick={showCompleted}>Show Completed</button>
        </div>
    );
};


export default Filter;
