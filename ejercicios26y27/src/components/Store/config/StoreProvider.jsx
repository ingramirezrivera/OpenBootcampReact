import React, { createContext, useReducer } from 'react'
import Reducer from '../reducer/Reducer';

const initialState={
    task:{},
    taskList:[],
    taskListFilter: []
}

const Store = createContext(initialState);


const StoreProvider = ({ children }) => {

    const[state, dispatch] = useReducer(Reducer, initialState);
    console.log('state', state)

    return (
        <Store.Provider value={{state, dispatch}}>
        {children}
        </Store.Provider>
    )
}

export default StoreProvider
export {Store, initialState}