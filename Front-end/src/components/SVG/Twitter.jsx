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

class Twitter extends Component {

  render() {
    return (
      <StyledSVG
        version="1.1" x="0px" y="0px"
        viewBox="0 0 512 512"
        height={this.props.height}
        width={this.props.width}
        color={this.props.color}
        >
          <path d="M512 113.2c-18.8 8.4-39.1 14-60.3 16.5 21.7-13 38.3-33.6 46.2-58.1-20.3 12-42.8 20.8-66.7 25.5-19.2-20.4-46.5-33.1-76.7-33.1-58 0-105 47-105 105 0 8.2 0.9 16.2 2.7 23.9-87.3-4.4-164.7-46.2-216.5-109.8-9 15.5-14.2 33.6-14.2 52.8 0 36.4 18.5 68.6 46.7 87.4-17.2-0.5-33.4-5.3-47.6-13.1 0 0.4 0 0.9 0 1.3 0 50.9 36.2 93.4 84.3 103-8.8 2.4-18.1 3.7-27.7 3.7-6.8 0-13.3-0.7-19.8-1.9 13.4 41.7 52.2 72.1 98.1 73-36 28.2-81.2 45-130.5 45-8.5 0-16.8-0.5-25.1-1.5 46.6 29.9 101.8 47.2 161.1 47.2 193.2 0 298.9-160.1 298.9-298.9 0-4.6-0.1-9.1-0.3-13.6 20.5-14.7 38.3-33.2 52.4-54.3z"></path>
      </StyledSVG>

    );
  }
}


export default Twitter;
