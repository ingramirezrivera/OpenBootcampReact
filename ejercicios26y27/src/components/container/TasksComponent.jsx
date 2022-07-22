import React, { useReducer } from 'react'
import { useRef } from 'react';
import { createContext } from 'react'

const myContext = createContext(null);

//Actions
const CREATE_TASK = 'CREATE_TASK';
const TOGGLE_TASK = 'TOGGLE_TASK';

export default function TaskComponent() {

    const newTaskName = useRef();
    const newTaskDescription = useRef();

    const filterTasks = (tasks, filter) => {
      switch (filter) {
          case 'SHOW_ALL':
              return tasks;
          case 'SHOW_ACTIVE':
              return tasks.filter((task) => !task.completed)
          case 'SHOW_COMPLETED':
              return tasks.filter((task) => task.completed)
          default:
              return tasks;
      }
    }


    //Initial State for reducer
    let initialState = []

    //Task Reducer
    const taskReducer = (state, action) => {
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


  const [state, dispatch] = useReducer(taskReducer, initialState)
  console.log(dispatch)

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
  
  const submit = (e) => {
    e.preventDefault()
    createTask()
    newTaskDescription.current.value = '';
    newTaskName.current.value = '';

  }

  const filterTask = (filter) => {
    filterTasks(state,filter)

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