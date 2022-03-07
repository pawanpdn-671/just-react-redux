import { BUY_CHOCO } from './ChocoTypes';

const initialState = {
   numOfChocolates: 25
}

export const chocoReducer = (state = initialState, action) => {
   switch(action.type) {
      case BUY_CHOCO: return {
         ...state, numOfChocolates: state.numOfChocolates + 1
      }
      default: return state;
   }
}