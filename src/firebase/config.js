import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: '---',
  authDomain: '---.firebaseapp.com',
  databaseURL: '',
  projectId: '---',
  storageBucket: '---',
  messagingSenderId: '--',
  appId: '--',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
