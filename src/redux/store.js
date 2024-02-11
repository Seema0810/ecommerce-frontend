 // this store will be applicable or available throughout the application
import {createStore} from 'redux';
import rootReducer from './combineReducer';

const store= createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
   
   

export default store;