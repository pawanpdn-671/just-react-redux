import { BUY_CAKE } from './CakeTypes';

const initialState = {
   numOfCakes: 50
}

export const cakeReducer = (state = initialState, action) => {
   switch(action.type){
      case BUY_CAKE: return {
         ...state, numOfCakes: state.numOfCakes - action.payload
      }

      default: return state
   }
}