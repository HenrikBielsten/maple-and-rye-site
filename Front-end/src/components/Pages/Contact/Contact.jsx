import React, { Component } from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import posed from 'react-pose';

// My component imports
import PageContainer from '../PageComponents/PageContainer';
import Headline from "../PageComponents/Headline";

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

const StyledContactWrapper = styled(Wrapper)`
margin-bottom: 4vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
position: relative;
width: 80%;
border-bottom: 1px solid ${props => props.theme.softBlack};

h3 {
  text-align: center;
  margin-bottom: 3%;
  font-family: 'Sans-Serif Medium';
}

p {
  font-family: 'Serif';
  font-size: 1.1em;
  margin-bottom: 8px;
}
`;

class Contact extends Component {

  state = {
    contacts: false,
    error: false,
  };

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API_URL}/contact`)
    .then(response => response.json())
    .catch(error => {
      this.setState({
        error
      });
    })
    .then(data => {
      data.reverse();
      this.setState({
        contacts: data,
      });
    })
  }

  render() {
    const { contacts, error } = this.state;

    return (
      <PageContainer
        padding="10vh 0 0 0"
        >
        <Helmet>
          <title>Contact Maple & Rye</title>
        </Helmet>

        <Headline>CONTACT</Headline>

        <StyledContentWrapper>
          {contacts ? (
            contacts.map(
              contact =>
                contact.post_name && (

                  <StyledContactWrapper key={contact.ID}>
                    <h3>{contact.post_title}</h3>
                    <p>{contact.full_name}</p>
                    <p>Email: {contact.email}</p>
                    <p>Phone: +{contact.phone_number}</p>
                  </StyledContactWrapper>
                )
            )
          ) : error && (
            <p>Error!</p>
          )}
        </StyledContentWrapper>

      </PageContainer>
    );
  }
}

export default Contact;
