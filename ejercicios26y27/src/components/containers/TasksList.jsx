import React, { useReducer, useContext, createContext } from "react";
import Task from '../pure/Task'
import TaskForm from '../pure/form/TaskForm'

//Actions
const CREATE_TASK = 'CREATE_TASK';

export const myContext = React.createContext(null);

const TaskList = () => {

    //Initial State for reducer
    const initialState = {
        id: 0,
        taskname: '',
        description: '',
        completed: false
    }

    //Reducer to change State
    const reducer = (state, action) => {

        switch (action.type) {
            case CREATE_TASK:
                return {
                    id: state.id + action.payload.id,
                    taskname: action.payload.taskname,
                    description: action.payload.description,
                    completed: action.payload.completed
                }
            default:
                return state;
        }
    }

    // Asign useReducer to state, reducer and dispatch actions
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <myContext.Provider value={state}>
            <Task />
            <TaskForm />
        </myContext.Provider>
    )
}

export default TaskList;