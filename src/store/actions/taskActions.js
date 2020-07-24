import * as actionTypes from "./actionTypes";
import firebaseInit from "../../API/config/FirebaseInit";

// not quite adjusted yet, will tackle user first, just as a mockup of fleshing it out

export const fetchTasks = () => (dispatch) => {
    let userId = firebaseInit.auth().currentUser.uid;
    let tasksRef = firebaseInit.database().ref(`users/${userId}/tasks`);
    let newList = [];

    tasksRef.once("value", (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            // let childKey = childSnapshot.key;
            let childData = childSnapshot.val();
            newList.push(childData);
            // ...
        });
        dispatch({
            type: actionTypes.FETCH_TASKS,
            taskList: newList,
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
                type: actionTypes.NEW_TASK,
                payload: task,
            })
        );

    newList.push(newTask);
    newTask = {};
};
