import { FETCH_TASKS, NEW_TASK } from "../actions/actionTypes";

const initialState = {
    taskList: [],
    task: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TASKS:
            return { ...state, tasksList: action.payload };
        case NEW_TASK:
            return { ...state, task: action.payload };
        default:
            return state;
    }
};
