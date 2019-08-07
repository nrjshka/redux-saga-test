import { IMAGES } from '../constants';

const loadImages = () => ({ type: IMAGES.LOAD.START });

const setImages = images => ({ type: IMAGES.LOAD.SUCCESS, images });

const setImagesError = error => ({ type: IMAGES.LOAD.FAIL, error });

export {
  loadImages,
  setImages,
  setImagesError,
};
