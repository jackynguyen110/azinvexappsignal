import firebase from 'firebase';
import 'firebase/firestore';
// import * as Push from 'push-fcm-plugin'
const firebaseConfig = {
  apiKey: "AIzaSyCJpuJPsf1J8LZhH8YIvWwZYQl_z61ecF0",
  authDomain: "test-firebase-dc05a.firebaseapp.com",
  databaseURL: "https://test-firebase-dc05a.firebaseio.com",
  projectId: "test-firebase-dc05a",
  storageBucket: "test-firebase-dc05a.appspot.com",
  messagingSenderId: "106646469332"
}
// Push.config({
//   FCM: firebaseConfig
// });
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
}
firestore.settings(settings)
export default firebase;