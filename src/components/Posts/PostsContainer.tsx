import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsDoc, postsDocSelector } from 'redux/posts';
import { isPostsDocLoadingSelector } from 'redux/posts/selectors';
import Loader from '../Loader';
import Posts from './Posts';

const PostsContainer = () => {
    const dispatch = useDispatch();
    const postsDoc = useSelector(postsDocSelector);
    const isPostsDocLoading = useSelector(isPostsDocLoadingSelector);

    useEffect(() => {
        dispatch(fetchPostsDoc());
    }, [dispatch]);

    if (isPostsDocLoading) {
        return <Loader variant='primary' />;
    }

    return (
        <>
            <Container>
                <Posts posts={postsDoc} />
            </Container>
        </>
    );
};

export default PostsContainer;
