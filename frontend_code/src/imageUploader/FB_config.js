// import firebase from "firebase";
import * as firebase from "firebase";

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAvkEA3ZmU93m1HTMd5DnaqCkp1PA1T31Y",
    authDomain: "fyp2019-1eb65.firebaseapp.com",
    databaseURL: "https://fyp2019-1eb65.firebaseio.com",
    projectId: "fyp2019-1eb65",
    storageBucket: "fyp2019-1eb65.appspot.com",
    messagingSenderId: "537645147321"
  };
  
  // export default config;
  export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();


 