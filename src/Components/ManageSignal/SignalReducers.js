import { createReducer } from '../../app/common/util/reducerUtil';
import { CREATE_SIGNAL, DELETE_SIGNAL, UPDATE_SIGNAL, FETCH_SIGNAL } from './signalConstants';

 const initialState = [];

export const createSignal = (state, payload) => {
  return [...state, Object.assign({}, payload.event)]
}

export const updateSignal = (state, payload) => {
  return [
    ...state.filter(signal => signal.id !== payload.signal.id),
    Object.assign({}, payload.signal)
  ]
}

export const closeSignal = (state, payload) => {
  return [
    ...state.filter(signal => signal.id !== payload.eventId)
  ]
}

export const fetchSignals = (state, payload) => {
  return payload.signals
}

export default createReducer(initialState, {
  [CREATE_SIGNAL]: createSignal,
  [DELETE_SIGNAL]: updateSignal,
  [UPDATE_SIGNAL]: closeSignal,
  [FETCH_SIGNAL]: fetchSignals
})