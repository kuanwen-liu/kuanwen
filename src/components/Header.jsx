import React from "react";

import downarrow from "../assets/downarrow.png";
import Contacts from "./contacts/Contacts";
import "./Header.css";

const Header = () => {
  const titleLetters = [
    "K",
    "u",
    "a",
    "n",
    "-",
    "W",
    "e",
    "n",
    " ",
    "L",
    "i",
    "u",
  ].map((letter) => <span key={Math.random()}>{letter}</span>);

  // const subTitleLetters = [
  //   "F",
  //   "r",
  //   "o",
  //   "n",
  //   "t",
  //   "-",
  //   "E",
  //   "n",
  //   "d",
  //   " ",
  //   "D",
  //   "e",
  //   "v",
  //   "e",
  //   "l",
  //   "o",
  //   "p",
  //   "e",
  //   "r",
  // ].map((letter) => <span key={Math.random()}>{letter}</span>);
  const subTitleLetters = [
    "W",
    "e",
    "b",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
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
