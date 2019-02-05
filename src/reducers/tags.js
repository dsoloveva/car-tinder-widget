import { PUSH_TAG } from '../constants/actions';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case PUSH_TAG: 
     return [ ...state, ...action.tags ];
    default: 
      return state;
  }
}