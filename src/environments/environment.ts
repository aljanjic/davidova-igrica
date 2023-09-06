// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5JkMSM300lYL3dy-fLB66m1PmvrgQUec",
  authDomain: "angular-15-tic-tac-toe.firebaseapp.com",
  projectId: "angular-15-tic-tac-toe",
  storageBucket: "angular-15-tic-tac-toe.appspot.com",
  messagingSenderId: "461776882545",
  appId: "1:461776882545:web:849d64163c05a15bfb44d0",
  measurementId: "G-9NV47GGFMZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);