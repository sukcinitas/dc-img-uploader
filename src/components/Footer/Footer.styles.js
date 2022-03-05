import styled from 'styled-components';

export const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;

  @media screen and (max-height: 640px) {
    position: static;
    margin-top: auto;
  }
`;

export const FooterContent = styled.p`
  font-family: var(--font-1);
  padding: 24px;
  color: var(--gray-5);
`;

export const FooterLink = styled.a`
  color: inherit;
  text-decoration: none;
`;
