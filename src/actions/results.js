import { SET_RESULT } from '../constants/actions';
import { setLoadingStatus, setFinishedStatus, startFetching } from './status';
import { getRecommendations } from '../requests/tinder';

export const setResultData = (data) => ({ type: SET_RESULT, data });

export const loadResult = () => (dispatch, getState) => {
    const state = getState();
    dispatch(startFetching());
    return getRecommendations(state.selectedTags)
      .then((result) => {
        dispatch(setResultData(result));
        dispatch(setFinishedStatus());
      })
  };
