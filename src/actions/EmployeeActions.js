import firebase from 'firebase';
import { 
    EMPLOYEE_UPDATE, 
    EMPLOYEE_CREATE, 
    EMPLOYEES_FETCH_SUCCESS, 
    EMPLOYEE_SAVE_SUCCESS 
} from './types';
import { Actions } from 'react-native-router-flux';

//action creator
export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value } // { prop: 'name', value: 'jane'}
    }
}

export const employeeCreate = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth();

    //redux-thunk rules
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({ name, phone, shift })
            .then(() => {
                dispatch({ type: EMPLOYEE_CREATE });
                // Actions.employeeList({ type: 'reset' });
                Actions.pop();
            });
    }
};

export const employeesFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
                dispatch({ 
                    type: EMPLOYEES_FETCH_SUCCESS, 
                    payload: snapshot.val() 
                });
            });
    }
};

export const employeeSave = ({name, phone, shift, uid})=> {
    const { currentUser } = firebase.auth();

    //redux-thunk rules
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .set({ name, phone, shift })
            .then(() => {
                dispatch({ type: EMPLOYEE_SAVE_SUCCESS })
                Actions.pop();
            });
    }
}