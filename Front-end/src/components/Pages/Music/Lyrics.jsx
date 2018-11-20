import React, { Component } from "react";
import styled, { withTheme } from "styled-components";

// My component imports
import Spotify from '../../SVG/Spotify';
import Apple from '../../SVG/Apple';

const StyledWrapper = styled.div`
width: 100%;
height: 100%;
`;

const StyledSongTitle = styled.div`
width: 100%;
height: 10%;
display: flex;
justify-content: center;
align-items: center;
position: relative;
border-bottom: solid 2px ${props => props.theme.softBlack};
box-shadow: 0px 2px 5px ${props => props.theme.shadow};
pointer-events: none;

h1 {
  margin: 0;
  font-family: 'Sans-Serif Medium';
  font-size: 1.5em;
}
`;

const StyledLyricContainer = styled.div`
width: 100%;
height: 75%;
overflow-y: scroll;
display: flex;
justify-content: flex-start;
align-items: flex-start;
padding: 4%;

p {
  margin: 0;
  font-family: 'Serif';
  font-size: 1em;
}
`;

const StyledLinksContainer = styled.div`
width: 100%;
height: 15%;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
padding: 0 20% 0 20%;
border-top: solid 2px ${props => props.theme.softBlack};
box-shadow: 0px -3px 10px ${props => props.theme.shadow};
`;

class Lyrics extends Component {

  state = {
  };

  render() {
    return (
      <StyledWrapper>
        <StyledSongTitle
          songTitle={this.props.songTitle}
          >
          <h1>{this.props.songTitle}</h1>
        </StyledSongTitle>

        <StyledLyricContainer
          lyric={this.props.lyric}
          >
          <p dangerouslySetInnerHTML={{__html: this.props.lyric}}></p>
        </StyledLyricContainer>

        <StyledLinksContainer>
          <a href={this.props.spotify_link}>
            <Spotify
              height="10vw"
              width="10vw"
              color={this.props.theme.softBlack}
              >
            </Spotify>
          </a>

          <a href={this.props.apple_link}>
            <Apple
              height="10vw"
              width="10vw"
              color={this.props.theme.softBlack}
              >
            </Apple>
          </a>
        </StyledLinksContainer>
      </StyledWrapper>
    );
  }
}

export default withTheme(Lyrics);
