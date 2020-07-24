import * as actionTypes from "./actionTypes";
import * as actions from "./index";

import firebaseInit from "../../API/config/FirebaseInit";

export const authLoginRequest = () => {
    return {
        type: actionTypes.AUTH_LOGIN_REQUEST,
    };
};
export const authLoginResponse = (token, userId) => {
    return {
        type: actionTypes.AUTH_LOGIN_RESPONSE,
        idToken: token,
        userId: userId,
    };
};
export const authSignupRequest = () => {
    return {
        type: actionTypes.AUTH_SIGNUP_REQUEST,
    };
};
export const authSignupResponse = (token, userId) => {
    return {
        type: actionTypes.AUTH_SIGNUP_RESPONSE,
        idToken: token,
        userId: userId,
    };
};
export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error,
    };
};

export const authStateChanged = () => (dispatch) => {
    firebaseInit.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in.
            dispatch({
                type: actionTypes.AUTH_STATE_CHANGED,
                idToken: user._lat,
                userId: user.uid,
            });
            dispatch(actions.getUserData());
            dispatch(actions.fetchTasks());
        } else {
            // No user is signed in.
            dispatch({ type: actionTypes.AUTH_STATE_CHANGED, idToken: null, userId: null });
            dispatch({
                type: actionTypes.GET_USER_DETAILS,
                userId: null,
                firstName: null,
                lastName: null,
                email: null,
            });
            dispatch({ type: actionTypes.FETCH_TASKS, taskList: [] });
        }
    });
};

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        authRedirectPath: path,
    };
};
