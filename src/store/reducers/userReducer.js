import * as actionTypes from "../actions/actionTypes";

const initialState = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
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
            };
        case actionTypes.LOGIN_USER:
            return {
                ...state,
                email: action.email,
                password: action.password,
                authRedirectPath: action.authRedirectPath,
            };
        case actionTypes.LOGOUT_USER:
            return {
                ...state,
                email: null,
                password: null,
                authRedirectPath: action.authRedirectPath,
            };
        case actionTypes.RECOVER_USER:
            return { ...state, email: action.email, authRedirectPath: action.authRedirectPath };
        default:
            return state;
    }
};
