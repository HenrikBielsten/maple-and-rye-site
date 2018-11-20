import React, { Component } from "react";
import styled, { withTheme } from "styled-components";

// My component imports
import Facebook from '../SVG/Facebook';
import Instagram from '../SVG/Instagram';
import Spotify from '../SVG/Spotify';
import Twitter from '../SVG/Twitter';

const StyledInstagram = styled.div`
background-color: ${props => props.theme.softBlack};
width: 8vh;
height: 8vh;
position: fixed;
bottom: ${props => props.openSocials ? '3%' : '6%'};
right: ${props => props.openSocials ? '38%' : '11.5%'};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-shadow: 1px 1px 10px ${props => props.theme.shadowDark};
border-radius: 100%;
transition: all .1s ease-out;
`;

const StyledFacebook = styled.div`
background-color: ${props => props.theme.softBlack};
width: 8vh;
height: 8vh;
position: fixed;
right: 11.5%;
bottom: ${props => props.openSocials ? '13%' : '6%'};
right: ${props => props.openSocials ? '38%' : '11.5%'};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-shadow: 1px 1px 10px ${props => props.theme.shadowDark};
border-radius: 100%;
transition: all .1s ease-out .08s;
`;

const StyledTwitter = styled.div`
background-color: ${props => props.theme.softBlack};
width: 8vh;
height: 8vh;
position: fixed;
right: 11.5%;
bottom: ${props => props.openSocials ? '20.5%' : '6%'};
right: ${props => props.openSocials ? '26%' : '11.5%'};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-shadow: 1px 1px 10px ${props => props.theme.shadowDark};
border-radius: 100%;
transition: all .1s ease-out .16s;
`;

const StyledSpotify = styled.div`
background-color: ${props => props.theme.softBlack};
width: 8vh;
height: 8vh;
position: fixed;
right: 11.5%;
bottom: ${props => props.openSocials ? '21%' : '6%'};
right: ${props => props.openSocials ? '8%' : '11.5%'};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-shadow: 1px 1px 10px ${props => props.theme.shadowDark};
border-radius: 100%;
transition: all .1s ease-out .24s;
`;

class SocialButtons extends Component {

  render() {
    return (
      <div>

        <a href="https://www.instagram.com/mapleandryeofficial/?hl=sv">
          <StyledInstagram
            openSocials={this.props.openSocials}
            >
            <Instagram
              height="50%"
              width="50%"
              color={this.props.theme.primary}
              >
            </Instagram>
          </StyledInstagram>
        </a>

        <a href="https://www.facebook.com/mapleandrye/">
          <StyledFacebook
            openSocials={this.props.openSocials}
            >
            <Facebook
              height="50%"
              width="50%"
              color={this.props.theme.primary}
              >
            </Facebook>
          </StyledFacebook>
        </a>

        <a href="https://twitter.com/mapleandrye">
          <StyledTwitter
            openSocials={this.props.openSocials}
            >
            <Twitter
              height="50%"
              width="50%"
              color={this.props.theme.primary}
              >
            </Twitter>
          </StyledTwitter>
        </a>

        <a href="https://open.spotify.com/artist/4JX39XNBiMfzn7HlmopIsj?si=CQfjT1dAS0Oo8CGtLWtkvQ">
          <StyledSpotify
            openSocials={this.props.openSocials}
            >
            <Spotify
              height="50%"
              width="50%"
              color={this.props.theme.primary}
              >
            </Spotify>
          </StyledSpotify>
        </a>

      </div>
    );
  }
}


export default withTheme(SocialButtons);
