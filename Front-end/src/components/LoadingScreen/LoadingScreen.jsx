import React, { Component } from "react";
import styled from "styled-components";

const StyledLoading = styled.div`
height: ${props => props.height};
width: ${props => props.width};
background-color: ${props => props.bgColor};
pointer-events: ${props => props.loaded ? 'none' : 'auto'};
display: flex;
justify-content: center;
align-items: center;
position: fixed;
opacity: ${props => props.loaded ? 0 : 1};
filter: blur(${props => props.loaded ? '8px' : '0px'});
transition: all .5s linear;
`;

const StyledSVG = styled.svg`
height: ${props => props.svgHeight};
width: ${props => props.svgWidth};

path {
  fill: ${props => props.svgColor};
  stroke: ${props => props.svgColor};
}

@keyframes path1 {
  from {
    transform: translateY(750px);
  }

  to {
    transform: translateY(0px);
  }
}

@keyframes path2 {
  from {
    transform: translateY(750px) translateX(750px);
  }

  to {
    transform: translateY(0px) translateX(750px);
  }
}

@keyframes path3 {
  from {
    transform: translateY(750px) translateX(1500px);
  }

  to {
    transform: translateY(0px) translateX(1500px);
  }
}

.path1 {
  animation: path1 .5s ease-in-out infinite alternate;
}

.path2 {
  animation: path2 .5s ease-in-out .2s infinite alternate;
}

.path3 {
  animation: path3 .5s ease-in-out .4s infinite alternate;
}
`;

class LoadingScreen extends Component {

  render() {
    return (
      <StyledLoading
        height={this.props.height}
        width={this.props.width}
        bgColor={this.props.bgColor}
        loaded={this.props.loaded}
        >
        <StyledSVG
          version="1.1"
          viewBox="0 0 2000 2000"
          x="0px" y="0px"
          svgHeight={this.props.svgHeight}
          svgWidth={this.props.svgWidth}
          svgColor={this.props.svgColor}
          >

          <path className="path1" d="M286.919,0.005L286.919,0.005h-39.264v351.55c-25.092-13.875-59.372-18.375-94.589-9.875  c-61.872,14.813-103.12,64.062-92.089,109.936c11.031,45.902,70.153,70.966,132.025,56.091  c56.622-13.53,95.886-55.841,93.822-98.059h0.095V122.125c64.246,47.405,120.714,41.092,131.118,153.932  C542.781,86.409,292.169,91.409,286.919,0.005z"/>

          <path className="path2" d="M286.919,0.005L286.919,0.005h-39.264v351.55c-25.092-13.875-59.372-18.375-94.589-9.875  c-61.872,14.813-103.12,64.062-92.089,109.936c11.031,45.902,70.153,70.966,132.025,56.091  c56.622-13.53,95.886-55.841,93.822-98.059h0.095V122.125c64.246,47.405,120.714,41.092,131.118,153.932  C542.781,86.409,292.169,91.409,286.919,0.005z"/>

          <path className="path3" d="M286.919,0.005L286.919,0.005h-39.264v351.55c-25.092-13.875-59.372-18.375-94.589-9.875  c-61.872,14.813-103.12,64.062-92.089,109.936c11.031,45.902,70.153,70.966,132.025,56.091  c56.622-13.53,95.886-55.841,93.822-98.059h0.095V122.125c64.246,47.405,120.714,41.092,131.118,153.932  C542.781,86.409,292.169,91.409,286.919,0.005z"/>
        </StyledSVG>

      </StyledLoading>
    );
  }
}

export default LoadingScreen;
