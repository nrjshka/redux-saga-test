import { IMAGES } from '../constants';

const loadingReducer = (state = false, action) => {
  switch(action.type) {
    case IMAGES.LOAD.START:
      return true;
    case IMAGES.LOAD.FAIL:
    case IMAGES.LOAD.SUCCESS:
      return false;
    default:
      return false;
  }
};

export default loadingReducer;
