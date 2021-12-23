import { combineReducers, createReducer } from '@reduxjs/toolkit';
import actions from './phoneBookActions';

const items = createReducer([], {
  [actions.addContact]: (state, action) => [action.payload, ...state],
  [actions.deleteContact]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
  [actions.storageContact]: (state, action) => action.payload,
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});
