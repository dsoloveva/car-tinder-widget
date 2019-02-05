import { SET_RESULT } from '../constants/actions';
import { setLoadingStatus, setFinishedStatus, startFetching } from './status';
import { getRecommendations } from '../requests/tinder';
import { findInventories } from '../requests/inventory';

export const setResultData = (data) => ({ type: SET_RESULT, data });

export const loadResult = () => async (dispatch, getState) => {
    const state = getState();
    dispatch(startFetching());
    const recommendations = await getRecommendations(state.selectedTags);
    const result = await Promise.all(recommendations.map(async (makeModel) => {
      const inventories = await findInventories(makeModel.make, makeModel.model);
      return {
        make: makeModel.make,
        model: makeModel.model,
        inventories,
      };
    }));
    dispatch(setResultData(result));
    dispatch(setFinishedStatus());
  };
