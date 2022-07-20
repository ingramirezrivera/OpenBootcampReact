import React, { useReducer } from 'react'
import { useRef } from 'react';
import { createContext } from 'react'

const myContext = createContext(null);

//Actions
const CREATE_TASK = 'CREATE_TASK';
const TOGGLE_TASK = 'TOGGLE_TASK';
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

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
                id: action.payload.id,
                taskname: action.payload.taskname,
                taskdescription: action.payload.taskdescription,
                completed: action.payload.completed
              }
            ]
        case TOGGLE_TASK:
          return state.map((task) => 
              (task.id === action.payload.id)
              ?
              {
                  ...task,
                  completed: !task.completed
              }
              :
              task
          ) 
        
        default: 
          return state
      }
    
    }

  let initialStateFilter = 'SHOW_ALL'

  const filterReducer = (state=initialStateFilter, action) => {

      switch (action.type) {
          case SET_VISIBILITY_FILTER:
              return action.payload.filter
          default:
              return state;
      }

  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const createTask = () => {
    dispatch({
      type: CREATE_TASK,
      payload: {
        id: new Date().getTime(),
        taskname: newTaskName.current.value,
        taskdescription: newTaskDescription.current.value,
        completed: false
      }
    })
  }

  
  const toggleTask = (id) => {
    console.log('taskclick', id)
    dispatch({
      type: TOGGLE_TASK,
      payload: {
        id
      }
    }
    )
  }

  const setVisibilityFilter = (filter) => {
    console.log(filter)
    return {
      type: SET_VISIBILITY_FILTER,
      payload: {
        filter
      }
    }
  }
  
  const submit = (e) => {
    e.preventDefault()
    createTask()
    newTaskDescription.current.value = '';
    newTaskName.current.value = '';

  }
  console.log('state', state)

  const filterTask = (filter) => {
    setVisibilityFilter(filter)
  }
    
  return (
    <myContext.Provider value={state}>
      <div>
        <h1>Task List</h1>
        <ul>
                {state.map((task, index) => 
                    (
                      <li key={index} {...task}
                          onClick = {() => toggleTask(task.id)}
                          style={
                            {
                                textDecoration: task.completed ? 'line-through': 'none',
                                textDecorationColor: task.completed ? 'grey' : 'none',
                                color: task.completed ? 'green' : 'white'  
                            }
                          } 
                      >
                        <span>{task.id} - </span>
                        <span>{task.taskname} - </span>
                        <span>{task.taskdescription}</span>
                        <span> - {task.completed ? 'Completed' : 'Pending'}</span>

                      </li>
                        
                    )
                  )
                }
        </ul>
        <div>
          <h1>Filter Options</h1>
          <button className='filter' onClick={() => filterTask('SHOW_ALL')}>Show All</button>
          <button className='filter' onClick={() => filterTask('SHOW_ACTIVE')}>Show Active</button>
          <button className='filter' onClick={() => filterTask('SHOW_COMPLETED')}>Show Completed</button>
          
          
        </div>
        
        
        
        

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