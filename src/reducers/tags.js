import { LIKE, DISLIKE } from '../constants/actions';

const initialState = {};

export default (state = initialState, action) => {
  switch(action.type) {
    case LIKE: {
      let tagsInfo = {};
      action.tags.forEach(tag => {
        const tagValues = state[tag] || [];
        tagsInfo = {
          ...tagsInfo,
          [tag]: [...tagValues, 1]
        };
      });
      
      return {
        ...state,
        ...tagsInfo
      };
    }
    case DISLIKE: {
      let tagsInfo = {};
      action.tags.forEach(tag => {
        const tagValues = state[tag] || [];
        tagsInfo = {
          ...tagsInfo,
          [tag]: [...tagValues, 0]
        };
      });
      
      return {
        ...state,
        ...tagsInfo
      };
    }
    default: 
      return state;
  }
}