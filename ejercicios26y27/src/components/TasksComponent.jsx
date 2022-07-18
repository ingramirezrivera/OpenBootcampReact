import React, { useReducer } from 'react'
import { useRef } from 'react';
import { createContext } from 'react'

const myContext = createContext(null);

//Actions
const CREATE_TASK = 'CREATE_TASK';

export default function TaskComponent() {

    const newTaskName = useRef();
    const newTaskDescription = useRef();

    //Initial State for reducer
    const initialState = []
    
    //Reducer
    const reducer = (state, action) => {
      switch (action.type) {
        
        case CREATE_TASK:
            return [
              ...state,
              {
                taskname: action.payload.taskname,
                taskdescription: action.payload.taskdescription
              }
            ]
          
        default: 
          return state
      }
    
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const { taskname } = state;
    console.log('taskname', taskname)

    const submit = (e) => {
      e.preventDefault()
      dispatch({
        type: CREATE_TASK,
        payload: {
          taskname: newTaskName.current.value,
          taskdescription: newTaskDescription.current.value
        }
      })
      newTaskName.current.value = '';
      newTaskDescription.current.value = '';

    }
    console.log('state', state)
  
  return (
    <myContext.Provider value={state}>
      <div>
        <h1>Task List</h1>
        

        <div>
          <h1>Create Task</h1>
          <form onSubmit={submit}>
            <input  type='text'
                    placeholder='Task Name'
                    ref={newTaskName} 
                    />
            <input  type='text'
                    placeholder='Task Description'
                    ref={newTaskDescription} 
                    />
            <button type='submit'>Add task</button>
          </form>
        </div>
      </div>
      
    </myContext.Provider>
  )
}