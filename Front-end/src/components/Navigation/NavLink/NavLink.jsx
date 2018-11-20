import React from "react";
import { Link } from "@reach/router";

const NavLink = props => {
  return (
    <Link
      {...props}
      getProps={({ isCurrent }) => {
        return {
          className: isCurrent ? "-current" : undefined
        };
      }}
    />
  );
};

export default NavLink;
