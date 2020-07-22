import * as actionTypes from "./actionTypes";
import firebaseInit from "../../API/config/FirebaseInit";

export const getUserData = () => (dispatch) => {
    let userId = firebaseInit.auth().currentUser.uid;
    let ref = firebaseInit.database().ref(`users/${userId}`);
    ref.on(
        "value",
        (data) => {
            let values = data.val();
            dispatch({
                type: actionTypes.GET_USER_DETAILS,
                userId: values.userId,
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
            });
        },
        (err) => console.log(err)
    );
};

export const updateUser = (firstName, lastName) => {
    return {
        type: actionTypes.UPDATE_USER_DETAILS,
        firstName: firstName,
        lastName: lastName,
    };
};
