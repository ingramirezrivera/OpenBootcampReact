import React, { useReducer } from 'react';


// Actions
const CREATE_TASK = 'CREATE_TASK';
const ERASE_TASK = 'ERASE_TASK';
const SHOW_ALL = ' SHOW_ALL';
const SHOW_ACTIVE = 'SHOW_ACTIVE';
const SHOW_COMPLETED = 'SHOW_COMPLETED';
const ERROR = 'ERROR';

const myContext = React.createContext(null); 

// INITIAL STATE
const initialState = {
    id: '',
    taskName: '',
    description: '',
    completed: false,
    error: '',
    isLoading: false,
    isLoggedIn: false
}


// Reducer
    const taskReducer = (state, action) => {
        switch (action.type) {
            case CREATE_TASK:
                return {
                    ...state,
                    [action.fieldName]: action.payload
                }
            case ERASE_TASK:
                return {
                    ...state,
                    error: '',
                    isLoading: true
                }
            case SHOW_ALL:
                return {
                    ...state,
                    error: '',
                    isLoading: false,
                    isLoggedIn: true
                }
            case SHOW_ACTIVE:
                return {
                    ...state,
                    error: 'Invalid Username or Password',
                    isLoading: false,
                    isLoggedIn: false,
                    username:'',
                    password:''
                }
            case SHOW_COMPLETED:
                return {
                    ...state,
                    isLoggedIn: false
                }
            case ERROR:
                return {
                    ...state,
                    error: 'Invalid Username or Password',
                    isLoading: false,
                    isLoggedIn: false,
                    username:'',
                    password:''
                }
            default:
                return state;
    }


    const [state, dispatch] = useReducer(taskReducer, initialState);

    return (
        <myContext.Provider value={state}>

        </myContext.Provider>
        
    );

}
export default Loginusereducer;