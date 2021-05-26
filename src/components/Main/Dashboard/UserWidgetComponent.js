import React from 'react'
import styled from 'styled-components'
import {Card}from "react-bootstrap"
import Image from '../../../assets/images/profilelg.png'


const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(190,190,190,0.22);
    cursor: pointer;
    background-color: ${({ theme }) => theme.primary};
    transition: all ease-in-out 300ms;

    &:hover {
        /* box-shadow: 0px 10px 8px -8px rgba(138, 153, 192, 0.6); */
        background-color: ${({ theme }) => theme.secondary};
    }

`
const ProfileImg = styled.img`
    height: 5rem;
`
const ProfileName = styled.h1`
    font-size: 1rem;
    font-weight: 300;
    color: ${({ theme }) => theme.textColor};
`

const CardProfile = (props) => {

    return (
        <Container>
            
           <Card style={{ width: '18rem' }}>
                <Card.Body>
                <ProfileImg src={Image} ></ProfileImg>
                <Card.Title>{props.name}</Card.Title>
                <Card.Title>{props.email}</Card.Title>
                </Card.Body>
               
                </Card>
            
        </Container>
    )
}

export default CardProfile
