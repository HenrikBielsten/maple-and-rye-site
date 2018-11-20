import React, { Component } from "react";
import Helmet from "react-helmet";
import styled, { withTheme } from "styled-components";
import posed from 'react-pose';

// Import image carousel
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// My component imports
import PageContainer from '../PageComponents/PageContainer';
import LogoText from "../../SVG/LogoText";
import Button from "../PageComponents/Buttons/Button";
import Headline from "../PageComponents/Headline";

const Wrapper = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring', stiffness: 700, damping: 100,
    }
  },
  exit: { y: "100vh", opacity: 0 }
})

const StyledHero = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
background-color: ${props => props.theme.softBlack}
box-shadow: 2px 2px 10px ${props => props.theme.shadow};
`;

const StyledNewsItem = styled(Wrapper)`
width: 90%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 5vh;
padding-bottom: 5vh;
border-bottom: 2px solid ${props => props.theme.softBlack};

h2 {
  font-family: 'Sans-Serif Medium';
  text-align: center;
}

p {
  font-family: 'Sans-Serif';
}
`;

const StyledNewsImage = styled.img`
width: 100%;
box-shadow: 2px 2px 10px ${props => props.theme.shadow};
margin-bottom: 4vh;
`;

class Home extends Component {

  state = {
    news: false,
    error: false,
    header_images: false,
  };

  componentDidMount() {
    this.getNews();
    this.getHeaderImages();
  }

  getNews = () => {
    fetch(`${process.env.REACT_APP_API_URL}/news`)
    .then(response => response.json())
    .catch(error => {
      this.setState({
        error
      });
    })
    .then(data => {
      data.sort(function(a, b) {
        a = new Date(a.post_date);
        b = new Date(b.post_date);
        return a>b ? -1 : a<b ? 1 : 0;
      });

      this.setState({
        news: data,
      });
    });
  }

  getHeaderImages = () => {
    fetch(`${process.env.REACT_APP_API_URL}/header_images`)
    .then(response => response.json())
    .catch(error => {
      this.setState({
        error
      });
    })
    .then(image_data => {
      image_data.sort(function(a, b) {
        a = new Date(a.post_date);
        b = new Date(b.post_date);
        return a>b ? -1 : a<b ? 1 : 0;
      });

      this.setState({
        header_images: image_data,
      });
    });
  }

  render() {
    const { news, header_images, error } = this.state;

    return (
      <PageContainer
        padding="10vh 0 0 0"
        >
        <Helmet>
          <title>Maple & Rye</title>
        </Helmet>

        <StyledHero>
          <Carousel
            autoPlay
            infiniteLoop
            transitionTime={1000}
            interval={6000}
            showArrows={false}
            showIndicators={false}
            showThumbs={false}
            showStatus={false}
            stopOnHover={false}
            swipeable={false}
            emulateTouch={false}
            >
            {header_images ? (
              header_images.map(
                gallery =>
                  gallery.post_name && (
                    gallery.images.map(
                      image =>
                      image.title && (
                        <div style={{height: '43vh'}}>
                          <img style={{width: '100%', height: '100%'}} src={image.sizes.medium_large} alt={image.alt}/>
                        </div>

                      )
                    )
                  )
              )
            ) : error && (
              <p>Error!</p>
            )}
          </Carousel>

          <LogoText
            width="60vw"
            color={this.props.theme.primary}
            position="absolute"
            >
          </LogoText>
        </StyledHero>

        <Headline>NEWS</Headline>

        {news ? (
          news.map(
            news_item =>
              news_item.post_name && (
                <StyledNewsItem key={news_item.ID}>

                  <h2>{news_item.headline.toUpperCase()}</h2>

                  <StyledNewsImage
                    src={news_item.image.sizes.medium_large}
                    >
                  </StyledNewsImage>

                  <p dangerouslySetInnerHTML={{__html: news_item.content}}></p>

                  <a href={news_item.link}>
                    <Button
                      color={this.props.theme.softBlack}
                      backgroundColor={this.props.theme.primary}
                      width="30vw"
                      height="8vw"
                      borderColor={this.props.theme.softBlack}
                      >
                      {news_item.button_text.toUpperCase()}
                    </Button>
                  </a>
                </StyledNewsItem>
              )
          )
        ) : error && (
          <p>Error!</p>
        )}

      </PageContainer>
    );
  }
};

export default withTheme(Home);
