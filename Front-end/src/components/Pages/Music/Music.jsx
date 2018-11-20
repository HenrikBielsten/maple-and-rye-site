import React, { Component } from "react";
import Helmet from "react-helmet";
import styled, { withTheme } from "styled-components";
import posed from 'react-pose';

// My component imports
import PageContainer from '../PageComponents/PageContainer';
import NavLink from "../../Navigation//NavLink/NavLink";
import Menu from "../../Menu/Menu";
import Headline from "../PageComponents/Headline";
import AlbumCover from "./AlbumCover";
import Button from "../PageComponents/Buttons/Button";
import Modal from "../PageComponents/Modal";
import Apple from "../../SVG/Apple";
import Spotify from "../../SVG/Spotify";
import Lyrics from './Lyrics';

const Wrapper = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring', stiffness: 700, damping: 100,
    }
  },
  exit: { y: "100vh", opacity: 0, delay: 1000 }
})

const StyledContentWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
flex-wrap: wrap;
`;

const StyledReleaseWrapper = styled(Wrapper)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
`;

const StyledAlbumContainter = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
width: 80%;
`;

const StyledAlbumContent = styled.div`
background-color: white;
position: absolute;
height: 98%;
width: 98%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 5px;
box-shadow: 2px 2px 10px ${props => props.theme.shadow};
`;

const StyledTracksContainer = styled.div`
width: 100%;
height: 50%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
padding: 2% 4% 0 4%;
overflow: scroll;
`;

const StyledTrack = styled.div`
width: 100%;
height: 5vh;
min-height: 6vh;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-bottom: 2%;
padding-bottom: 2%;
border-bottom: solid 1px ${props => props.theme.softBlack};
`;

const StyledName = styled.p`
width: 50%;
font-size: 0.9em;
font-family: 'Sans-Serif';
margin: 0;
`;

const StyledLength = styled.p`
width: 10%;
font-size: 0.9em;
font-family: 'Sans-Serif';
margin: 0;
`;

const StyledAlbumTitle = styled.div`
width: 100%;
height: 20%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0 4% 0 4%;
box-shadow: 0px 2px 5px ${props => props.theme.shadowWhite};
border-radius: 5px 5px 0 0;
border-bottom: 2px solid ${props => props.theme.softBlack};

h4 {
  font-size: 1.1em;
  font-family: 'Sans-Serif Medium';
  margin: 2%;
  color: ${props => props.theme.softBlack};
}

p {
  font-size: 0.7em;
  font-family: 'Serif';
  margin: 0;
  color: ${props => props.theme.softBlack};
}
`;

const StyledLinksContainer = styled.div`
width: 100%;
height: 30%;
box-shadow: 0px -3px 10px ${props => props.theme.shadowWhite};
border-radius: 0 0 5px 5px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
padding-bottom: 2%;
padding-top: 2%;
border-top: 2px solid ${props => props.theme.softBlack};

h2 {
  font-size: 1.2em;
  font-family: 'Serif';
  margin: 0;
  color: ${props => props.theme.softBlack};
}
`;

const StyledLinks = styled.div`
width: 50%;
height: 40%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

