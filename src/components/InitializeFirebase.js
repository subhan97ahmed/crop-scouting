import firebase from "@firebase/app";
import "firebase/auth";
import "firebase/firestore";
export function initializeFirebase(){
    var firebaseConfig = {
      apiKey: "AIzaSyB71PkHNXg9KMqMIakIkV0p1sIXoRMuNUs",
      authDomain: "crop-sout.firebaseapp.com",
      databaseURL: "https://crop-sout.firebaseio.com",
      projectId: "crop-sout",
      storageBucket: "crop-sout.appspot.com",
      messagingSenderId: "642463556876",
      appId: "1:642463556876:web:82afb73832671333cb5529",
    };
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
   }
  return firebase;
  };