import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/img/logo.svg';
import { AuthContext } from '../context/AuthContext';

const FileWrapper: any = styled.div`
    display: flex;
    position: relative;
`;

const StyledLabel: any = styled.label`
    cursor: pointer;
    color: #fff;
    display: flex;
    align-items: center;
    border-radius: 50%;
    -webkit-transition: 1s ease-in-out;
    transition: 1s ease-in-out;
    margin-bottom: 0;
    text-align: center;
    && :hover {
        opacity: 0.9;
    }
`;

const StyledEmail: any = styled.span`
    color: black;
    font-size: 1.3rem;
    margin-left: 10px;
`;

const Header = () => {
    const { isAuthenticated, logout, email } = useContext(AuthContext);
    const history = useHistory();

    const logoutHandler = (e: any) => {
        e.preventDefault();
        logout();
        history.push('/');
    };

    const AuthenticatedHeader = () => {
        if (isAuthenticated) {
            return (
                <>
                    <FileWrapper>
                        <StyledLabel htmlFor='my-file'>
                            <StyledEmail>{email}</StyledEmail>
                        </StyledLabel>
                    </FileWrapper>
                    <Nav variant='pills' activeKey='/home'>
                        <>
                            <Nav.Item>
                                <Nav.Link as={Link} to='/posts'>
                                    <Button variant='info'>Posts</Button>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to='/logout'>
                                    <Button
                                        variant='danger'
                                        onClick={logoutHandler}
                                    >
                                        Log Out
                                    </Button>
                                </Nav.Link>
                            </Nav.Item>
                        </>
                    </Nav>
                </>
            );
        }

        return (
            <>
                <Nav variant='pills' activeKey='/home'>
                    <>
                        <Nav.Item>
                            <Nav.Link as={Link} to='/signup'>
                                <Button variant='success'>Sign Up</Button>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to='/login'>
                                <Button variant='info'>Log In</Button>
                            </Nav.Link>
                        </Nav.Item>
                    </>
                </Nav>
            </>
        );
    };

    return (
        <Container fluid className='bg-light position-fixed'>
            <Container>
                <Navbar className='justify-content-between' variant='light'>
                    <Navbar.Brand as={Link} to='/'>
                        <img
                            alt=''
                            src={logo}
                            width='30'
                            height='30'
                            className='d-inline-block align-top'
                        />
                        Reason Digital
                    </Navbar.Brand>
                    <AuthenticatedHeader />
                </Navbar>
            </Container>
        </Container>
    );
};
export default Header;
