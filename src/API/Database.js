import firebaseInit from "./config/FirebaseInit";

export const getValueHandler = () => {
    let userId = firebaseInit.auth().currentUser.uid;

    let tasksRef = firebaseInit.database().ref(`users/${userId}/tasks`);
    tasksRef.on("value", (snapshot) => {
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
        updateListHandler(list);
    });
};

export const updateListHandler = (list) => {
    let newList = list;
    // console.log(newList);
    return newList;
};
