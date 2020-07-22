import * as actionTypes from "../actions/actionTypes";

const initialState = {
    userId: "",
    email: "",
    firstName: "",
    lastName: "",
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_USER_DETAILS:
            return {
                ...state,
                userId: action.userId,
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
