import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyAKqnKi-GZLEnduszl8z1xdkI-xnKLjoHU",
  authDomain: "gaming-articles-website.firebaseapp.com",
  projectId: "gaming-articles-website",
  storageBucket: "gaming-articles-website.appspot.com",
  messagingSenderId: "1016342784060",
  appId: "1:1016342784060:web:a7059c0d70bfc41036bb39",
  measurementId: "G-5HT9LNW4L4"

};
try {
  firebase.initializeApp(firebaseConfig);
} catch(err){
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)}
}
const fire = firebase;
export default fire;