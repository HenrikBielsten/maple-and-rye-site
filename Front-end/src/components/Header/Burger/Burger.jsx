import React, { Component } from "react";
import styled from "styled-components";

// My component imports
import NavLink from "../../Navigation//NavLink/NavLink";

const StyledWrapper = styled.div`
width: 100%;
height: 90vh;
position: fixed;
top: 10vh;
right: -100%;
z-index: 300;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const StyledOverlay = styled.div`
width: 100%;
height: 90vh;
background-color: ${props => props.theme.softBlack};
position: fixed;
top: 10vh;
right: ${props => props.open ? '0%' : '-100%'};
z-index: 300;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
transition: opacity .2s linear;
opacity: ${props => props.open ? '.8' : '0'};;
`;

const StyledBurger = styled.div`
color: ${props => props.theme.secondary};
background-color: ${props => props.theme.softBlack};
width: 60%;
height: 90vh;
font-size: 1.8em;
position: fixed;
top: 10vh;
right: ${props => props.open ? '0%' : '-60%'};
z-index: 400;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
transition: right .2s ease-out;

a,
a:visited {
  color: ${props => props.theme.secondary};
  text-decoration: none;
  margin: 0 0 5% 15%;
  width: 70%;
  position: relative;
  right: ${props => props.open ? '0%' : '-100%'};
  transition: right .15s linear .13s;
  font-family: 'Sans-Serif';
}

a.-current {
  border-bottom: solid ${props => props.theme.secondary} 2px;
  right: 0;
}
`;


class Burger extends Component {

  render() {
    return (
      <StyledWrapper>
        <StyledOverlay
          open={this.props.open}
          onClick={this.props.menuHandler}
          >
        </StyledOverlay>
        <StyledBurger
          open={this.props.open}
          >
            <NavLink open={this.props.open} onClick={this.props.menuHandler} to="/">Home</NavLink>
            <NavLink open={this.props.open} onClick={this.props.menuHandler} to="/abouts/theband">About</NavLink>
            <NavLink open={this.props.open} onClick={this.props.menuHandler} to="/music">Music</NavLink>
            <NavLink open={this.props.open} onClick={this.props.menuHandler} to="/live">Live</NavLink>
            <NavLink open={this.props.open} onClick={this.props.menuHandler} to="/contact">Contact</NavLink>
        </StyledBurger>
      </StyledWrapper>
    );
  }
}


export default Burger;
