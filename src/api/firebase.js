import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const fapp = firebase.initializeApp({
	apiKey: 'AIzaSyCn7jNn-SjlDl96Sfw8AVT81qE-K3U3d2I',
	authDomain: 'finechest-f0633.firebaseapp.com',
	databaseURL: 'https://finechest-f0633.firebaseio.com',
	projectId: 'finechest-f0633',
	storageBucket: 'finechest-f0633.appspot.com',
	messagingSenderId: '894582720339',
	appId: '1:894582720339:web:b0dee4c4563fcc8bf243a6',
});

const firestore = fapp.firestore();

const ffines = firestore.collection('fines');
const fusers = firestore.collection('users');

export {
  firebase,
  fapp,
  firestore,
  ffines,
  fusers
};

