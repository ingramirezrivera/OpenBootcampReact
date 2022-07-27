import React, { useContext } from 'react';
import { setVisibilityFilter } from '../Store/actions/actions';
import { Store } from '../Store/config/StoreProvider';


const Filter = () => {

    const { state,dispatch } = useContext(Store);

    const showAll = () => {
        const taskList = state.taskList
        const alltasks = {...state, taskListFilter: taskList}
        console.log('alltasks', alltasks)
        dispatch(setVisibilityFilter(alltasks))
    }
    const showActive = () => {
        const activeTasks = state.taskList.filter((task) => !task.completed)
        console.log('activeTasks', activeTasks)
        const newTaskListFilter = {...state, taskListFilter: activeTasks}
        dispatch(setVisibilityFilter(newTaskListFilter))
    }
    const showCompleted = () => {
        const completedTasks = state.taskList.filter((task) => task.completed)
        console.log('completedTasks', completedTasks)
        const newTaskListFilter = {...state, taskListFilter: completedTasks}
        dispatch(setVisibilityFilter(newTaskListFilter))

    }

    return (
        <div>
            <button onClick={showAll}>Show All</button>
            <button onClick={showActive}>Show Active</button>
            <button onClick={showCompleted}>Show Completed</button>
        </div>
    );
};


export default Filter;
