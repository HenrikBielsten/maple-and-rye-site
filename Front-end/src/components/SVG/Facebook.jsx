import React, { Component } from "react";
import styled from "styled-components";

const StyledSVG = styled.svg`
height: ${props => props.height};
width: ${props => props.width};

path {
  fill: ${props => props.color};
  stroke: ${props => props.color};
}
`;

class Facebook extends Component {

  render() {
    return (
      <StyledSVG
        version="1.1" x="0px" y="0px"
        viewBox="0 0 512 512"
        height={this.props.height}
        width={this.props.width}
        color={this.props.color}
        >
          <path d="M464 0h-416c-26.4 0-48 21.6-48 48v416c0 26.4 21.6 48 48 48h208v-224h-64v-64h64v-32c0-52.9 43.1-96 96-96h64v64h-64c-17.6 0-32 14.4-32 32v32h96l-16 64h-80v224h144c26.4 0 48-21.6 48-48v-416c0-26.4-21.6-48-48-48z"></path>
      </StyledSVG>

    );
  }
}


export default Facebook;
