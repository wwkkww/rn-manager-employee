import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS 
} from './types';
import firebase from 'firebase';

export const emailChanged = (text) => { //action creator
    return {
        //return & dispatch action instantly. Action is an object with type property & optional payload
        type: EMAIL_CHANGED, 
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
}

export const loginUser = ({email, password}) => { //action creator
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
            //dispatch (as many action) manually (with redux-thunk) after asyn fetch is complete & success
            dispatch({ 
                type: LOGIN_USER_SUCCESS,
                payload: user
            });
        })
        .catch(()=> {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user));
        });
    };
}

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
}