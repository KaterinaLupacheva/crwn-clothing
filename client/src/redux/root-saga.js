import { all, call } from 'redux-saga/effects';

import { fetchCollectionsStart } from './shop/shop.sagas';

export default function* roofSaga() {
  yield all([yield all([call(fetchCollectionsStart)])]);
}
