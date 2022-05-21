import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC34ZiV5Ah-2H4cruceUBvIHWxeNcC0ekk",
  authDomain: "authpokes.firebaseapp.com",
  projectId: "authpokes",
  storageBucket: "authpokes.appspot.com",
  messagingSenderId: "312311052744",
  appId: "1:312311052744:web:dbac4c84bc507d3311a8fd"
};

// Initialize Firebase
//   const app = firebase.initializeApp(firebaseConfig);
  firebase.initializeApp(firebaseConfig);
//inicializando base de datos
  const db = firebase.firestore()
  const auth = firebase.auth()

  export {db, auth}