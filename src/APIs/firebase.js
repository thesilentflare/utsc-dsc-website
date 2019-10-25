const firebase = require('firebase/app');
require('firebase/firestore');

const firebaseConfig = {
    apiKey: process.env.REACT_APP_firebase_apiKey,
    authDomain: process.env.REACT_APP_firebase_authDomain,
    databaseURL: process.env.REACT_APP_firebase_databaseURL,
    projectId: process.env.REACT_APP_firebase_projectId,
    storageBucket: process.env.REACT_APP_firebase_storageBucket,
    messagingSenderId: process.env.REACT_APP_firebase_messagingSenderId,
    appId: process.env.REACT_APP_firebase_appId
};

const fb = firebase.initializeApp(firebaseConfig);

const db = fb.firestore();

module.exports = {
    db
}
