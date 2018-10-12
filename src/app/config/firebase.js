import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/messaging';
const firebaseConfig = {
  apiKey: "AIzaSyCJpuJPsf1J8LZhH8YIvWwZYQl_z61ecF0",
  authDomain: "test-firebase-dc05a.firebaseapp.com",
  databaseURL: "https://test-firebase-dc05a.firebaseio.com",
  projectId: "test-firebase-dc05a",
  storageBucket: "test-firebase-dc05a.appspot.com",
  messagingSenderId: "106646469332"
}

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const messaging = firebase.messaging();
messaging.requestPermission().then(function () {
  console.log('Notification permission granted.');
  // TODO(developer): Retrieve an Instance ID token for use with FCM.
  // ...
}).catch(function (err) {
  console.log('Unable to get permission to notify.', err);
});

const settings = {
  timestampsInSnapshots: true
}
firestore.settings(settings)
export default firebase;