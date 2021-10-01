import React from "react";
import Contacts from "./contacts/Contacts";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Contacts />
      <div>
        <p>© Copyright 2021 Kuan-Wen Liu. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
