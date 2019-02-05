import { START_FETCHING, LOADING, FINISHED } from '../constants/actions';

export default (state = 'in_progress', action) => {
  switch(action.type) {
    case START_FETCHING:
      return 'fetching';
    case LOADING:
      return 'loading';
    case FINISHED:
      return 'finished';
    default: 
      return state;
  }
}