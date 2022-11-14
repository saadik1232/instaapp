import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQ2-d1g8-5QlPMkeoOu70qWSx23Arz_I0",
  authDomain: "pokefinder-9c71b.firebaseapp.com",
  projectId: "pokefinder-9c71b",
  storageBucket: "pokefinder-9c71b.appspot.com",
  messagingSenderId: "768929987347",
  appId: "1:768929987347:web:15b117e4a23b8630d1b8e6",
  measurementId: "G-1LL59F22CX",
  experimentalForceLongPolling: true, // this line
  useFetchStreams: false, // and this line
  databaseURL: "https://pokefinder-9c71b.firebaseio.com",
};

//test firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyAC3ryxQ11Yok2bi9s5uZ9lq-X5joUihPg",
//   authDomain: "test123-9e5f5.firebaseapp.com",
//   databaseURL: "https://test123-9e5f5-default-rtdb.firebaseio.com",
//   projectId: "test123-9e5f5",
//   storageBucket: "test123-9e5f5.appspot.com",
//   messagingSenderId: "432175579290",
//   appId: "1:432175579290:web:e813a6de8a49291f03df23",
//   measurementId: "G-HBEGBMW8EE",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const database = getDatabase(app);

export { db, database };
