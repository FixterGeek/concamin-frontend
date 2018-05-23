// import * as firebase from 'firebase';
// import "firebase/firestore";

//   // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyCs_9CJDDU4xxrb6wfG8AEz6Wf4WrS5tHI",
//     authDomain: "concamin-c2a9c.firebaseapp.com",
//     databaseURL: "https://concamin-c2a9c.firebaseio.com",
//     projectId: "concamin-c2a9c",
//     storageBucket: "concamin-c2a9c.appspot.com",
//     messagingSenderId: "796874295023"
//   };
//   firebase.initializeApp(config);


// //firestore
// const db = firebase.firestore();

// // db.collection("chats").add({
// //     participant: "Ada"
// // })

// // db.collection("users").add({
// //     first: "Ada",
// //     last: "Lovelace",
// //     born: 1815
// // })
// // .then(function(docRef) {
// //     console.log("Document written with ID: ", docRef.id);
// // })
// // .catch(function(error) {
// //     console.error("Error adding document: ", error);
// // });

// //methods
// export function getOrCreateChat(id=1,id2=2){
//     const chatsRef = db.collection("chats");
//     const query = chatsRef.where(`participants.${id}`, "==", true).where(`participants.${id2}`, "==", true)
//     return query.get()
//     .then(snap=>{
//         let elChat;
//         if(snap.docs.length < 1){
//             const chat = {participants:{}};
//             chat.participants[id] = true;
//             chat.participants[id2] = true;
//             chatsRef.add(chat)
//             .then(docRef=>{
//                 return docRef.get()
//             })
//             .then(doc=>{
//                 console.log("nuevo", doc.data())
//                 elChat = doc.data();
//                 return doc.data();
//             })
//         }else{
//             snap.forEach(doc=>{
//                 console.log("ya existe:", doc.data())
//                 elChat = doc.data();
//                 return doc.data();
//             });
//         }
//         return elChat;
        
//     })

//     .catch(function(error) {
//         console.log("Error getting document:", error);
//         return {};
//     });
// }

// export default firebase;
