import firebaseInit from "./config/FirebaseInit";

export const loginHandler = (email, password) => {
    firebaseInit.auth().signInWithEmailAndPassword(email, password).then().catch();
};

export const signupHandler = (email, password, firstName, lastName) => {
    firebaseInit
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
            let userId = firebaseInit.auth().currentUser.uid;

            firebaseInit
                .database()
                .ref("users/" + userId)
                .set({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    userId: userId,
                })
                .then(firebaseInit.auth().currentUser.updateProfile({ displayName: firstName }))
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

// export const profileDisplayHandler = (item) => {
//     let userId = firebaseInit.auth().currentUser.uid;

//     let ref = firebaseInit.database().ref("users/" + userId);

//     ref.on(
//         "value",
//         (data) => {
//             let values = data.val();
//             return values.item;
//         },
//         (err) => console.log(err)
//     );
// };