a {
  height: 100%;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

// const StyledArrow = styled.div`
//   position: absolute;
//   right: 5%;
//   width: 0.5vh;
//   height: 10vh;
//   background-color: ${props => props.theme.softBlack};
//   box-shadow: 2px 2px 10px ${props => props.theme.shadow};
// `;

const StyledDivider = styled.div`
background-color: ${props => props.theme.softBlack};
width: 80%;
height: 0.5vh;
margin-top: 4vh;
margin-bottom: 4vh;
`;

class Music extends Component {

  state = {
    releases: false,
    error: false,
    modalOpen: false,
    songTitle: false,
    lyric: false,
  };

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API_URL}/music`)
    .then(response => response.json())
    .catch(error => {
      this.setState({
        error
      });
    })
    .then(data => {
      data.sort(function(a, b) {
        a = new Date(a.date);
        b = new Date(b.date);
        return a>b ? -1 : a<b ? 1 : 0;
      });

      this.setState({
        releases: data,
      });
    })
  }

  lyricsHandler = (track) => {
    this.setState({
      modalOpen: !this.state.modalOpen,
      songTitle: track.post_title,
      lyric: track.lyric,
      spotify_link: track.spotify_link,
      apple_link: track.apple_link,
    })
  }

  lyricsClose = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    })
  }

  render() {
    const { releases, error } = this.state;

    return (
      <PageContainer
        padding="10vh 0 0 0"
        >

        <Helmet>
          <title>Music by Maple & Rye</title>
        </Helmet>

        <Menu
          height={'10vh'}
          width={'100vw'}
          >
          <NavLink to="/music" onClick={this.props.handleScroll} >Audio</NavLink>
          <NavLink to="/video" onClick={this.props.handleScroll} >Video</NavLink>
        </Menu>

        <Headline>DISCOGRAPHY</Headline>

        <StyledContentWrapper>
          {releases ? (
            releases.map(
              release =>
                release.post_name && (

                  <StyledReleaseWrapper key={release.ID}>

                    <StyledAlbumContainter>
                      <StyledAlbumContent>

                        <StyledAlbumTitle>
                          <h4>{release.post_title}</h4>
                          <p>{release.date}</p>
                        </StyledAlbumTitle>

                        <StyledTracksContainer>
                          {release.tracks ? (
                            release.tracks.map(
                              track =>
                                track.post_name && (
                                  <StyledTrack key={track.ID}>
                                    <StyledName>{track.post_title}</StyledName>
                                    <StyledLength>{track.length.minutes}:{track.length.seconds}</StyledLength>

                                    <div
                                      style={{width: '20%', height: '90%'}}
                                      onClick={()=>{this.lyricsHandler(track)}}
                                      >
                                      <Button
                                        color={this.props.theme.softBlack}
                                        backgroundColor="white"
                                        borderColor={this.props.theme.softBlack}
                                        width={'100%'}
                                        height={'100%'}
                                        fontSize={'0.8em'}
                                        >
                                        Lyrics
                                      </Button>
                                    </div>

                                  </StyledTrack>
                                )
                              )
                            ) : error && (
                              <p>Error!</p>
                          )}
                        </StyledTracksContainer>

                        <StyledLinksContainer>
                          <h2>Listen!</h2>
                          <StyledLinks>
                            <a href={release.spotify_link}>
                              <Spotify
                                height="100%"
                                color={this.props.theme.softBlack}
                                >
                              </Spotify>
                            </a>

                            <a href={release.apple_link}>
                              <Apple
                                height="100%"
                                color={this.props.theme.softBlack}
                                >
                              </Apple>
                            </a>
                          </StyledLinks>
                        </StyledLinksContainer>

                      </StyledAlbumContent>

                      <AlbumCover
                        slideImage={this.state.slideImage}
                        src={release.cover_image.sizes.medium_large}
                        width={'100%'}
                        >
                      </AlbumCover>
                    </StyledAlbumContainter>

                  {/* <StyledArrow
                    bg="softBlack"
                    >

                    </StyledArrow> */}

                    <StyledDivider>
                    </StyledDivider>

                  </StyledReleaseWrapper>
                )
              )
            ) : error && (
              <p>Error!</p>
          )}
        </StyledContentWrapper>

        <Modal
          modalOpen={this.state.modalOpen}
          lyricsClose={this.lyricsClose}
          >
          <Lyrics
            songTitle={this.state.songTitle}
            lyric={this.state.lyric}
            spotify_link={this.state.spotify_link}
            apple_link={this.state.apple_link}
            >

          </Lyrics>
        </Modal>

      </PageContainer>
    );
  }
}

export default withTheme(Music);
