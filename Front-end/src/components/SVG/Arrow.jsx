import React, { Component } from "react";
import styled from "styled-components";

const StyledSVG = styled.svg`
height: ${props => props.height};
width: ${props => props.width};
position: ${props => props.position};
top: ${props => props.top};
right: ${props => props.right};

path {
  fill: ${props => props.color};
  stroke: ${props => props.color};
}
`;

class Arrow extends Component {

  render() {
    return (
      <StyledSVG
        version="1.1" x="0px" y="0px"
        viewBox="0 0 32 40"
        height={this.props.height}
        width={this.props.width}
        color={this.props.color}
        position={this.props.position}
        top={this.props.top}
        right={this.props.right}
        >
          <path d="M22,29a1,1,0,0,1-.71-.29l-12-12a1,1,0,0,1,0-1.42l12-12a1,1,0,1,1,1.42,1.42L11.41,16l11.3,11.29a1,1,0,0,1,0,1.42A1,1,0,0,1,22,29Z"/>
      </StyledSVG>

    );
  }
}


export default Arrow;
