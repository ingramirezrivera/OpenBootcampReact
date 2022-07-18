import React, { useReducer } from 'react'
import { createContext } from 'react'

const myContext = createContext(null);

//Actions
const FIELD = 'FIELD';
const CREATE_TASK = 'CREATE_TASK';

export default function TaskComponent() {

    //Initial State for reducer
    const initialState = []
    
    //Reducer
    const reducer = (state=initialState, action) => {
      switch (action.type) {
        case FIELD:
            return {
                ...state,
                [action.fieldName]: action.payload
            }
        case CREATE_TASK:
            return [
              ...state,
              {
                id: action.payload.id,
                taskname: action.payload.taskname,
              }
            ]
          
        default: 
          return state
      }
    
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const { taskname } = state;
    console.log('taskname', taskname)

    let nextid = 0;

    const submit = (e) => {
      e.preventDefault()
      dispatch({
        type: CREATE_TASK,
        payload: {
          id: nextid++,
          taskname
        }
      })
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
                    value={taskname}
                    onChange={(e) => {
                        dispatch({
                          type: FIELD,
                          fieldName: 'taskname',
                          payload: e.currentTarget.value
                        })
                    }} 
                    />
            <button type='submit'>Add task</button>
          </form>
        </div>
      </div>
      
    </myContext.Provider>
  )
}