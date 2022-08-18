import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC90h94SBXf4wkLIVpLNI_yWvvEF3dSOE0",
  authDomain: "exam-2301929530.firebaseapp.com",
  projectId: "exam-2301929530",
  storageBucket: "exam-2301929530.appspot.com",
  messagingSenderId: "998344219247",
  appId: "1:998344219247:web:594f5be1f92b002e3dcb9a"
};

const init = firebase.initializeApp(firebaseConfig);
export const firebaseAuthentication = init.auth();