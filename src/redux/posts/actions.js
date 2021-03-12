import { createAction } from 'redux-actions';

export const fetchPostsDoc = createAction(
    'posts/fetchPostsDoc',
    (data) => data
);
export const fetchPostsDocSuccess = createAction(
    'posts/fetchPostsDocSuccess',
    (data) => data
);
export const fetchPostsDocFailure = createAction('posts/fetchPostsDocFailure');
