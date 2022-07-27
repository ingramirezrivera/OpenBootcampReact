import React, { useState, useRef, useContext } from 'react';
import { Store } from '../Store/config/StoreProvider';

const TaskForm = ({onSubmit}) => {

    const newTaskName = useRef();
    const newTaskDescription = useRef();

    const handelSubmit = (e) => {
        e.preventDefault()
        onSubmit(newTaskName.current.value, newTaskDescription.current.value)
        newTaskName.current.value = '';
        newTaskDescription.current.value = '';
    }

    return (
        <form onSubmit={handelSubmit}>
            <input  type='text'
                    placeholder='Task Name'
                    ref={ newTaskName }
                    />
            <input  type='text'
                    placeholder='Task Description'
                    ref={ newTaskDescription }
                    />
            <button type='submit'>Add task</button>
        </form>
    );
}

export default TaskForm;
