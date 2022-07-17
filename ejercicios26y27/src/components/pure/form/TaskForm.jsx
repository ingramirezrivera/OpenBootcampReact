import React, { useContext }  from 'react';
import { myContext } from '../../containers/TasksList';

import PropTypes from 'prop-types';

const Todoform = () => {

    const state = useContext(myContext);



    return (
        <div>
            <h2>Create your Task</h2>
            <form >
                <input type='text' 
                        placeholder='Task Name' 
                        value = {taskname}
                        onChange = {(e) => 
                            dispatch({
                                type: CREATE_TASK, 
                                fieldName:'taskname', 
                                payload: e.currentTarget.value
                                })
                                }/>
                <input type='text' placeholder='Task Description'/>
                <button type='submit'>
                    Create Task
                </button>
            </form>
        </div>
    );
}

// Todoform.propTypes = {
//     submit: PropTypes.func.isRequired
// }

export default Todoform;
