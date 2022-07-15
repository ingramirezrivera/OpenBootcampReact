import React from 'react';
import PropTypes from 'prop-types';


const Todo = ({onClick, completed, text, id}) => {
    return (
        <li onClick={onClick}>
            <span style={
                {
                    textDecoration: completed ? 'line-through' : 'none',
                    textDecorationColor: completed ? 'blue' : 'none',
                    color: completed ? 'green' : 'white'
                }
            }>{ id } - { text }</span> - <span>{ completed ? 'Completed' : 'Pending'}</span>
        </li>
    );
};


Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired

};


export default Todo;
