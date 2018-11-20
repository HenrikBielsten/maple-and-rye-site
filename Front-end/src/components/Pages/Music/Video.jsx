import React, { Component } from "react";
import Helmet from "react-helmet";
import styled, { withTheme } from "styled-components";
import posed from "react-pose";
import LazyLoad from 'react-lazyload';

// My component imports
import PageContainer from '../PageComponents/PageContainer';
import NavLink from "../../Navigation//NavLink/NavLink";
import Menu from '../../Menu/Menu';
import Headline from "../PageComponents/Headline";
import LoadingScreen from '../../LoadingScreen/LoadingScreen';

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

const StyledVideoWrapper = styled(Wrapper)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 4vh;

h3 {
  text-align: center;
  margin-bottom: 3%;
  font-family: 'Serif';
}

iframe {
  height: 35.8vh;
  width: 100vw;
}
`;

class Video extends Component {
  state = {
    videos: false,
    error: false,
    loaded: false,
  };

  componentDidMount() {
    this.loading();

    fetch(`${process.env.REACT_APP_API_URL}/video`)
    .then(response => response.json())
    .catch(error => {
      this.setState({
        error
      });
    })
    .then(data => {
      this.setState({
        videos: data,
      });
    })
  }

  loading = () => {
    setTimeout(function(){
      this.setState({
        loaded: true,
      })
    }.bind(this), 4000);
  }

  render() {

    const { videos, error } = this.state;

    return (
      <PageContainer
        padding="10vh 0 0 0"
        >
        <Helmet>
          <title>Videos by Maple & Rye</title>
        </Helmet>

        <Menu
          height={'10vh'}
          width={'100vw'}
          >
          <NavLink to="/music" onClick={this.props.handleScroll} >Audio</NavLink>
          <NavLink to="/video" onClick={this.props.handleScroll} >Video</NavLink>
        </Menu>

        <Headline>VIDEOGRAPHY</Headline>

        {videos ? (
          videos.map(
            video =>
              video.post_name && (

                <LazyLoad key={video.ID}
                  height={200}
                  offset={300}
                  debounce={500}
                  >
                    <StyledVideoWrapper>
                      <h3>{video.post_title}</h3>

                      <iframe src={`${video.video_link + "?modestbranding=1"}`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title={video.post_title}></iframe>

                    </StyledVideoWrapper>
                </LazyLoad>

              )
            )
          ) : error && (
            <p>Error!</p>
        )}

        <LoadingScreen
          height='100vh'
          width='100%'
          bgColor={this.props.theme.primary}
          svgHeight='14vh'
          svgWidth='14vh'
          svgColor={this.props.theme.softBlack}
          loaded={this.state.loaded}
          >
        </LoadingScreen>
      </PageContainer>
    );
  }
}

export default withTheme(Video);
