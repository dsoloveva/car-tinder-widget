import { START_FETCHING, LOADING, FINISHED } from '../constants/actions';

export const startFetching = () => ({ type: START_FETCHING });

export const setLoadingStatus = () => ({ type: LOADING });

export const setFinishedStatus = () => ({ type: FINISHED });