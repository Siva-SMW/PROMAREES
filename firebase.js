const firebaseConfig = {
  apiKey: "AIzaSyB6XhAO2wHIzrSUBCtcA6ox5xqfB5CUgUQ",
  authDomain: "smw-2012.firebaseapp.com",
  projectId: "smw-2012",
  storageBucket: "smw-2012.firebasestorage.app",
  messagingSenderId: "97208499766",
  appId: "1:97208499766:web:59beb65aea44e0cbfc6297"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

alert("Firebase Ready");