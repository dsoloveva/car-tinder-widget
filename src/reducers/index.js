import { combineReducers } from 'redux';
import tagsReducer from './tags';

const makeRootReducers = asyncReducers => combineReducers({
  selectedTags: tagsReducer,
  choiceItems: (state = [
    { img: 'birds.jpg', tags: [''] },
    { img: 'cats.jpg', tags: [''] },
    { img: 'coffee.jpg', tags: [''] },
    { img: 'cycling.jpg', tags: [''] }
  ]) => state,
  results: (state = {}) => state,
  ...asyncReducers,
});

export default makeRootReducers;