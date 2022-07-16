import React, { useRef, useContext } from 'react';
import PropTypes from 'prop-types';

const Todoform = ({myContext, submit,}) => {

    const state = useContext(myContext);


    const newText = useRef();

    return (
        <div>
            <h2>Create your TODOs</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                submit(newText.current.value);
                newText.current.value = '';
            }}>
                <input type='text' ref={newText}/>
                <button type='submit'>
                    Create Todo
                </button>
            </form>
        </div>
    );
}

Todoform.propTypes = {
    submit: PropTypes.func.isRequired
}

export default Todoform;
