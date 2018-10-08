import { createReducer } from '../../../../app/common/util/reducerUtil';
import {  FETCH_SIGNAL_HISTORY } from './expertHistoryConstants';
const initialState = [];

export const fetchSignalHistory = (state, payload) => {
  return payload.signalHistory
}

export default createReducer(initialState, {
  [FETCH_SIGNAL_HISTORY]: fetchSignalHistory
})