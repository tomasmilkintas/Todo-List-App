import firebaseInit from "./config/FirebaseInit";

export const loginHandler = (email, password) => {
    firebaseInit
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then()
        .catch((err) => console.log(err));
};

export const signupHandler = (email, password, firstName) => {
    firebaseInit
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
            firebaseInit
                .auth()
                .currentUser.updateProfile({
                    displayName: firstName,
                })
                .then(firebaseInit.auth().signOut())
                .catch();
        })
        .catch();
};

let actionCodeSettings = {
    // After password reset, the user will be give the ability to go back
    // to this page.
    url: process.env.REACT_APP_BASE_URL,
    handleCodeInApp: false,
};

export const PasswordRecoveryHandler = (email) => {
    firebaseInit
        .auth()
        .sendPasswordResetEmail(email, actionCodeSettings)
        .then(alert("Please check your email..."))
        .catch((e) => {
            console.log(e);
        });
};
