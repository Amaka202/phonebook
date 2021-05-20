import firebase from 'firebase/app';
import 'firebase/firestore';

// Firebase Configration:

var firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGE_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

const shoppingListCollection = firebase.firestore().collection('shopping_list');
const { arrayUnion } = firebase.firestore.FieldValue;

export { shoppingListCollection, arrayUnion };