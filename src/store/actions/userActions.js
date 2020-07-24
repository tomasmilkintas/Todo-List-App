import * as actionTypes from "./actionTypes";
import * as actions from "./index";
import firebaseInit from "../../API/config/FirebaseInit";

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
            dispatch(actions.authFail(err));
        });
};

export const registerUser = (firstName, lastName, email, password) => (dispatch) => {
    dispatch(actions.authSignupRequest());
    firebaseInit
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
            let userId = firebaseInit.auth().currentUser.uid;

            firebaseInit
                .database()
                .ref("users/" + userId)
                .set({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    userId: userId,
                })
                .then(
                    dispatch({
                        type: actionTypes.REGISTER_USER,
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        userId: userId,
                    })
                )

                .then(firebaseInit.auth().currentUser.updateProfile({ displayName: firstName }))
                .catch((err) => {
                    dispatch(actions.authFail(err));
                });
        });
};

export const recoverUser = (email) => (dispatch) => {
    let actionCodeSettings = {
        // After password reset, the user will be give the ability to go back
        // to this page.
        url: process.env.REACT_APP_BASE_URL,
        handleCodeInApp: false,
    };

    firebaseInit
        .auth()
        .sendPasswordResetEmail(email, actionCodeSettings)
        .then(alert("Please check your email..."))
        .then(
            dispatch({
                type: actionTypes.RECOVER_USER,
                email: email,
            })
        )
        .catch((e) => {
            console.log(e);
            alert(e.message);
        });
};
