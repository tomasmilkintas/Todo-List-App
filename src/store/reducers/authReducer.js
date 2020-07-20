import * as actionTypes from "../actions/actionTypes";

const initialState = {
    userId: null,
    token: null,
    error: false,
    loading: false,
    authRedirectPath: "/home",
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return { ...state };
        case actionTypes.AUTH_SUCCESS:
            return { ...state, token: action.idToken, userId: action.userId };
        case actionTypes.AUTH_FAIL:
            return { ...state, error: action.error };
        default:
            return state;
    }
};
