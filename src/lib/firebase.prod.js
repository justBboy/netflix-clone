import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDRft2RMsbm6UsTJGnPoH_Y4p4By-aZ3NE",
    authDomain: "netflix-clone-50017.firebaseapp.com",
    databaseURL: "https://netflix-clone-50017.firebaseio.com",
    projectId: "netflix-clone-50017",
    storageBucket: "netflix-clone-50017.appspot.com",
    messagingSenderId: "705090942693",
    appId: "1:705090942693:web:3619630e23afcd5743c60c",
    measurementId: "G-91HN5PH4PR"
};

const firebase = Firebase.initializeApp(config);

export {firebase}