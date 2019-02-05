import { LIKE, DISLIKE } from '../constants/actions';

export const like = (tags) => ({ type: LIKE, tags });

export const dislike = (tags) => ({ type: DISLIKE, tags });