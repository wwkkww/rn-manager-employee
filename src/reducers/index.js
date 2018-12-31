import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';

export default combineReducers({
    //[state key name for mapStateToProps] : reducer
    auth : AuthReducer,
    employeeForm: EmployeeFormReducer
})