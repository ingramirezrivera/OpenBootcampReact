import React from 'react';
import PropTypes from 'prop-types';


const Todo = ({onclick, completed, id, text}) => {
    return (
        <div>
            <li 
                onClick={onclick}
                style={
                    {
                        textDecoration: completed ? 'line-through' : 'none',
                        textDecorationColor: completed ? 'blue' : 'none',
                        color: completed ? 'green' : 'white'
                    }
                }    
            >
                { id } - { text } - { completed ? 'Competed' : 'Pending'}
            </li>
        </div>
    );
};


Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired

};


export default Todo;
