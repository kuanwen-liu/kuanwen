import React from 'react';

import './Contacts.css';
import linkedinIcon from '../../assets/linkedin-icon.svg';
import githubIcon from '../../assets/github-icon.svg';
import emailIcon from '../../assets/mail-icon.svg';

const Contacts = (props) => {
  return (
    <div className={`icons ${props.isHeader && 'icons-header'}`}>
      <a href='https://www.linkedin.com/in/louis-liu-0831a1129/'>
        <img id='in' src={linkedinIcon} alt='linkedin' />
      </a>
      <a href='https://github.com/kuanwen-liu'>
        <img src={githubIcon} alt='Github' />
      </a>
      <a href='mailto:kuanwen.liu9@gmail.com'>
        <img src={emailIcon} alt='Email' />
      </a>
    </div>
  );
};

export default Contacts;
