import createReducer from './createReducer';
import * as types from '../actions/types';

const initialState = {
    isPostsFetched: false,
    onPageNumber: 1,
    posts: [],
};

export const postsReducer = createReducer(initialState, {
    [types.POSTS_REQUEST](state, action) {
        return {
            ...state,
        };
    },
    [types.POSTS_LOADING_ENDED](state) {
        return { ...state };
    },
    [types.POSTS_RESPONSE](state, action) {
        return {
            ...state,
            isPostsFetched: true,
            posts: state.posts.concat(action.response),
        };
    },
    [types.POSTS_FAILED](state) {
        return {
            ...state,
            isPostsFetched: false
        };
    }
});
