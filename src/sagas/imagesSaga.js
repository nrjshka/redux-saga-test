import { takeEvery, select, call, put } from 'redux-saga/effects';

import { IMAGES } from "../constants";
import { setImagesError, setImages } from '../actions';
import { fetchImages } from '../api';

const getPage = state => state.nextPage;

function* handleImagesLoad() {
  try {
    const page = yield select(getPage);
    const images = yield call(fetchImages, page);
    
    yield put(setImages(images));
  } catch(e) {
    yield put(setImagesError(e.toString()));
  }
}

export default function* watchImagesLoad() {
  yield takeEvery(IMAGES.LOAD.START, handleImagesLoad);
}
