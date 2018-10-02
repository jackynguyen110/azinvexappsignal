import { asyncActionStart, asyncActionFinish, asyncActionError } from '../async/asyncActions';
import { FETCH_EVENTS } from './notificationConstants';
import firebase from '../../app/config/firebase';

export const getEventsForDashboard = lastEvent => async (dispatch, getState) => {
  const currentUser = getState().firebase.auth;
  const firestore = firebase.firestore();
  const eventsRef = firestore.collection('notifications');
  try {
    dispatch(asyncActionStart());
    let startAfter =
      lastEvent &&
      (await firestore
        .collection('notifications')
        .doc(lastEvent.id)
        .get());
    let query;
    lastEvent
      ? (query = eventsRef
        .where('uid', '==', currentUser.uid)
        .orderBy('createdAt', 'desc')
        .startAfter(startAfter)
        .limit(5))
      : (query = eventsRef
        .where('uid', '==', currentUser.uid)
        .orderBy('createdAt', 'desc')
        .limit(5));
    let querySnap = await query.get();
    console.log(querySnap)
    if (querySnap.docs.length === 0) {
      dispatch(asyncActionFinish());
      return querySnap;
    }
    
    let events = [];
    for (let i = 0; i < querySnap.docs.length; i++) {
      let evt = { ...querySnap.docs[i].data(), id: querySnap.docs[i].id };
      events.push(evt);
    }
    dispatch({ type: FETCH_EVENTS, payload: { events } });
    dispatch(asyncActionFinish());
    return querySnap;

  } catch (error) {
    console.log(error);
    dispatch(asyncActionError());
  }
}