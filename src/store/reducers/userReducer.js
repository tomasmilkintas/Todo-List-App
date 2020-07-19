import * as actionTypes from "../actions/actionTypes";

const initialState = {
    userId: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    token: null,
    error: null,
    loading: false,
    authRedirectPath: "/home",
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REGISTER_USER:
            return {
                ...state,
                firstName: action.firstName,
                lastName: action.lastName,
                email: action.email,
                password: action.password,
                token: action.idToken,
                userId: action.userId,
            };
        case actionTypes.LOGIN_USER:
            return {
                ...state,
                firstName: action.firstName,
                lastName: action.lastName,
                authRedirectPath: action.authRedirectPath,
            };
        case actionTypes.LOGOUT_USER:
            return { ...state, userId: null, authRedirectPath: action.authRedirectPath };
        case actionTypes.RECOVER_USER:
            return { ...state, email: action.email };
        case actionTypes.GET_USER_DETAILS:
            return {
                ...state,
                firstName: action.firstName,
                lastName: action.lastName,
                email: action.email,
            };
        case actionTypes.UPDATE_USER_DETAILS:
            return { ...state, firstName: action.firstName, lastName: action.lastName };
        default:
            return state;
    }
};
