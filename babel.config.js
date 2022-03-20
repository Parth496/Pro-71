//module.exports = function(api) {
  //api.cache(true);
 // return {
  //  presets: ['babel-preset-expo'],
  //};
//};
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2vmaaMVYjFvONmsRe6J0yeHPfPSYNSg8",
  authDomain: "e-library-3adae.firebaseapp.com",
  databaseURL: "https://e-library-3adae-default-rtdb.firebaseio.com",
  projectId: "e-library-3adae",
  storageBucket: "e-library-3adae.appspot.com",
  messagingSenderId: "426120255894",
  appId: "1:426120255894:web:097135b46d9ae3f5e3e5b7"
};
firebaseConfig.initializeApp(firebaseConfig);
export default firebase.firestore();
// Initialize Firebase
const app = initializeApp(firebaseConfig);