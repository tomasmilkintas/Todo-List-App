import * as actionTypes from "../actions/actionTypes";

const initialState = {
    taskList: [],
    task: {},
    key: "",
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_TASKS:
            return { ...state, taskList: action.taskList };
        case actionTypes.NEW_TASK:
            const newTask = {
                ...action.task,
            };
            return {
                ...state,
                taskList: state.taskList.concat(newTask),
            };
        case actionTypes.DELETE_TASK:
            return { ...state, key: action.key };
        default:
            return state;
    }
};
