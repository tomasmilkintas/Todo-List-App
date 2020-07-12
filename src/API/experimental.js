// experimental ideas for cleaner layout during coding
// saving for now - to be deleted upon successful implementation

// const previousList = this.state.list;
// firebaseInit
//     .database()
//     .ref("users/" + userId)
//     .on("child_added", (snap) => {
//         previousList.push({
//             id: snap.key,
//             newTask: snap.val().newTask,
//         });
//         this.setState({
//             list: previousList,
//         });
//     });

// firebaseInit
//     .database()
//     .ref("users/" + userId)
// .on("child_removed", (snap) => {
//     for (let i = 0; i < previousList.length; i++) {
//         if (previousList[i].id === snap.key) {
//             previousList.splice(i, 1);
//         }
//     }

//         this.setState({
//             list: previousList,
//         });
// });
