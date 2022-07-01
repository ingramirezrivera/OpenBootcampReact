import React,{ useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';
import '../../styles/task.scss'
import TaskForm from '../pure/forms/taskForm';



const TaskListComponent = () => {

    const defaultTask1 = new Task('Example1', 'Default description 1', false, LEVELS.URGENT);
    const defaultTask2 = new Task('Example2', 'Default description 2', true, LEVELS.BLOCKING);
    const defaultTask3 = new Task('Example3', 'Default description 3', true, LEVELS.NORMAL);


    //Estado del componente
    const [tasks, setTask] = useState([defaultTask1, defaultTask2, defaultTask3 ]);
    const [loading, setLoading] = useState(true);

    //control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task state has been modified')
        setLoading(false);
        return () => {  
            console.log('Tasklist component is going to unmount')
        };
    }, [tasks]);

    const changeCompleted = (id) => {
        console.log('TODO: Cambiar estado de una tarea')
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
                        <table>
                            <tr>
                                <th scope='col'>Title</th>
                                <th scope='col'>Description</th>
                                <th scope='col'>Priority</th>
                                <th scope='col'>Actions</th>
                            </tr>
                            <tbody>
                                {/* ITERAR SOBRE UNA LISTA DE TAREAS */}
                                {tasks.map((task, index) => {
                                    return(
                                        <TaskComponent 
                                            key={index}
                                            task={task}>
                                        </TaskComponent>
                                        
                                    )
                                })}
                            </tbody>

                        </table>   
                    </div>
                    <TaskForm></TaskForm>
                </div>
            </div>
            {/* TODO: aplicar un for/MAp para renderizar una lista */}
            
        </div>
    );
};



export default TaskListComponent;
