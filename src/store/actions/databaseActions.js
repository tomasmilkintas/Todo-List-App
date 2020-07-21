import * as actionTypes from "./actionTypes";

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
