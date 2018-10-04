export const addEventComment = (expertId, values) => async ( getState, { getFirebase }) => {
  const firebase = getFirebase();
  const profile = getState().firebase.profile;
  const user = firebase.auth().currentUser;
  let newComment = {
    displayName: profile.displayName,
    photoURL: profile.photoURL || '/assets/user.png',
    uid: user.uid,
    text: values.comment,
    date: Date.now()
  };
  try {
    await firebase.push(`expert_chat/${expertId}`, newComment);
  } catch (error) {
    console.log(error);
  }
};