import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyC0mnUROWqbx97ZiYscr8_tRiITxMUe4_Q",
  authDomain: "job-seeker-cornertree.firebaseapp.com",
  databaseURL: "https://job-seeker-cornertree.firebaseio.com",
  projectId: "job-seeker-cornertree",
  storageBucket: "job-seeker-cornertree.appspot.com",
  messagingSenderId: "34340986171",
  appId: "1:34340986171:web:bc5a2ad17c7011d27b2b1e",
  measurementId: "G-28QPE1KLH3",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
