import { createStore } from 'redux';
import { cakeReducer } from './cakes/CakeReducers';

const store = createStore(cakeReducer)

export default store;