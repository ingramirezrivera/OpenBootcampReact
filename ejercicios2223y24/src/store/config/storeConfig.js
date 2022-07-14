import { legacy_createStore as createStore } from 'redux'
import { rootReducer } from '../reducers/rootReducer';


const createAppStore = () => {
    let store = createStore(rootReducer);
    return store;
}

export default createAppStore