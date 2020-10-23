import { SET_IMAGES } from './actionTypes';

export default function (state, action) {
  switch (action.type) {
    case SET_IMAGES:
      return [
        ...state.map((el, i) => {
          if (i !== action.index) {
            return el;
          }
          return action.payload;
        }),
      ];

    default:
      return state;
  }
}
