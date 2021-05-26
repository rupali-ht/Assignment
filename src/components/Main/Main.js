import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import CardProfile from './Dashboard/UserWidgetComponent'
import NavBar from './NavBar'

const Container = styled.div`
    width: auto;
    margin-left: 16rem;
    position: relative;
    padding: 0 4rem;
`
const username="Josef Javera";
const emailId="josef@gmail.com";

const Main = () => {
    return (
        <Container>
            <Nav /> 
            <NavBar/>
            <CardProfile name={username} email={emailId}/>
        </Container>
    )
}

export default Main
