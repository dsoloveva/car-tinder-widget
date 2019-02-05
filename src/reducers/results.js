import { SET_RESULT } from '../constants/actions';

export default (state = {}, action) => {
  switch(action.type) {
    case SET_RESULT:
      return action.data;
    default: 
      return state;
  }
}