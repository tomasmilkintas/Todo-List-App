import { combineReducers } from "redux";
import taskReducer from "./taskReducer";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import databaseReducer from "./databaseReducer.js";

export default combineReducers({
    tasks: taskReducer,
    auth: authReducer,
    user: userReducer,
    database: databaseReducer,
});
