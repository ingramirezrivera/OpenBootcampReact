import React, { useContext } from 'react'
import { myContext } from '../containers/TasksList'

function Task() {

  const state = useContext(myContext);

  const { id, taskname, description, completed } = state;

  console.log(state)
  
  return (
      <li>
        <p>Tasks: { id }</p>
        <p>Tasks Name: { taskname }</p>
        <p>Tasks Description: { description }</p>
        <p>Task Completed: { completed ? 'Completed' : 'Pending' }</p>
      </li>
  )
}

export default Task;