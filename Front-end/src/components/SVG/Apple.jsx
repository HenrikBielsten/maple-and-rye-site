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

class Apple extends Component {

  render() {
    return (
      <StyledSVG
        version="1.1" x="0px" y="0px"
        viewBox="0 0 512 512"
        height={this.props.height}
        width={this.props.width}
        color={this.props.color}
        >
          <path d="M395.749 272.046c-0.647-64.841 52.879-95.938 55.271-97.483-30.076-44.010-76.925-50.039-93.621-50.736-39.871-4.037-77.798 23.474-98.033 23.474-20.184 0-51.409-22.877-84.476-22.276-43.458 0.646-83.529 25.269-105.906 64.19-45.152 78.349-11.563 194.42 32.445 257.963 21.504 31.102 47.146 66.038 80.813 64.79 32.421-1.294 44.681-20.979 83.878-20.979s50.214 20.979 84.525 20.335c34.887-0.648 56.991-31.699 78.346-62.898 24.695-36.084 34.863-71.019 35.462-72.813-0.774-0.353-68.030-26.118-68.704-103.567zM331.281 81.761c17.869-21.679 29.93-51.756 26.64-81.761-25.739 1.048-56.939 17.145-75.405 38.775-16.571 19.188-31.074 49.813-27.187 79.218 28.733 2.242 58.064-14.602 75.952-36.232z"></path>
      </StyledSVG>

    );
  }
}


export default Apple;