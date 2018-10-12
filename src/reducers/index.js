import { combineReducers } from 'redux';
import { postsReducer, filtersReducer } from './postsReducer';
import {loadingReducer} from './loadingReducer';

const rootReducer = combineReducers({
	postsReducer,
	filtersReducer,
	loadingReducer,
});

export default rootReducer;
