import React from 'react'
import TaskList from '../pure/TaskList'


export default function TaskListContainer() {

  const filterTasks = (tasks, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return tasks;
        case 'SHOW_ACTIVE':
            return tasks.filter((todo) => !todo.completed);
        case 'SHOW_COMPLETED':
            return tasks.filter((todo) => todo.completed);
        default:
            return tasks;
    }
  }

  return (
    <div>
        <TaskList />
    </div>
  )
}
