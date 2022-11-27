// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// const firebaseConfig = {
//     apiKey: "AIzaSyA3VNEWMNa3O0BmSUp6SR3axilw7xaRzik",
//     authDomain: "laptop-deal.firebaseapp.com",
//     projectId: "laptop-deal",
//     storageBucket: "laptop-deal.appspot.com",
//     messagingSenderId: "1041256276507",
//     appId: "1:1041256276507:web:d4462a5f025f537985cebe"
//   };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;