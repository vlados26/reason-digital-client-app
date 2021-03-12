import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import img from '../assets/img/welcome.jpg';

const BackgroundImg = styled.div`
    background-image: url(${img});
    background-size: cover;
    opacity: 0.5;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`;

const StyledH1 = styled.h1`
    text-align: center;
`;

const Home = () => {
    return (
        <Container>
            <BackgroundImg className='public-background'></BackgroundImg>
            <StyledH1>Welcome</StyledH1>
        </Container>
    );
};

export default Home;
