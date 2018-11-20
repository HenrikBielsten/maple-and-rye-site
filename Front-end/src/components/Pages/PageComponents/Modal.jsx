import React, { Component } from "react";
import styled, { withTheme } from "styled-components";

// My component imports
import Cross from '../../SVG/Cross';

const StyledWrapper = styled.div`
width: 100%;
height: 90vh;
position: fixed;
right: -100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
z-index: 200;
`;

const StyledOverlay = styled.div`
width: 100%;
height: 90vh;
background-color: ${props => props.theme.softBlack};
position: fixed;
right: ${props => props.modalOpen ? '0%' : '-100%'};
z-index: 200;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
transition: opacity .2s linear;
opacity: ${props => props.modalOpen ? '.8' : '0'};;
`;

const StyledModal = styled.div`
color: ${props => props.theme.softBlack};
background-color: ${props => props.theme.primary};
width: 90%;
height: 80vh;
position: fixed;
right: ${props => props.modalOpen ? '5%' : '-100%'};
opacity: ${props => props.modalOpen ? 1 : 0};
z-index: 200;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
transition: right .2s ease-out;
border-radius: 10px;
overflow: hidden;
`;

const StyledClose = styled.div`
`;

class Modal extends Component {

  render() {
    return (
      <StyledWrapper>
        <StyledOverlay
          modalOpen={this.props.modalOpen}
          onClick={this.props.lyricsHandler}
          >
        </StyledOverlay>
        <StyledModal
          modalOpen={this.props.modalOpen}
          >
            <StyledClose
              onClick={this.props.lyricsHandler}
              >
              <Cross
                height="5vw"
                width="5vw"
                color={this.props.theme.softBlack}
                position="absolute"
                top="2%"
                right="3%"
                >
                </Cross>
            </StyledClose>
            {this.props.children}
        </StyledModal>
      </StyledWrapper>
    );
  }
}


export default withTheme(Modal);
