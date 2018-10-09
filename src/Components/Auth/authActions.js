import { SubmissionError, reset } from 'redux-form'
//import { closeModal } from '../modals/modalActions'
import { toastr } from 'react-redux-toastr'

export const login = (creds) => {
  return async (dispatch, getState, {getFirebase})=> {
    const firebase = getFirebase();
    try {
      await firebase.auth().signInWithEmailAndPassword(creds.email, creds.password);
      window.location.href = '#/';
      //dispatch(closeModal())
    } catch (error) {
      console.log(error);
      throw new SubmissionError({
        _error: error.message
      })
    }
  }
} 

export const registerUser = (user) => 
  async (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    try {
      // create the user in firebase auth
      await firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
      //console.log(createdUser);
      // update the auth profile
      let createdUser = firebase.auth().currentUser;
      await createdUser.updateProfile({
        displayName: user.name
      })
      // create a new profile in firestore
      let newUser = {
        displayName: user.name,
        role: "member",
        email: user.email,
        photoURL: null,
        createdAt: firestore.FieldValue.serverTimestamp()
      }
      await firestore.set(`users/${createdUser.uid}`, {...newUser})
    } catch (error) {
      console.log(error)
      throw new SubmissionError({
        _error: error.message
      })
    }
  }

export const socialLogin = (selectedProvider) =>
  async (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    try {
      //dispatch(closeModal());
      let user = await firebase.login({
        provider: selectedProvider,
        type: 'popup'
      })
      if (user.additionalUserInfo.isNewUser) {
        await firestore.set(`users/${user.user.uid}`, {
          displayName: user.profile.displayName,
          photoURL: user.profile.avatarUrl,
          role: "member",
          createdAt: firestore.FieldValue.serverTimestamp()
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

export const updatePassword = (creds) =>
  async (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    const user = firebase.auth().currentUser;
    try {
      await user.updatePassword(creds.password);
      await dispatch(reset('account'));
      toastr.success('Success', 'Your password has been updated')
    } catch (error) {
      throw new SubmissionError({
        _error: error.message
      })
    }
  }