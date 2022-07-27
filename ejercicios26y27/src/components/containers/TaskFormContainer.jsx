import React, { useContext, useState, useRef } from 'react';
import TaskForm from '../pure/TaskForm';
import { createTask } from '../Store/actions/actions';
import { Store } from '../Store/config/StoreProvider';

const TaskFormContainer = () => {

    const {state, dispatch} = useContext(Store);
    

    const submit = (taskName, taskDescription) => {
        dispatch(createTask(taskName,taskDescription))
    }
        
    return (
        <div>
            <TaskForm onSubmit={submit}/>
        </div>
    );
}

export default TaskFormContainer;



    // const [taskName, setTaskName] = useState('');
    // const [taskDescription, setTaskDescription] = useState('');

 // const createTask = (e, taskName, taskDescription) => {
    //     console.log('createTask')
    //     e.preventDefault()
    //     const newTask = {
    //         id: new Date().getTime(),
    //         taskName,
    //         taskDescription,
    //         completed: false
    //     }
    //     dispatch({
    //         type: 'CREATE_TASK',
    //         payload: newTask
    //     })
    //     formRef.current.reset()

    // }

    // function addTaskName(e){
    //     console.log(e.target.value)
    //     e.preventDefault()
    //     setTaskName(e.target.value)
    // }

    // function addTaskDescription(e){
    //     e.preventDefault()
    //     setTaskDescription(e.target.value)
    // }