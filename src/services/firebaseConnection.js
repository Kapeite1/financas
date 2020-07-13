import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


let firebaseConfig = {
    apiKey: "AIzaSyBGV0Y4uAcUybaqeupy1IGiHWbnmEJtL5c",
    authDomain: "financas-3da8b.firebaseapp.com",
    databaseURL: "https://financas-3da8b.firebaseio.com",
    projectId: "financas-3da8b",
    storageBucket: "financas-3da8b.appspot.com",
    messagingSenderId: "690673779806",
    appId: "1:690673779806:web:18985efb1c52bfaca1a0cf",
    measurementId: "G-MEYEB3SC92"
  };

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;