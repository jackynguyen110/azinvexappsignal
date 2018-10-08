import { asyncActionStart, asyncActionFinish, asyncActionError } from '../../../async/asyncActions';
import { FETCH_SIGNAL_HISTORY } from './expertHistoryConstants';
import firebase from '../../../../app/config/firebase';
export const getSignalHistoryForDashboard = (lastSignalHistory,eid) => async (dispatch, getState) => {
  const firestore = firebase.firestore();
  const signalHistoryRef = firestore.collection('signals');
  try {
    dispatch(asyncActionStart());
    let startAfter =
      lastSignalHistory &&
      (await firestore
        .collection('signals')
        .doc(lastSignalHistory.id)
        .get());
    let query;
    lastSignalHistory
      ? (query = signalHistoryRef
        .where('expert.id', '==', eid)
        .where('status', '==', 'closed')
        .orderBy('startAt', 'asc')
        .startAfter(startAfter)
        .limit(5))
      : (query = signalHistoryRef
        .where('expert.id', '==', eid)
        .where('status', '==', 'closed')
        .orderBy('startAt', 'asc')
        .limit(5));
    let querySnap = await query.get();
    if (querySnap.docs.length === 0) {
      dispatch(asyncActionFinish());
      return querySnap;
    }

    let signalHistory = [];
    for (let i = 0; i < querySnap.docs.length; i++) {
      let evt = { ...querySnap.docs[i].data(), id: querySnap.docs[i].id };
      signalHistory.push(evt);
    }
    dispatch({ type: FETCH_SIGNAL_HISTORY, payload: { signalHistory } });
    dispatch(asyncActionFinish());
    return querySnap;

  } catch (error) {
    console.log(error);
    dispatch(asyncActionError());
  }
}