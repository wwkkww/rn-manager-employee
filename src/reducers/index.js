import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

export default combineReducers({
    //[key state name] : reducer
    auth : AuthReducer
})