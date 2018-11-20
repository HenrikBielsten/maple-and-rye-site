import React, { Component } from "react";
import styled from "styled-components";

export const StyledMenu = styled.div`
width: 100%;
margin-top: 3vh;
padding: 0 5% 0 5%;
color: ${props => props.theme.softBlack};
position: relative;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

a,
a:visited {
  color: ${props => props.theme.softBlack};
  font-size: 1.2em;
  text-align: center;
  text-decoration: none;
  position: relative;
  transition: right .15s linear .13s;
  margin: 0 2% 0 2%;
  font-family: 'Sans-Serif Medium'
}

a.-current {
  border-bottom: solid ${props => props.theme.softBlack} 2px;
}
`;

class Menu extends Component {

  render() {

    return (
      <StyledMenu>
        {this.props.children}
      </StyledMenu>
    );
  }
}

export default Menu;
