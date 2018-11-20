import React, { Component } from "react";
import styled, { withTheme } from "styled-components";

// My component imports
import Socials from "../SVG/Socials";

const StyledSocialsButton = styled.div`
background-color: ${props => props.theme.softBlack};
height: 10vh;
width: 10vh;
${'' /* transform: scale(${props => props.openSocials ? '1.5' : '1'}); */}
${'' /* height: ${props => props.openSocials ? '15vh' : '10vh'};
width: ${props => props.openSocials ? '15vh' : '10vh'}; */}
position: fixed;
bottom: 5%;
right: 10%;
display: flex;
justify-content: center;
align-items: center;
box-shadow: 1px 1px 10px ${props => props.theme.shadowDark};
border-radius: 100%;
overflow: hidden;
transition: all .1s ease-out;
`;

class SocialsButton extends Component {

  render() {
    return (
      <StyledSocialsButton
        openSocials={this.props.openSocials}
        onClick={this.props.socialsHandler}
        >
        <Socials
          height="50%"
          width="50%"
          color={this.props.theme.primary}
          >
        </Socials>
      </StyledSocialsButton>
    );
  }
}


export default withTheme(SocialsButton);
