import { legacy_createStore as createStore } from 'redux'
import { rootReducer } from '../reducers/rootReducer';



export const createAppStore = () => {
    let store = createStore(rootReducer);
    return store
}