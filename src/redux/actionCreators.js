import { SET_IMAGES } from './actionTypes';

export const setImages = (pictures, ind) => ({
  type: SET_IMAGES,
  payload: pictures,
  index: ind,
});


