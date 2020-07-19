import * as actionTypes from "./actionTypes";

export const registerUser = (firstName, lastName, email, password) => {
    return {
        type: actionTypes.REGISTER_USER,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
    };
};
export const loginUser = (email, password) => {
    return {
        type: actionTypes.LOGIN_USER,
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
export const logoutUser = () => {
    return {
        type: actionTypes.LOGOUT_USER,
    };
};
