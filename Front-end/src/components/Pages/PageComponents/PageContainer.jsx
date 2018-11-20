import React, { Component } from "react";
import styled from "styled-components";
import posed from 'react-pose';

const Page = posed.div({
  enter: { staggerChildren: 100 },
})

const StyledPageContainer = styled(Page)`
min-height: 100vh;
padding: ${props => props.padding};
position: relative;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
background-color: ${props => props.theme.primary};
`;

class PageContainer extends Component {

  render() {

    return (
      <StyledPageContainer
        padding={this.props.padding}
        >
        {this.props.children}
      </StyledPageContainer>
    );
  }
};

export default PageContainer;
