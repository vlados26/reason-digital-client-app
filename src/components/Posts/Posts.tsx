import React from 'react';
import SmallPost from './SmallPost';

const Posts: Function = ({
    posts,
}: {
    posts: { [key: string]: any }[];
}): JSX.Element[] => {
    return posts.map((post, id) => <SmallPost key={id} post={post} />);
};

export default Posts;
