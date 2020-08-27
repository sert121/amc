import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyBfL1oSDNl7WZdXJbyNit_1hXff4zzKZiI",
        authDomain: "am-c-3a089.firebaseapp.com",
        databaseURL: "https://am-c-3a089.firebaseio.com",
        projectId: "am-c-3a089",
        storageBucket: "am-c-3a089.appspot.com",
        messagingSenderId: "58925762405",
        appId: "1:58925762405:web:f3f5cce2063d9078bc438c",
        measurementId: "G-FGQSQTRRS8",

})

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db , auth };
