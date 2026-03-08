import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDp3kw_gaVzr0xV0k4sy7vJnfV1QDh6_1Y",
  authDomain: "cn-wedding-72541.firebaseapp.com",
  projectId: "cn-wedding-72541",
  storageBucket: "cn-wedding-72541.firebasestorage.app",
  messagingSenderId: "497658453999",
  appId: "1:497658453999:web:7522711b0736b3bf01601a",
  measurementId: "G-YRHKFZTXWE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
