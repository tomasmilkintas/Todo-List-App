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

export const createTask = (taskTitle, taskDescription) => (dispatch) => {
    let userId = firebaseInit.auth().currentUser.uid;
    let tasksRef = firebaseInit.database().ref(`users/${userId}/tasks`);

    let newTaskRef = tasksRef.push();
    let taskKey = newTaskRef.key;

    let newTask = {
        title: taskTitle,
        description: taskDescription,
        key: taskKey,
    };
    newTaskRef
        .set({
            // ...
            ...newTask,
        })
        .then((task) => {
            dispatch({
                type: actionTypes.NEW_TASK,
                task: task,
            });
            dispatch(fetchTasks());
        })
        .catch((err) => console.log(err.message));
    newTask = {};
};

export const deleteTask = (key) => (dispatch) => {
    let userId = firebaseInit.auth().currentUser.uid;
    let tasksRef = firebaseInit.database().ref(`users/${userId}/tasks`);

    tasksRef
        .child(key)
        .remove()
        .then(
            dispatch({
                type: actionTypes.DELETE_TASK,
                key: key,
            }),
            dispatch(fetchTasks())
        )
        .catch((err) => console.log(err.message));
};
