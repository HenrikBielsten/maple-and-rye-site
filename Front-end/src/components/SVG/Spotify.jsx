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

class Spotify extends Component {

  render() {
    return (
      <StyledSVG
        version="1.1" x="0px" y="0px"
        viewBox="0 0 512 512"
        height={this.props.height}
        width={this.props.width}
        color={this.props.color}
        >
          <path d="M256 0c-140.8 0-256 115.2-256 256s115.2 256 256 256 256-115.2 256-256-113.9-256-256-256zM373.8 369.9c-5.1 7.7-14.1 10.2-21.8 5.1-60.2-37.1-135.7-44.8-225.3-24.3-9 2.6-16.6-3.8-19.2-11.5-2.6-9 3.8-16.6 11.5-19.2 97.3-21.8 181.8-12.8 248.3 28.2 9 3.8 10.3 14 6.5 21.7zM404.5 299.5c-6.4 9-17.9 12.8-26.9 6.4-69.1-42.2-174.1-55-254.7-29.4-10.2 2.6-21.8-2.6-24.3-12.8-2.6-10.2 2.6-21.8 12.8-24.3 93.4-28.2 208.6-14.1 288 34.6 7.6 3.8 11.5 16.6 5.1 25.5zM407 227.8c-81.9-48.6-218.9-53.8-297-29.4-12.8 3.8-25.6-3.8-29.4-15.4-3.8-12.8 3.8-25.6 15.4-29.4 90.9-26.9 240.6-21.8 335.4 34.6 11.5 6.4 15.4 21.8 9 33.3-6.5 8.9-21.8 12.7-33.4 6.3z"></path>
      </StyledSVG>

    );
  }
}


export default Spotify;
