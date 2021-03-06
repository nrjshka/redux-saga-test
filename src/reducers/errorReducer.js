import { IMAGES } from '../constants';

const errorReducer = (state = null, action) => {
  switch(action.type) {
    case IMAGES.LOAD.FAIL:
      return action.error;
    case IMAGES.LOAD.START:
    case IMAGES.LOAD.SUCCESS:
      return null;
    default:
      return state;
  }
};

export default errorReducer;
