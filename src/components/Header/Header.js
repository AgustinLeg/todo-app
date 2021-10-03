import React from "react";
import { HeaderStyles, ButtonStyles } from "./styles";

const Header = ({ darktheme, setDarkTheme }) => {
  return (
    <HeaderStyles>
      <h1>Todo</h1>
      <ButtonStyles onClick={() => setDarkTheme(!darktheme)}>
        <img
          src={darktheme ? "images/icon-sun.svg" : "images/icon-moon.svg"}
          alt={darktheme ? "sun icon" : "moon icon"}
        />
      </ButtonStyles>
    </HeaderStyles>
  );
};

export default Header;
