import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyC0iYOzR6v43G5m6f8Jhh5JIUAG40obf0U",
    authDomain: "complaint-forum-1eebd.firebaseapp.com",
    projectId: "complaint-forum-1eebd",
    storageBucket: "complaint-forum-1eebd.appspot.com",
    messagingSenderId: "695220135892",
    appId: "1:695220135892:web:908ca5ec66ba5209fc9841"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
