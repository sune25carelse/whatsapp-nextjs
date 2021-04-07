import firebase from "firebase";

// config goes here
const firebaseConfig = {
  apiKey: "AIzaSyASs7T01a5ma4I_vgXQOaYMwIx_c3vV6Ns",
  authDomain: "whatsapp-2-f032c.firebaseapp.com",
  projectId: "whatsapp-2-f032c",
  storageBucket: "whatsapp-2-f032c.appspot.com",
  messagingSenderId: "742548566841",
  appId: "1:742548566841:web:27ade6d80228a63b102ee8",
};

// connection to database setup goes here initialize first
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
