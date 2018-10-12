import createReducer from './createReducer';
import * as types from '../actions/types';

import categories from '../constants';

import getCategoryPosts from '../selectors/cats';

const initialState = {
    isPostsFetched: false,
    onPageNumber: 1,
    posts: {
        "data": [],
        "count": 0,
    },
    catPosts: [],
    isError: false,
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
        // let result = [...new Set([...state.posts , ...action.response])];

        let result = [...action.response];

        let catPost = [];

        categories.map((cat) => {
            let name = {"name": cat.name};
            let data = getCategoryPosts(result, cat.name);
            let posts = {"posts": data};
            let count = {"count": data.length};

            return catPost.push(Object.assign(name, posts, count));
        });

        

        let allPost = Object.assign({"data": result}, {"count": result.length});

        return {
            ...state,
            posts:  allPost,
            catPosts: catPost,
            isPostsFetched: true,
            isError: false,
        };
    },
    [types.POSTS_FAILED](state, action) {
        return {
            ...state,
            isPostsFetched: false,
            isError: true,
        };
    }
});

const filtersInitialState = {
    text: '',
    sortBy: '',
};

export const filtersReducer = createReducer(filtersInitialState, {
    [types.FILTER_TEXT](state, action) {
        return {
            ...state,
            text: action.text
        };
    },
    [types.SORT_BY](state, action) {
        return { 
            ...state,
            sortBy: action.sortType 
        };
    },
    [types.CLEAR](state, action) {
        return { 
            ...state,
            text: action.defaultFilter.text, 
            sortBy: action.defaultFilter.sortBy, 
        };
    },
});
