import React,{ useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';
import '../../styles/task.scss'
import TaskForm from '../pure/forms/taskForm';



const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description ', true, LEVELS.URGENT);
    const defaultTask1 = new Task('Example1', 'Default description 1', false, LEVELS.URGENT);
    const defaultTask2 = new Task('Example2', 'Default description 2', false, LEVELS.BLOCKING);
    const defaultTask3 = new Task('Example3', 'Default description 3', true, LEVELS.NORMAL);


    //Estado del componente
    const [tasks, setTasks] = useState([defaultTask, defaultTask1, defaultTask2, defaultTask3 ]);
    const [loading, setLoading] = useState(true);

    //control del ciclo de vida del componente
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);

        console.log('Task state has been modified')
        return () => {  
            console.log('Tasklist component is going to unmount')
        };
    }, [tasks]);

    function completeTask(task){
        console.log('Complete this Task:', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed;
        // We update the state of the component with the new list of tasks and it will update the
        // Iteration of the tasks in order to show the task updated
        setTasks(tempTasks);
    }
    
    function removeTask(task){
        console.log('Delete this Task:', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index,1);
        setTasks(tempTasks);
    }

    function addTask(task){
        console.log('Delete this Task:', task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }

    const Table = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th scope='col'>Description</th>
                    <th scope='col'>Title</th>
                    <th scope='col'>Priority</th>
                    <th scope='col'>Actions</th>

                </tr>
            </thead>
            <tbody>
                {/* ITERAR SOBRE UNA LISTA DE TAREAS */}
                {tasks.map((task, index) => {
                    return(
                        <TaskComponent 
                            key={index}
                            task={task}
                            complete={completeTask}
                            remove = {removeTask}>
                        </TaskComponent>
                    )
                })}
            </tbody>
        </table>

    )
    }

    let tasksTable = <Table></Table>

    if(tasks.length > 0){
        tasksTable = <Table></Table>
    }else {
        tasksTable = (
            <div>
                <h3>There are no task to show</h3>
                <h4>Please create one</h4>
            </div>
            
        ) 

    }

    const spinner = () => {
        return(
            <div class="text-center">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>
                            Your Tasks: 
                        </h5>
                    </div>
                    {/* CARD BODY CONTENT */}
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ { position: 'relative', height: '400px'} }>
                        { loading ? spinner() : tasksTable }  
                    </div>
                </div>
                <TaskForm add={addTask} length={tasks.length}>

                </TaskForm>
            </div>
            {/* TODO: aplicar un for/MAp para renderizar una lista */}
            
        </div>
    );
};



export default TaskListComponent;
