import React from 'react';
import { StyledFooter, FooterContent, FooterLink } from './Footer.styles';

const Footer = () => (
  <StyledFooter>
    <FooterContent>
      created by
      <FooterLink
        href="https://github.com/sukcinitas"
        target="_blank"
        rel="noreferrer noopener"
      >
        <b> sukcinitas</b>
      </FooterLink>
      {' - '}
      <FooterLink
        href="https://devchallenges.io"
        target="_blank"
        rel="noreferrer noopener"
      >
        devChallenges.io
      </FooterLink>
    </FooterContent>
  </StyledFooter>
);

export default Footer;
