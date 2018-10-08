import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import { reducer as toastrReducer } from 'react-redux-toastr';
import  { reducer as FormReducer } from 'redux-form';

import authReducer from '../../Components/Auth/authReducer';
import asyncReducer from '../../Components/async/asyncReducer';
import SignalReducers from '../../Components/ManageSignal/SignalReducers';
import eventReducer from '../../Components/Dashboard/notificationReducers';
import expertHistoryReducers from '../../Components/Experts/ExpertsComponent/ExpertHistory/expertHistoryReducers';
const rootReducer = combineReducers({
  firebase : firebaseReducer,
  firestore : firestoreReducer,
  form : FormReducer,
  auth : authReducer,
  async : asyncReducer,
  toastr: toastrReducer,
  events: eventReducer,
  expertHistory: expertHistoryReducers,
  signal: SignalReducers
})

export default rootReducer