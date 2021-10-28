import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCRXG17UDvKSigDR2evip3Oc5L3Klvt5ks',
  authDomain: 'sportify-ab91a.firebaseapp.com',
  projectId: 'sportify-ab91a',
  storageBucket: 'sportify-ab91a.appspot.com',
  messagingSenderId: '883491459760',
  appId: '1:883491459760:web:8391208d0e07a85f956175',
  measurementId: 'G-TNCG5DVLTM',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
