import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEE_SAVE_SUCCESS,
    EMPLOYEE_DELETE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {name: '', phone: '', shift: ''};


export default ( state = INITIAL_STATE, action ) => {
    //action.payload === { prop: 'name', value: 'jane'}
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            return { ...state, [action.payload.prop]:action.payload.value}; //key: value
            // const newState = {};
            // newState[action.payload.prop] = action.payload.value
            // return { ...state, ...newState}

        case EMPLOYEE_CREATE:
            return INITIAL_STATE;

        case EMPLOYEE_SAVE_SUCCESS:
            return INITIAL_STATE;
        
        case EMPLOYEE_DELETE_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
}