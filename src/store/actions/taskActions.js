import { FETCH_TASKS, NEW_TASK } from "./actionTypes";
import firebaseInit from "../../API/config/FirebaseInit";

// not quite adjusted yet, will tackle user first, just as a mockup of fleshing it out

export const fetchTasks = () => (dispatch) => {
    console.log("fetching");

    let userId = firebaseInit.auth().currentUser.uid;

    let tasksRef = firebaseInit.database().ref(`users/${userId}/tasks`);
    tasksRef
        .on("value", (snapshot) => {
            const list = [];
            let newTask = { key: "", value: "" };

            snapshot.forEach((childSnapshot) => {
                let childData = childSnapshot.val().value;
                let childKey = childSnapshot.key;
                newTask.key = childKey;
                newTask.value = childData;
                list.push(newTask);
                newTask = {};
            });
        })
        .then((taskList) =>
            dispatch({
                actionTypes: FETCH_TASKS,
                payload: taskList,
            })
        );
};

export const createTask = (postData) => (dispatch) => {
    let userId = firebaseInit.auth().currentUser.uid;
    let tasksRef = firebaseInit.database().ref(`users/${userId}/tasks`);

    let newTask = {
        key: "",
        value: this.state.newTask.slice(),
    };

    const list = [];

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

    list.push(newTask);
    newTask = {};
};
