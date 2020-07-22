import { FETCH_TASKS, NEW_TASK } from "./actionTypes";
import firebaseInit from "../../API/config/FirebaseInit";

// not quite adjusted yet, will tackle user first, just as a mockup of fleshing it out

export const fetchTasks = () => (dispatch) => {
    let userId = firebaseInit.auth().currentUser.uid;
    let tasksRef = firebaseInit.database().ref(`users/${userId}/tasks`);

    const list = [];

    tasksRef
        .on("value", (data) => {
            let values = data.val();
            console.log(values);

            // let newList = values.map((item) => [item.key, item.value]);
        })
        .then((res) => {
            console.log(res);

            dispatch({
                actionTypes: FETCH_TASKS,
                taskList: list,
            });
        });
};

export const createTask = (postData) => (dispatch) => {
    let userId = firebaseInit.auth().currentUser.uid;
    let tasksRef = firebaseInit.database().ref(`users/${userId}/tasks`);

    let newTask = {
        key: "",
        value: this.state.newTask.slice(),
    };

    const newList = [];

    tasksRef
        .push({
            ...newTask,
        })
        .then((res) => {
            newTask.key = res.key;
        })
        .then((task) =>
            dispatch({
                type: NEW_TASK,
                payload: task,
            })
        );

    newList.push(newTask);
    newTask = {};
};
