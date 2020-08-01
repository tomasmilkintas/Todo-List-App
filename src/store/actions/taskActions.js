import * as actionTypes from "./actionTypes";
import firebaseInit from "../../API/config/FirebaseInit";

// not quite adjusted yet, will tackle user first, just as a mockup of fleshing it out

export const fetchTasks = (path) => (dispatch) => {
    let userId = firebaseInit.auth().currentUser.uid;
    let tasksRef = firebaseInit.database().ref(`users/${userId}/tasks/${path}`);
    let newList = [];

    tasksRef.once("value", (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            // let childKey = childSnapshot.key;
            let childData = childSnapshot.val();
            newList.push(childData);
            // ...
        });
        if (path === "tasksTodo") {
            dispatch({
                type: actionTypes.FETCH_TASKS_TODO,
                tasksTodo: newList,
            });
        } else if (path === "tasksDoing") {
            dispatch({
                type: actionTypes.FETCH_TASKS_DOING,
                tasksDoing: newList,
            });
        } else if (path === "tasksComplete") {
            dispatch({
                type: actionTypes.FETCH_TASKS_COMPLETE,
                tasksComplete: newList,
            });
        }
    });
};

export const createTask = (taskTitle, taskDescription, taskDeadline) => (dispatch) => {
    let userId = firebaseInit.auth().currentUser.uid;
    let tasksRef = firebaseInit.database().ref(`users/${userId}/tasks/tasksTodo`);

    let newTaskRef = tasksRef.push();
    let taskKey = newTaskRef.key;

    let newTask = {
        title: taskTitle,
        description: taskDescription,
        deadline: taskDeadline,
        key: taskKey,
    };

    console.log(newTask);
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
            dispatch(fetchTasks("tasksTodo"));
        })
        .catch((err) => console.log(err.message));
    newTask = {};
};

export const deleteTask = (key, path) => (dispatch) => {
    let userId = firebaseInit.auth().currentUser.uid;
    let tasksRef = firebaseInit.database().ref(`users/${userId}/tasks/${path}`);

    tasksRef
        .child(key)
        .remove()
        .then(
            dispatch({
                type: actionTypes.DELETE_TASK,
                key: key,
            }),
            dispatch(fetchTasks(path))
        )
        .catch((err) => console.log(err.message));
};

export const moveTaskToTodo = (key, pathFrom) => (dispatch) => {
    // 1. fetch the task using the key
    let userId = firebaseInit.auth().currentUser.uid;
    let tasksRef = firebaseInit.database().ref(`users/${userId}/tasks/${pathFrom}/${key}`);

    tasksRef.once("value").then((snapshot) => {
        // 2. copy its data
        let task = snapshot.val();

        // 3. delete from the old list
        dispatch(deleteTask(key, pathFrom));
        // 4. add to the todo
        let newTaskRef = firebaseInit.database().ref(`users/${userId}/tasks/tasksTodo/${key}`);
        newTaskRef
            .set({
                ...task,
            })
            .then(dispatch(fetchTasks("tasksTodo")));
    });
};

export const moveTaskToDoing = (key, pathFrom) => (dispatch) => {
    // 1. fetch the task using the key
    let userId = firebaseInit.auth().currentUser.uid;
    let tasksRef = firebaseInit.database().ref(`users/${userId}/tasks/${pathFrom}/${key}`);

    tasksRef.once("value").then((snapshot) => {
        // 2. copy its data
        let task = snapshot.val();

        // 3. delete from the old list
        dispatch(deleteTask(key, pathFrom));
        // 4. add to the doing
        let newTaskRef = firebaseInit.database().ref(`users/${userId}/tasks/tasksDoing/${key}`);
        newTaskRef
            .set({
                ...task,
            })
            .then(dispatch(fetchTasks("tasksDoing")));
    });
};

export const moveTaskToComplete = (key, pathFrom) => (dispatch) => {
    // 1. fetch the task using the key
    let userId = firebaseInit.auth().currentUser.uid;
    let tasksRef = firebaseInit.database().ref(`users/${userId}/tasks/${pathFrom}/${key}`);

    tasksRef.once("value").then((snapshot) => {
        // 2. copy its data
        let task = snapshot.val();

        // 3. delete from the old list
        dispatch(deleteTask(key, pathFrom));
        // 4. add to the complete
        let newTaskRef = firebaseInit.database().ref(`users/${userId}/tasks/tasksComplete/${key}`);
        newTaskRef
            .set({
                ...task,
            })
            .then(dispatch(fetchTasks("tasksComplete")));
    });
};

export const getTaskDetails = (key) => (dispatch) => {
    let userId = firebaseInit.auth().currentUser.uid;
    let singleTaskRef = firebaseInit.database().ref(`users/${userId}/tasks/tasksTodo/${key}`);
    singleTaskRef.on(
        "value",
        (data) => {
            let values = data.val();
            dispatch({
                type: actionTypes.GET_TASK_DETAILS,
                key: values.key,
                title: values.title,
                description: values.description,
                deadline: values.deadline,
            });
        },
        (err) => console.log(err)
    );
};

export const updateTaskDetails = (key, title, description, deadline) => (dispatch) => {
    let userId = firebaseInit.auth().currentUser.uid;
    let singleTaskRef = firebaseInit.database().ref(`users/${userId}/tasks/tasksTodo/${key}`);

    singleTaskRef
        .update({
            title: title,
            description: description,
            deadline: deadline,
        })
        .then(
            dispatch({
                type: actionTypes.UPDATE_TASK_DETAILS,
                title: title,
                description: description,
                deadline: deadline,
            }),
            dispatch(fetchTasks("tasksTodo"))
        )
        .catch((err) => console.log(err.message));
};
