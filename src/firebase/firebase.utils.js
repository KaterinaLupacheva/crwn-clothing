import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCgtdyLjCxYLtbjkaCTZDRLimbS_XrV5n4",
    authDomain: "crwn-db-47441.firebaseapp.com",
    databaseURL: "https://crwn-db-47441.firebaseio.com",
    projectId: "crwn-db-47441",
    storageBucket: "crwn-db-47441.appspot.com",
    messagingSenderId: "173558302573",
    appId: "1:173558302573:web:1280f6b89e5053c970bc64"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;