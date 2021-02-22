import React from 'react';

const Footer = () =>
  <footer className="footer">
    <p 
      className="footer__content"
    >
      created by 
        <a 
          className="footer__link"
          href="https://github.com/sukcinitas"
          target="_blank"
          rel="noreferrer noopener"
        >
          <b> sukcinitas</b>
        </a>
         {' - '} 
        <a
          className="footer__link"
          href="https://devchallenges.io"
          target="_blank"
          rel="noreferrer noopener"
        >
          devChallenges.io
        </a>
    </p>
  </footer>


export default Footer;