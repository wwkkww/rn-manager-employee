import {EMPLOYEE_UPDATE} from './types';

//action creator
export const employeeUpdate = ({prop, value}) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value } // { prop: 'name', value: 'jane'}
    }
}