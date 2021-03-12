import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { getDate } from 'shared/utils';
import styled from 'styled-components';

const StyledPost = styled(Card)`
    display: inline-block;
    width: 100%;
    height: auto;
    margin: 15px 0;
`;

const SmallPost = ({ post }: { post: { [key: string]: any } }) => {
    return (
        <StyledPost>
            <Card.Body>
                <Card.Title>{post.title.rendered}</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>
                    {getDate(post.date)}
                </Card.Subtitle>
                <Card.Link href='#'>
                    <Link to={`/post/${post.id}`}>See full post</Link>
                </Card.Link>
            </Card.Body>
        </StyledPost>
    );
};

export default SmallPost;
