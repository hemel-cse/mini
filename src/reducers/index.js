import { combineReducers } from 'redux';
import { postsReducer, filtersReducer } from './postsReducer';

const rootReducer = combineReducers({
	postsReducer,
	filtersReducer,
});

export default rootReducer;
