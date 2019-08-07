import { IMAGES } from '../constants';

const imagesReducer = (state = [], action) => {
  switch(action.type) {
    case IMAGES.LOAD.SUCCESS:
      return [
        ...state,
        ...action.images,
      ];
    default:
      return state;
  }
};

export default imagesReducer;
