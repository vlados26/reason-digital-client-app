import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { postsDocSelector } from 'redux/posts';
import { getDate } from 'shared/utils';
import styled from 'styled-components';

const StyledPost = styled(Card)`
    display: inline-block;
    width: 100%;
    height: auto;
    margin: 15px 0;
`;

const Post = () => {
    const postsDoc = useSelector(postsDocSelector);
    const history = useHistory();
    const params: {
        id: string;
    } = useParams();

    const post = postsDoc.find(
        (e: { [key: string]: any }) => Number(e.id) == Number(params.id)
    );

    return (
        <Container>
            <Button variant='outline-primary' onClick={history.goBack}>
                Go to all posts
            </Button>
            <StyledPost>
                <Card.Body>
                    <Card.Title>{post.title.rendered}</Card.Title>
                    <Card.Subtitle className='mb-2 text-muted'>
                        Date: {getDate(post.date)}
                    </Card.Subtitle>
                    <Card.Subtitle className='mb-2 text-muted'>
                        Modified: {getDate(post.modified)}
                    </Card.Subtitle>
                    <Card.Text
                        dangerouslySetInnerHTML={{
                            __html: post.content.rendered,
                        }}
                    />
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Animi, numquam doloremque magnam ipsa aspernatur culpa
                        architecto earum fugit dolorum, expedita incidunt eius
                        ad a tempora corporis? Nemo corporis totam sequi!
                    </Card.Text>
                </Card.Body>
            </StyledPost>
        </Container>
    );
};

export default Post;
