import * as actionTypes from "../actions/actionTypes";

const initialState = {
    taskList: [],
    task: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_TASKS:
            return { ...state, taskList: action.taskList };
        case actionTypes.NEW_TASK:
            return { ...state, task: action.task };
        case actionTypes.DELETE_TASK:
            return { ...state, task: action.task, taskList: action.taskList };
        default:
            return state;
    }
};
