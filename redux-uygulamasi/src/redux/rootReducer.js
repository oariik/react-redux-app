import { combineReducers } from 'redux';
import { ogrenciReducer } from './reducers/ogrenciReducer';
import { sinifReducer } from './reducers/sinifReducer';

const allReducers = {
  ogrenciReducer,
  sinifReducer
};

export const rootReducer = combineReducers(allReducers);