import { combineReducers } from 'redux';
import tagsReducer from './tags';
import choiceItemsReducer from './choiceItems';
import resultsReducer from './results';
import statusReducer from './status';

const makeRootReducers = asyncReducers => combineReducers({
  status: statusReducer,
  selectedTags: tagsReducer,
  choiceItems: choiceItemsReducer,
  results: resultsReducer,
  ...asyncReducers,
});

export default makeRootReducers;