import firebaseInit from "./config/FirebaseInit";

export const getValueHandler = () => {
    let userId = firebaseInit.auth().currentUser.uid;

    let tasksRef = firebaseInit.database().ref("users/" + userId + "/tasks");
    tasksRef.on("value", (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            let childData = childSnapshot.val().value;
            let childKey = childSnapshot.key;
            // console.log(childData, childKey);
        });
    });
};
