import * as actionTypes from "./actionTypes";
import * as actions from "./index";
import firebaseInit from "../../API/config/FirebaseInit";

export const registerUser = (firstName, lastName, email, password) => {
    return {
        type: actionTypes.REGISTER_USER,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
    };
};
export const recoverUser = (email) => {
    return {
        type: actionTypes.RECOVER_USER,
        email: email,
    };
};
export const getUserData = (userId, token) => {
    return {
        type: actionTypes.GET_USER_DETAILS,
        idToken: token,
        userId: userId,
    };
};
export const updateUser = (firstName, lastName) => {
    return {
        type: actionTypes.UPDATE_USER_DETAILS,
        firstName: firstName,
        lastName: lastName,
    };
};
export const logoutUser = () => (dispatch) => {
    firebaseInit
        .auth()
        .signOut()
        .then(() =>
            dispatch({
                type: actionTypes.LOGOUT_USER,
            })
        );
};

export const loginUser = (email, password) => (dispatch) => {
    dispatch(actions.authStart());
    firebaseInit
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((response) => {
            dispatch(actions.authSuccess(response.user._lat, response.user.uid));
            dispatch({
                type: actionTypes.LOGIN_USER,
                email: email,
                password: password,
            });
        })
        .catch((err) => {
            console.log(err);
            dispatch(actions.authFail(err));
        });
};
