import { IMAGES } from '../constants';

const loadImages = () => ({ type: IMAGES.LOAD.START });

const setImages = () => ({ type: IMAGES.LOAD.SUCCESS });

const setImagesError = () => ({ type: IMAGES.LOAD.FAIL });

export {
  loadImages,
  setImages,
  setImagesError,
};
