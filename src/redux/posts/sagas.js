import { call, put, all, takeEvery } from 'redux-saga/effects';
import {
    fetchPostsDoc as fetchPostsDocActions,
    fetchPostsDocSuccess,
    fetchPostsDocFailure,
} from './actions';
import { getPosts } from '../../controllers/posts.controller';

function* handleFetchPostsDoc({ payload }) {
    try {
        const posts = yield call(getPosts, payload);
        yield put(fetchPostsDocSuccess(posts));
    } catch (e) {
        yield put(fetchPostsDocFailure(e));
    }
}

export function* postsSagas() {
    yield all([takeEvery(fetchPostsDocActions, handleFetchPostsDoc)]);
}
