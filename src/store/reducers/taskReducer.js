import * as actionTypes from "../actions/actionTypes";

const initialState = {
    taskList: [],
    task: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_TASKS:
            return { ...state, tasksList: action.payload };
        case actionTypes.NEW_TASK:
            return { ...state, task: action.payload };
        case actionTypes.DELETE_TASK:
            return { ...state, task: action.payload };
        default:
            return state;
    }
};
