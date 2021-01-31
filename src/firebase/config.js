import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAIj2xP5JOCidW9NDpFf4T8LbY2ZUbEPJg',
  authDomain: 'projects-243121.firebaseapp.com',
  databaseURL: '',
  projectId: 'projects-243121',
  storageBucket: 'projects-243121.appspot.com',
  messagingSenderId: '798740738273',
  appId: '1:798740738273:ios:d34796a5eee883026607a0',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };