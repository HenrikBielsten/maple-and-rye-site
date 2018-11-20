import React, { Component } from "react";
import styled from "styled-components";

const StyledImage = styled.img`
width: ${props => props.width}
box-shadow: 2px 2px 10px ${props => props.theme.shadow};
position: relative;
left: ${props => props.slideImage ? '-100%' : '0%'};
transition: all .2s ease-out;
`;


class AlbumCover extends Component {

  state = {
    slideImage: false,
  };

  slideImage = () => {
    this.setState({
      slideImage: !this.state.slideImage,
    })
  }

  render() {

    return (
      <StyledImage
        width={this.props.width}
        src={this.props.src}
        onClick={this.slideImage}
        slideImage={this.state.slideImage}
        >
      </StyledImage>
    );
  }
}

export default AlbumCover;
