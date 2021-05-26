import React from 'react'
import styled from 'styled-components'
import Avtar from '../../assets/images/avtar.jpeg';
import {Navbar,Button,Form,FormControl} from 'react-bootstrap'
import {BsFilterLeft,BsListUl,BsGrid3X3Gap} from 'react-icons/bs'

const Container = styled.div`
    display: flex;
    padding: 1rem;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 3rem;
`

const ProfileImg = styled.img`
    height: 2rem;
    // margin: 0 1rem;

`
const Nav = () => {
    return (
        <Container>
          <Navbar>
              <Navbar.Brand style={{paddingRight:"820px",color:"purple",height:"20px"}}><BsFilterLeft/></Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  <ProfileImg src={Avtar }/>
                </Navbar.Text>
              </Navbar.Collapse>
              <h7 style={{color:"black"}}>Joseph</h7>
          </Navbar>
         
  </Container>
 
    )
}

export default Nav



