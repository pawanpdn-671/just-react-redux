import { combineReducers } from 'redux';
import { cakeReducer } from './cakes/CakeReducers';
import iceCreamReducer from './iceCream/IceCreamReducer';


const rootReducer = combineReducers({
   cake: cakeReducer,
   iceCream: iceCreamReducer
});

export default rootReducer;