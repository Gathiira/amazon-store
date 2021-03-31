import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBjRS1JftVRmUBaTfDh1YchbZpYihsBAEo",
  authDomain: "clone-44c8b.firebaseapp.com",
  projectId: "clone-44c8b",
  storageBucket: "clone-44c8b.appspot.com",
  messagingSenderId: "544552916987",
  appId: "1:544552916987:web:45388b84a91cf763d49d5e",
  measurementId: "G-X0KLB2WFMC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth()

export {auth, db};
