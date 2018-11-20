import React, { Component } from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

// My component imports
import Menu from '../../Menu/Menu';
import NavLink from "../../Navigation//NavLink/NavLink";

export const StyledAboutMenu = styled.div`
background-color: ${props => props.theme.primary};
min-height: 100vh;
padding-top: 10vh;
position: relative;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
`;

class Abouts extends Component {
  state = {
    abouts: false,
    error: false
  };

  componentDidMount() {
    this.fetchMenu();
  }

  fetchMenu() {
    fetch(`${process.env.REACT_APP_API_URL}/about`)
    .then(res => res.json())
    .catch(error => {
      this.setState({
        error
      });
    })
    .then(menuData => {
      menuData.sort(function(a, b) {
        a = new Date(a.post_date);
        b = new Date(b.post_date);
        return a<b ? -1 : a>b ? 1 : 0;
      });
      this.setState({
        abouts: menuData,
      });
    });
  }

  render() {
    const { abouts, error } = this.state;

    return (
      <StyledAboutMenu>
        <Helmet>
          <title>About Maple & Rye</title>
        </Helmet>

        <Menu
          height={'10vh'}
          width={'100vw'}
          >
          {abouts ? (
            abouts.map(
              about =>
                about.post_name && (
                  <NavLink key={about.ID} to={`${about.post_name}`} onClick={this.props.handleScroll}>
                    {about.post_title}
                  </NavLink>
                )
            )
          ) : error && (
            <p>Error!</p>
          )}
        </Menu>
        {this.props.children}
      </StyledAboutMenu>
    );
  }
}

export default Abouts;
