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

class Phone extends Component {

  render() {
    return (
      <StyledSVG
        version="1.1" x="0px" y="0px"
        viewBox="0 0 512 512"
        height={this.props.height}
        width={this.props.width}
        color={this.props.color}
        >
          <path d="M352 320c-32 32-32 64-64 64s-64-32-96-64-64-64-64-96 32-32 64-64-64-128-96-128-96 96-96 96c0 64 65.75 193.75 128 256s192 128 256 128c0 0 96-64 96-96s-96-128-128-96z"></path>
      </StyledSVG>

    );
  }
}

export default Phone;
