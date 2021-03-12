import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
    fetchPostsDoc,
    fetchPostsDocSuccess,
    fetchPostsDocFailure,
} from './actions';

const initialState = {
    postsDoc: {
        postsDoc: {},
        error: null,
        isLoading: true,
    },
};

export const postsDocReducer = handleActions(
    {
        [fetchPostsDoc]: (state) => ({ ...state, isLoading: true }),
        [fetchPostsDocSuccess]: (state, { payload }) => ({
            ...state,
            postsDoc: payload,
            isLoading: false,
        }),
        [fetchPostsDocFailure]: (state, { payload }) => ({
            ...state,
            error: payload,
            isLoading: false,
        }),
    },
    initialState.postsDoc
);

export const postsReducer = combineReducers({
    postsDoc: postsDocReducer,
});
