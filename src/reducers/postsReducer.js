import createReducer from './createReducer';
import * as types from '../actions/types';

const initialState = {
    isPostsFetched: false,
    onPageNumber: 1,
    posts: [
        // {
        //     "id": 1,
        //     "name": "Leanne Graham",
        //     "username": "Bret",
        //     "email": "Sincere@april.biz",
        //     "address": {
        //     "street": "Kulas Light",
        //     "suite": "Apt. 556",
        //     "city": "Gwenborough",
        //     "zipcode": "92998-3874",
        //     "geo": {
        //         "lat": "-37.3159",
        //         "lng": "81.1496"
        //         }
        //     },
        //     "phone": "1-770-736-8031 x56442",
        //     "website": "hildegard.org",
        //     "company": {
        //         "name": "Romaguera-Crona",
        //         "catchPhrase": "Multi-layered client-server neural-net",
        //         "bs": "harness real-time e-markets"
        //     }
        // }
    ],
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
        // result.sort(function(a,b){
        //     // Turn your strings into dates, and then subtract them
        //     // to get a value that is either negative, positive, or zero.
        //     return new Date(b.date) - new Date(a.date);
        //   });
        let result = [...action.response];
        return {
            ...state,
            isPostsFetched: true,
            posts:  result,
        };
    },
    [types.POSTS_FAILED](state) {
        return {
            ...state,
            isPostsFetched: false
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
