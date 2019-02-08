import React from "react";
import { Link } from "react-location";

import { Header, ThemeToggle } from "components/Styles";

export default function _Header({ onToggleDark }) {
  return (
    <Header>
      <Link className="logo" to="/">
        tannerlinsley
      </Link>
      <ThemeToggle onClick={onToggleDark} />
    </Header>
  );
}
