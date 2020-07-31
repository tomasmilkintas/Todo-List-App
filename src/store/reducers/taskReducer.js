import * as actionTypes from "../actions/actionTypes";

const initialState = {
    tasksTodo: [],
    tasksDoing: [],
    tasksComplete: [],
    task: {},
    key: "",
    title: "",
    description: "",
    deadline: "",
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_TASKS_TODO:
            return { ...state, tasksTodo: action.tasksTodo };
        case actionTypes.FETCH_TASKS_DOING:
            return { ...state, tasksDoing: action.tasksDoing };
        case actionTypes.FETCH_TASKS_COMPLETE:
            return { ...state, tasksComplete: action.tasksComplete };
        case actionTypes.NEW_TASK:
            const newTask = {
                ...action.task,
            };
            return {
                ...state,
                tasksTodo: state.tasksTodo.concat(newTask),
            };
        case actionTypes.GET_TASK_DETAILS:
            return {
                ...state,
                key: action.key,
                title: action.title,
                description: action.description,
                deadline: action.deadline,
            };
        case actionTypes.UPDATE_TASK_DETAILS:
            return {
                ...state,
                key: action.key,
                title: action.title,
                description: action.description,
                deadline: action.deadline,
            };
        case actionTypes.DELETE_TASK:
            return { ...state, key: action.key };
        case actionTypes.MOVE_TASK_TO_TODO:
            return { ...state, tasksTodo: action.tasksTodo };
        case actionTypes.MOVE_TASK_TO_DOING:
            return { ...state, tasksDoing: action.tasksDoing };
        case actionTypes.MOVE_TASK_TO_COMPLETE:
            return { ...state, tasksComplete: action.tasksComplete };

        default:
            return state;
    }
};
