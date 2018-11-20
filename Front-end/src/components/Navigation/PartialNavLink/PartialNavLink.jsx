import React from "react";
import { Link } from "@reach/router";

const Partial = props => {
  return (
    <Link
      {...props}
      getProps={({ isPartiallyCurrent }) => {
        return {
          className: isPartiallyCurrent ? "-current" : undefined
        };
      }}
    />
  );
};

export default Partial;
