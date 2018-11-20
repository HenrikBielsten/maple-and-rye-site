import React, { Component } from "react";
import styled from "styled-components";

const StyledButton = styled.div`
color: ${props => props.color};
background-color: ${props => props.backgroundColor};
height: ${props => props.height};
width: ${props => props.width};
display: flex;
justify-content: center;
align-items: center;
font-size: ${props => props.fontSize};
font-family: 'Sans-Serif';
border: 2px solid ${props => props.borderColor};

a,
a:visited {
  font-size: ${props => props.fontSize};
  text-decoration: none;
  font-family: 'Sans-Serif';
}
`;

class Button extends Component {

  render() {
    return (
      <StyledButton
        color={this.props.color}
        backgroundColor={this.props.backgroundColor}
        width={this.props.width}
        height={this.props.height}
        fontSize={this.props.fontSize}
        borderColor={this.props.borderColor}
        >
          {this.props.children}
      </StyledButton>
    );
  }
}


export default Button;
