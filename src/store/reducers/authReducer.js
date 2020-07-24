import * as actionTypes from "../actions/actionTypes";

const initialState = {
    userId: null,
    token: null,
    error: false,
    authRedirectPath: "/home",
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_LOGIN_REQUEST:
            return { ...state };
        case actionTypes.AUTH_LOGIN_RESPONSE:
            return { ...state, token: action.idToken, userId: action.userId, error: false };
        case actionTypes.AUTH_SIGNUP_REQUEST:
            return { ...state };
        case actionTypes.AUTH_SIGNUP_RESPONSE:
            return { ...state, token: action.idToken, userId: action.userId, error: false };
        case actionTypes.AUTH_FAIL:
            return { ...state, error: action.error };
        case actionTypes.SET_AUTH_REDIRECT_PATH:
            return { ...state, authRedirectPath: action.authRedirectPath };

        // general check for authentication state
        case actionTypes.AUTH_STATE_CHANGED:
            return { ...state, token: action.idToken, userId: action.userId };
        default:
            return state;
    }
};
