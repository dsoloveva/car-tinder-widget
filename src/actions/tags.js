import { LIKE, DISLIKE, PROCESS } from '../constants/actions';

export const like = (tags, item) => ({ type: LIKE, tags, item });

export const dislike = (tags, item) => ({ type: DISLIKE, tags, item });

export const process = (item) => ({ type: PROCESS, item });