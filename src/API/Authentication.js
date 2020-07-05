import firebaseInit from "./config/FirebaseInit";

export const loginHandler = (email, password) => {
    firebaseInit.auth().signInWithEmailAndPassword(email, password).then().catch();
};

export const signupHandler = (email, password) => {
    firebaseInit
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((user) =>
            firebaseInit.auth().currentUser.getIdToken(true).then(console.log(user)).catch()
        )
        .catch();
};
