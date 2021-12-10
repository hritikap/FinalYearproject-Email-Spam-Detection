import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDuZHv8vxOeORrLG541pS09JK54ahqFxck',
  authDomain: 'collegeproject-spamdetection.firebaseapp.com',
  projectId: 'collegeproject-spamdetection',
  storageBucket: 'collegeproject-spamdetection.appspot.com',
  messagingSenderId: '73043819220',
  appId: '1:73043819220:web:db52834549cbad16f9d941',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();

export { auth };
