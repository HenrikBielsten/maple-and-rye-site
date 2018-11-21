import React, { Component } from "react";
import styled, { withTheme } from "styled-components";

// My component imports
import Arrow from '../../SVG/Arrow';

const StyledImage = styled.img`
width: ${props => props.width};
box-shadow: 2px 2px 10px ${props => props.theme.shadow};
position: relative;
left: ${props => props.slideImage ? '-100%' : '0%'};
transition: all .2s ease-out;
animation: ${props => props.imageIsClicked ? '' : 'imageAttention .5s ease-in-out 13s 2 normal'};

@keyframes imageAttention {
  0% {
    left: 0%;
  }

  50% {
    left: -10%;
  }

  100% {
    left: 0%;
  }
}
`;

const StyledArrowContainer = styled.div`
height: 4vh;
width: 4vh;
border-radius: 100%;
background-color: ${props => props.theme.softBlack};
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: -2%;
right: ${props => props.slideImage ? '98%' : '-2%'};
transform: rotate(${props => props.slideImage ? '180deg' : '0deg'});
box-shadow: ${props => props.slideImage ? '0px -2px 5px' : '0px 2px 5px'} ${props => props.theme.shadowDark};
pointer-events: none;
transition: all .2s ease-out;
animation: ${props => props.imageIsClicked ? '' : 'attention .7s ease-in-out 5s 2 normal, attention2 .5s ease-in-out 13s 2 normal'};

@keyframes attention {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes attention2 {
  0% {
    right: -2%;
  }

  50% {
    right: 8%;
  }

  100% {
    right: -2%;
  }
}
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
      <div>
        <StyledImage
          width={this.props.width}
          src={this.props.src}
          onClick={this.slideImage}
          slideImage={this.state.slideImage}
          imageIsClicked={this.props.imageIsClicked}
        />

      <StyledArrowContainer
        slideImage={this.state.slideImage}
        imageIsClicked={this.props.imageIsClicked}
        >
        <Arrow
          height="80%"
          width="80%"
          color={this.props.theme.primary}
          position="relative"
          top="6%"
          right="3%"
          >
        </Arrow>
      </StyledArrowContainer>

      </div>
    );
  }
}

export default withTheme(AlbumCover);
