import * as firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/auth';
// Set the configuration for your app
// TODO: Replace with your app's config object
var firebaseConfig = {
  apiKey: "AIzaSyAl2FrZRccgdyJRlGgrD4z6C9vuWocJ5sI",
  authDomain: "lab5-7a7f7.firebaseapp.com",
  databaseURL: "https://lab5-7a7f7.firebaseapp.com ",
  projectId: "lab5-7a7f7",
  storageBucket: "lab5-7a7f7.firebaseapp.com ",
  messagingSenderId: "732633263029",
  appId: "1:732633263029:web:7242685f3bbadc3545c7fc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
