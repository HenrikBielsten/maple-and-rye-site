import React, { Component } from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import posed from 'react-pose';

// My component imports
import PageContainer from '../PageComponents/PageContainer';
import Headline from "../PageComponents/Headline";
import NotFound from "../NotFound/NotFound";


const Wrapper = posed.div({
  enter: { staggerChildren: 100 },
});

const P = posed.div({
  enter: {
    x: 0,
  },
});

export const StyledAboutWrapper = styled(Wrapper)`
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0 5% 0 5%;

p {
  font-family: 'Sans-Serif';
}
`;

const StyledImage = styled.img`
width: 100%;
margin-bottom: 4vh;
box-shadow: 2px 2px 10px ${props => props.theme.shadow};
`;

class AboutSingle extends Component {
  state = {
    data: false,
    error: false
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.about_single !== prevProps.about_single) {
      this.fetchData();
    }
  }

  fetchData() {
    fetch(`${process.env.REACT_APP_API_URL}/about/${this.props.about_single}`)
    .then(res => res.json())
    .catch(error => {
      this.setState({
        error
      });
    })
    .then(data => {
      this.setState({
        data: data
      });
    });
  }

  render() {
    const { data, error } = this.state;

    return (
      <PageContainer
        padding="0 0 0 0"
        >
        {data ? (
          data.post_name ? (
            <React.Fragment>
              <Helmet>
                <title>About Maple & Rye</title>
              </Helmet>

              <Headline>
                {data.full_name}
              </Headline>

              <StyledAboutWrapper key={data.ID}
                mb={'4vh'}
                >
                <StyledImage
                  src={data.image.sizes.medium_large}
                  >
                </StyledImage>

                <P dangerouslySetInnerHTML={{__html: data.content}}></P>
              </StyledAboutWrapper>
            </React.Fragment>
          ) : (
            <NotFound />
          )
        ) : error && (
          <p>Error...</p>
        )}
      </PageContainer>
    );
  }
}

export default AboutSingle;
