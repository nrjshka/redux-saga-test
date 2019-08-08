import { take, fork, call, put } from 'redux-saga/effects';
import { IMAGES } from '../constants';
import { fetchImagesStats } from '../api';
import { setImagesStatsError, setImageStats, loadImageStats } from '../actions';

function* handleStatsRequest(id) {
  try {
    yield put(loadImageStats(id));
    const imagesStat = yield call(fetchImagesStats, id);

    yield put(setImageStats(id, imagesStat.downloads.total));
  } catch(e) {
    yield put(setImagesStatsError(id, e.toString()));
  }
}

export default function* watchStatsRequest() {
  while(true) {
    const { images } = yield take(IMAGES.LOAD.SUCCESS);

    for(let i = 0; i < images.length; i++) {
      yield fork(handleStatsRequest, images[i].id);
    }
  }
};
