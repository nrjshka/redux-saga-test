import { IMAGES, STATS } from '../constants';

const loadImages = () => ({ type: IMAGES.LOAD.START });

const setImages = images => ({ type: IMAGES.LOAD.SUCCESS, images });

const setImagesError = error => ({ type: IMAGES.LOAD.FAIL, error });

const loadImageStats = id => ({ type: STATS.LOAD.START, id });

const setImageStats = (id, downloads) => ({ type: STATS.LOAD.SUCCESS, id, downloads });

const setImagesStatsError = (id, error) => ({ type: STATS.LOAD.FAIL, id, error });

export {
  loadImages,
  setImages,
  setImagesError,
  loadImageStats,
  setImageStats,
  setImagesStatsError,
};
