import * as types from './types';

export function requestPosts() {
    return {
        type: types.POSTS_REQUEST,
    };
}


export function postsFailed() {
    return {
        type: types.POSTS_FAILED
    };
}

export function onPostsResponse(response) {
    return {
        type: types.POSTS_RESPONSE,
        response
    };
}

export function enableLoader() {
    return {
        type: types.POSTS_ENABLE_LOADER
    };
}

export function disableLoader() {
    return {
        type: types.POSTS_DISABLE_LOADER
    };
}


export function filterText(text = '') {
    return {
        type: types.FILTER_TEXT,
        text,
    };
}

export function sortBy(sortType) {
    return {
        type: types.SORT_BY,
        sortType,
    };
}

const filtersInitialState = {
    text: '',
    sortBy: '',
};


export function clear() {
    return {
        type: types.CLEAR,
        defaultFilter: filtersInitialState
    };
}