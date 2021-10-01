import React from "react";

import downarrow from "../assets/downarrow.png";
import Contacts from "./contacts/Contacts";
import "./Header.css";

const Header = () => {
  const titleLetters = [
    "K",
    "U",
    "A",
    "N",
    "-",
    "W",
    "E",
    "N",
    " ",
    "L",
    "I",
    "U",
  ].map((letter) => <span key={Math.random()}>{letter}</span>);

  const subTitleLetters = [
    "F",
    "R",
    "E",
    "N",
    "T",
    "E",
    "N",
    "D",
    " ",
    "D",
    "E",
    "V",
    "E",
    "L",
    "O",
    "P",
    "E",
    "R",
  ].map((letter) => <span key={Math.random()}>{letter}</span>);

  return (
    <header>
      <Contacts isHeader />
      <section className="header-bg-blurry"></section>
      <section>
        <h1 className="header-title">{titleLetters}</h1>
        <h2 className="header-subtitle">{subTitleLetters}</h2>
      </section>
      <section className="header-down-arrow">
        <img src={downarrow} alt="downarrow" width="50" />
      </section>
    </header>
  );
};

export default Header;
