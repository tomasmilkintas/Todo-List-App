import fire from "./config/Fire";

export const loginHandler = (email, password) => {
    fire.auth()
        .signInWithEmailAndPassword(email, password)
        .then((res) => console.log(res))
        .catch((err) => console.log(err.message));
};

export const signupHandler = (email, password) => {
    fire.auth()
        .createUserWithEmailAndPassword(email, password)
        .then((user) =>
            fire
                .auth()
                .currentUser.getIdToken(true)
                .then((idToken) => console.log(idToken))
                .catch((err) => console.log(err))
        )
        .catch((err) => console.log(err.message));
    console.log(email, password);
};
