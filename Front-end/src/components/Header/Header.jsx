import React, { Component } from "react";
import styled, { withTheme } from "styled-components";

// My component imports
import LogoText from '../SVG/LogoText';

const StyledHeader = styled.div`
width: 100vw;
height: 10vh;
background-color: ${props => props.theme.softBlack};
position: fixed;
top: 0;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 5% 0 5%;
box-shadow: 0px 0px 8px ${props => props.theme.shadowDark};
border-bottom: solid 3px ${props => props.theme.secondary};
`;

const StyledBurgerIcon = styled.svg`
height: 7vh;
width: 7vh;
stroke: ${props => props.open ? props => props.theme.secondary : props => props.theme.primary};

:hover {
  cursor: pointer;
}

.upper {
  transform:
  rotate(${props => props.open ? '45deg' : '0deg'})
  translateX(${props => props.open ? '170px' : '0'})
  translateY(${props => props.open ? '-175px' : '0'});
  transition: all .2s linear;
}

.middle {
  opacity: ${props => props.open ? '0' : '1'};
  transition: all .1s linear;
}

.lower {
  transform:
  rotate(${props => props.open ? '-45deg' : '0deg'})
  translateX(${props => props.open ? '-420px' : '0'})
  translateY(${props => props.open ? '-50px' : '0'});
  transition: all .2s linear;
}
`;

class Header extends Component {

  render() {
    return (
      <StyledHeader>
        <LogoText
          width={"30vw"}
          color={this.props.theme.primary}
          >
        </LogoText>
        <StyledBurgerIcon
          version="1.1" x="0px" y="0px"
          viewBox="0 0 800 800"
          open={this.props.open}
          onClick={this.props.menuHandler}
          >
            <line className="upper" fill="#FFFFFF"  strokeWidth="77" strokeLinecap="round" strokeMiterlimit="10" x1="93" y1="185.5" x2="707" y2="185.5"/>
            <line className="middle" fill="#FFFFFF"  strokeWidth="77" strokeLinecap="round" strokeMiterlimit="10" x1="93" y1="400.5" x2="707" y2="400.5"/>
            <line className="lower" fill="#FFFFFF"  strokeWidth="77" strokeLinecap="round" strokeMiterlimit="10" x1="93" y1="614.5" x2="707" y2="614.5"/>
        </StyledBurgerIcon>
      </StyledHeader>
    );
  }
}


export default withTheme(Header);
