import React, { Component } from "react";
import Helmet from "react-helmet";
import styled, { withTheme } from "styled-components";
import posed from 'react-pose';

// My component imports
import PageContainer from '../PageComponents/PageContainer';
import Headline from "../PageComponents/Headline";
import Button from "../PageComponents/Buttons/Button";

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

const StyledShowWrapper = styled(Wrapper)`
width: 100vw;
height: 25vh;
margin-bottom: 5vh;
padding-left: 4%;
padding-right: 4%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

const StyledInfoContainer = styled.div`
width: 100%;
height: 100%;
padding-bottom: 4%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
border-bottom: solid 2px ${props => props.theme.softBlack};
color: ${props => props.theme.softBlack};

h3 {
  font-size: 1.2em;
  font-family: 'Sans-Serif Medium';
  margin: 0;
  color: ${props => props.theme.softBlack};
}

h4 {
  font-size: 0.9em;
  font-family: 'Sans-Serif';
  margin: 0;
  color: ${props => props.theme.softBlack};
}

p {
  font-size: 0.9em;
  font-family: 'Serif';
  margin: 0;
  color: ${props => props.theme.softBlack};
}

a,
a:visited {
  text-decoration: none;
  color: ${props => props.theme.secondary};
}
`;

class Live extends Component {
  state = {
    live_shows: false,
    error: false
  };

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API_URL}/live`)
    .then(response => response.json())
    .catch(error => {
      this.setState({
        error
      });
    })
    .then(data => {
      var todaysDate = new Date();

      data = data.filter(function(item) {
        const date = new Date(item.date);
        return todaysDate < date;
      }).sort(function(a, b) {
        a = new Date(a.date);
        b = new Date(b.date);
        return a<b ? -1 : a>b ? 1 : 0;
      });
      this.setState({
        live_shows: data,
      });
    })
  }

  render() {
    const { live_shows, error } = this.state;

    return (
      <PageContainer
        padding="10vh 0 0 0"
        >
        <Helmet>
          <title>Maple & Rye Live</title>
        </Helmet>

        <Headline>LIVE SHOWS</Headline>

        {live_shows ? (
          live_shows.map(
            live_show =>
              live_show.post_name && (

                <StyledShowWrapper key={live_show.ID}>

                  <StyledInfoContainer>
                    <h3>{live_show.post_title}</h3>

                    <h4>{live_show.where.venue}, {live_show.where.city}, {live_show.where.country}</h4>

                    <p>{live_show.date}</p>

                    <a href={live_show.ticket_link}>
                      <Button
                        color={this.props.theme.softBlack}
                        backgroundColor={this.props.theme.primary}
                        borderColor={this.props.theme.softBlack}
                        width={'30vw'}
                        height={'8vw'}
                        >
                          GET TICKETS
                      </Button>
                    </a>
                  </StyledInfoContainer>
                </StyledShowWrapper>
              )
            )
          ) : error && (
            <p>Error!</p>
        )}
      </PageContainer>
    );
  }
}

export default withTheme(Live);
