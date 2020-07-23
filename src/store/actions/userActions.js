import * as actionTypes from "./actionTypes";
import * as actions from "./index";
import firebaseInit from "../../API/config/FirebaseInit";
import { passwordRecoveryHandler } from "../../API/Authentication";

export const registerUser = (firstName, lastName, email, password) => {
    return {
        type: actionTypes.REGISTER_USER,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
    };
};
export const recoverUser = (email) => (dispatch) => {
    passwordRecoveryHandler(email);
    dispatch({
        type: actionTypes.RECOVER_USER,
        email: email,
    });
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
    dispatch(actions.authLoginRequest());
    firebaseInit
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((response) => {
            dispatch(actions.authLoginResponse(response.user._lat, response.user.uid));
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
