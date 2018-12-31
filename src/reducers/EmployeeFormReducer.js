import {
    EMPLOYEE_UPDATE
} from '../actions/types';

const INITIAL_STATE = {name: '', phone: '', shift: ''};


export default ( state = INITIAL_STATE, action ) => {
    console.log(action)
    //action.payload === { prop: 'name', value: 'jane'}
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            return { ...state, [action.payload.prop]:action.payload.value}; //key: value
            // const newState = {};
            // newState[action.payload.prop] = action.payload.value
            // return { ...state, ...newState}
        default:
            return state;
    }
}