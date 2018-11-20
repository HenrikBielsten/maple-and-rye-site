import React, { Component } from "react";
import styled from "styled-components";

const StyledHeadline = styled.h1`
  font-family: 'Sans-Serif Bold';
  font-size: 2.2em;
  text-align: center;

`;

class Headline extends Component {

  render() {
    return (
      <StyledHeadline>
        {this.props.children}
      </StyledHeadline>
    );
  }
}

export default Headline;
