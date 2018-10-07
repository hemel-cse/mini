import createReducer from './createReducer';
import * as types from '../actions/types';

const initialState = {
    isLoading: false
};

export const loadingReducer = createReducer(initialState, {
    [types.POSTS_ENABLE_LOADER](state) {
        return { ...state, isLoading: true };
    },
    [types.POSTS_DISABLE_LOADER](state) {
        return { ...state, isLoading: false };
    }
});

