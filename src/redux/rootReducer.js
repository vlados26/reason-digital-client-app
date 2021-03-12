import { combineReducers } from 'redux';
import { postsReducer } from './posts';

const rootReducerInner = combineReducers({
    posts: postsReducer,
});

export const rootReducer = (state, action) => {
    return rootReducerInner(state, action);
};
