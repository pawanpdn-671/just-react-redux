import { combineReducers } from 'redux';
import { cakeReducer } from './cakes/CakeReducers';
import iceCreamReducer from './iceCream/IceCreamReducer';
import { chocoReducer } from './chocolate/ChocoReducer';


const rootReducer = combineReducers({
   cake: cakeReducer,
   iceCream: iceCreamReducer,
   chocolate: chocoReducer
});

export default rootReducer;