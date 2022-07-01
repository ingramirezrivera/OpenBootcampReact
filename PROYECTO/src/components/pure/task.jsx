import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import '../../styles/task.scss'
import { LEVELS } from '../../models/levels.enum';


const TaskComponent = ({ task }) => {


    useEffect(() => {
        console.log('created Task')
        return () => {
            console.log(`Task: ${task.name} is gping to unmount`);
        };
    }, [task]);

    /**
     * Function that returns a Badge depending on the level of the task
     */
    function taskLevelBadge(){
        switch(task.level){
            case LEVELS.NORMAL:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-primary'>
                        { task.level }
                    </span>
                </h6>)
            case LEVELS.URGENT:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-warning'>
                        { task.level }
                    </span>
                </h6>)
            case LEVELS.BLOCKING:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-danger'>
                        { task.level }
                    </span>
                </h6>)
            default:
                break;
        }
    }
    
    /**
     * 
     * Function that returns icon depending on completion of the task
     */
    function taskCompletedIcon(){
        if(task.completed){
            return(<i class="bi bi-toggle-on" style={ {color: 'green', fontSize: '20px'} }></i>)
        }else {
            return(<i class="bi bi-toggle-off" style={ {color: 'grey', fontSize: '20px'}}></i>)
        }
    }

    return (

        <tr className='fw-normal '>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>

            <td className='align- middle'>
                <span className='ms-2'>{task.description}</span>
            </td>
            <td className='align- middle'>
            {/* EXECUTION OF FUNTION TO RETURN BADGE ELEMENT */}
                {taskLevelBadge()}
            </td>
            <td className='align- middle'>
                {/* EXECUTION OF A FUCNTION TO RETURN ICON DEPENDING ON COMPLETION */}
                { taskCompletedIcon() }
                <i class="bi bi-trash" style={ {color: 'tomato', fontSize: '20px'} }></i>
                
            </td>

        </tr>


        
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
