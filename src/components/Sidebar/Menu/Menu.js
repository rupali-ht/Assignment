import React from 'react'
import styled from 'styled-components'
import Logo from '../../../assets/images/cmplogo.jpeg'
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import {BsPersonPlus}from "react-icons/bs";
import {NavLink} from 'react-router-dom';


const Container = styled.div`
    margin-top: 2rem;
    width: 100%;
`
const LogoImg = styled.img`
height: 3rem;
width:10rem;
margin:40px;
`
const style1 = {
    marginLeft:"50px",
    color:"gray",
    margin:"80px",
   
   
  };
  const style2= {
    marginLeft:"50px",
    color:"black",
    padding:"20px"
   
  };
  const style3 = {
    marginLeft:"50px",
    color:"purple",
    padding:"20px"
   
   
  }

const Menu = () => {
    return (
        <Container>
           <LogoImg src={Logo}></LogoImg>
            <h7 style={style1}>Main Menu</h7>
            <h2></h2>
            <a style={style2}><BsFillGrid3X3GapFill/>Dashboard</a>
            <h6 style={style3}><BsPersonPlus/>Users</h6>  
        </Container>
    )
}

export default Menu
