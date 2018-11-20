import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

const StyledH1 = styled.div`
font-family: 'Cookie-Regular';
font-size: 4em;
`;

const NotFound = () => (
  <div>
    <Helmet>
      <title>Page not found</title>
    </Helmet>
    <StyledH1>Page not found!</StyledH1>
  </div>
);

export default NotFound;
