import { all, fork } from 'redux-saga/effects';
import { postsSagas } from './posts';

export function* rootSaga() {
    yield all([fork(postsSagas)]);
}
