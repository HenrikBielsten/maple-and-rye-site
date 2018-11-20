import React, { Component } from "react";
import styled, {withTheme} from "styled-components";

// My component imports
import Facebook from '../SVG/Facebook';
import Instagram from '../SVG/Instagram';
import Spotify from '../SVG/Spotify';
import Twitter from '../SVG/Twitter';
import Phone from '../SVG/Phone';
import Email from '../SVG/Email';

const StyledFooter = styled.div`
width: 100vw
height: 40vh
background-color: ${props => props.theme.softBlack};
position: relative;
bottom: 0;
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
padding: 0 6vw 0 6vw;
border-top: solid 3px ${props => props.theme.secondary};

h2 {
  color: ${props => props.theme.primary};
  font-family: 'Sans-Serif Medium';
}
`;

const SocialsWrapper  = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 4vh;
`;

const ContactWrapper  = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
`;

const ContactDiv  = styled.div`
width: 100%;
display: flex;
justify-content: flex-start;
align-items: center;
margin-bottom: 3vh;

p {
  font-family: 'Serif';
  color: ${props => props.theme.primary};
  margin: 0 0 0 4vh;
  font-size: 1.1em;
}
`;

class Footer extends Component {

  render() {
    return (
      <StyledFooter>
        <h2>Connect with us!</h2>

        <SocialsWrapper>
          <a href="https://www.instagram.com/mapleandryeofficial/?hl=sv">
            <Instagram
              height="6vh"
              width="6vh"
              color={this.props.theme.primary}
              >
            </Instagram>
          </a>

          <a href="https://www.facebook.com/mapleandrye/">
            <Facebook
              height="6vh"
              width="6vh"
              color={this.props.theme.primary}
              >
            </Facebook>
          </a>

          <a href="https://twitter.com/mapleandrye">
            <Twitter
              height="6vh"
              width="6vh"
              color={this.props.theme.primary}
              >
            </Twitter>
          </a>

          <a href="https://open.spotify.com/artist/4JX39XNBiMfzn7HlmopIsj?si=CQfjT1dAS0Oo8CGtLWtkvQ">
            <Spotify
              height="6vh"
              width="6vh"
              color={this.props.theme.primary}
              >
            </Spotify>
          </a>
        </SocialsWrapper>

        <ContactWrapper>
          <ContactDiv>
            <Phone
              height="4vh"
              width="4vh"
              color={this.props.theme.primary}
              >
            </Phone>
            <p>+46 738701707</p>
          </ContactDiv>
          <ContactDiv>
            <Email
              height="4vh"
              width="4vh"
              color={this.props.theme.primary}
              >
            </Email>
            <p>mapleandryeofficial@gmail.com</p>
          </ContactDiv>
        </ContactWrapper>
      </StyledFooter>
    );
  }
}


export default withTheme(Footer);
