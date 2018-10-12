import { put, call } from 'redux-saga/effects';
import getPosts from '../api/methods/getPosts';
import * as postsActions from '../actions/postsActions';


export default function* postAsync(action) {
    yield put(postsActions.enableLoader());
    try {
        const response = yield call(
		getPosts,
        );

        if (response.length > 0) {
            yield put(postsActions.onPostsResponse(response));
            yield put(postsActions.disableLoader({}));
        } else {
            yield put(postsActions.postsFailed());
            yield put(postsActions.disableLoader({}));
        }
    } catch (error) {
        yield put(postsActions.postsFailed());
        yield put(postsActions.disableLoader({}));
    }
}
