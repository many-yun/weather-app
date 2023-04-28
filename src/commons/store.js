import { reducer, reducer2 } from './reducer';
import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({ reducer, reducer2 });
const store = createStore(rootReducer);

export default store;
