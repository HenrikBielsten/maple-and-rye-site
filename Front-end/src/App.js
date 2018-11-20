import React, { Component } from "react";
import { Router, Location } from '@reach/router';
import { ThemeProvider } from 'styled-components';
import posed, { PoseGroup } from 'react-pose';

// My component imports
import Burger from "./components/Header/Burger/Burger";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SocialsButton from "./components/SocialsMenu/SocialsButton";
import SocialButtons from "./components/SocialsMenu/SocialButtons";

// Routs imports
import Home from "./components/Pages/Home/Home";
import Abouts from "./components/Pages/About/Abouts";
import About from "./components/Pages/About/About";
import Live from "./components/Pages/Live/Live";
import Music from "./components/Pages/Music/Music";
import Video from "./components/Pages/Music/Video";
import Contact from "./components/Pages/Contact/Contact";
import NotFound from "./components/Pages/NotFound/NotFound";

// Theme imports
import { MainTheme } from './theme/Theme';

// CSS imports
import "./App.css";

const RouteContainer = posed.div({
  enter: {
    x: 0,
    delay: 500,
    beforeChildren: true,
    transition: {
      duration: 200,
    }
  },
  exit: {
    x: "-200vw",
    transition: {
      duration: 500,
    }
  }
});

const PosedRouter = ({ children }) => (
  <Location>
    {({ location }) => (
      <PoseGroup>
        <RouteContainer key={location.key}>
          <Router location={location}>{children}</Router>
        </RouteContainer>
      </PoseGroup>
    )}
  </Location>
) ;


class App extends Component {

  state = {
    open: false,
    openSocials: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (this.state.openSocials) {
      this.setState({
        openSocials: false,
      })
    }
  };

  menuHandler = () => {
    if (this.state.openSocials) {
      this.setState({
        openSocials: false,
      })
    }

    this.setState({
      open: !this.state.open,
    })
  }

  socialsHandler = () => {
    this.setState({
      openSocials: !this.state.openSocials,
    })
  }

  render(location) {
    return (
      <ThemeProvider theme={MainTheme}>
        <div className="app">

          <PosedRouter>
            <Home path="/" />
            <Live path="live" />
            <Abouts path="abouts" handleScroll={this.handleScroll} >
              <About path=":about_single" />
            </Abouts>
            <Music path="music" handleScroll={this.handleScroll} />
            <Video path="video" handleScroll={this.handleScroll} />
            <Contact path="contact" handleScroll={this.handleScroll} />
            <NotFound default />
          </PosedRouter>

          <Burger open={this.state.open} menuHandler={this.menuHandler}/>

          <Header open={this.state.open} menuHandler={this.menuHandler} />

          <SocialButtons openSocials={this.state.openSocials} socialsHandler={this.socialsHandler}/>

          <SocialsButton openSocials={this.state.openSocials} socialsHandler={this.socialsHandler}/>

          <Footer />

        </div>
      </ThemeProvider>
    );
  }
}

export default App;
