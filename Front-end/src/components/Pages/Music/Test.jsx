import React, { Component } from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import posed from 'react-pose';
import { color, width, height, space } from 'styled-system';

// My component imports
import NavLink from "../../Navigation//NavLink/NavLink";
import Menu from "../../Menu/Menu";
import Headline from "../../Headline/Headline";

const MusicPage = posed.div({
  enter: { staggerChildren: 100 },
})

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

export const StyledLyrics = styled(MusicPage)`
  ${color};
  ${width};
  ${height};
  min-height: 100vh;
  padding-top: 10vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  h3 {
    text-align: center;
    margin-bottom: 3%;
    font-family: 'Sans-Serif';
    align-self: flex-start;
  }
`;

const StyledLyricsWrapper = styled(Wrapper)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0 5% 0 5%;
  height: ${props => props.openLyric ? "50vh" : "0vh"};
  overflow: hidden;



  p {
    font-family: 'Serif';
    font-size: 1.1em;
    margin: 0;
  }
`;

const StyledDivider = styled.div`
  ${color};
  ${width};
  ${height};
  ${space};
`;

class Music extends Component {

  state = {
    lyrics: false,
    error: false,
    openLyric: false,
  };

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API_URL}/lyrics`)
      .then(response => response.json())
      .catch(error => {
        this.setState({
          error
        });
      })
      .then(data => {
        // data.sort(function(a, b) {
        //   a = new Date(a.release_date.year, a.release_date.month, a.release_date.day);
        //   b = new Date(b.release_date.year, b.release_date.month, b.release_date.day);
        //   return a>b ? -1 : a<b ? 1 : 0;
        // });

        this.setState({
          lyrics: data,
        });
      })
  }

  handleLyric = () => {
    this.setState({
      openLyric: !this.state.openLyric,
    })
  }

  render() {
    const { lyrics, error } = this.state;

    console.log(this.state.openLyric);

    return (
      <StyledLyrics
        bg="primary"
        >
        <Helmet>
          <title>Lyrics by Maple & Rye</title>
        </Helmet>

        <Menu
          height={'10vh'}
          width={'100vw'}
          >
            <NavLink to="/music" onClick={this.props.handleScroll} >Audio</NavLink>
          <NavLink to="/video" onClick={this.props.handleScroll} >Video</NavLink>
        <NavLink to="/lyrics" onClick={this.props.handleScroll} >Lyrics</NavLink>
        </Menu>

        <Headline>Lyrics</Headline>

        {lyrics ? (
          lyrics.map(
            lyric =>
              lyric.post_name && (

                <React.Fragment key={lyric.ID}>

                <h3 onClick={this.handleLyric} >{lyric.post_title}</h3>

                <StyledLyricsWrapper openLyric={this.state.openLyric}
                  mt={'4vh'}
                  >

                  <div dangerouslySetInnerHTML={{__html: lyric.content}}></div>

                </StyledLyricsWrapper>
                <StyledDivider
                  bg="softBlack"
                  width={'100%'}
                  height={2}
                  >
                  </StyledDivider>
                </React.Fragment>
              )
          )
        ) : error && (
          <p>Error!</p>
        )}
      </StyledLyrics>
    );
  }
}

export default Music;
