import styled, { css } from "styled-components";

export const Input = styled.input`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
  width: 110px; /*make it label width*/
`;

export const Button = styled.button`
  background-color: var(--blue-1);
  color: var(--light-1);
  border-radius: 8px;
  font-family: var(--font-3);
  font-weight: 500;
  font-size: 12px;
  font-weight: 500;
  padding: 8px 16px;
  border: none;
  margin: 0 auto;
  outline: none;
  transition: background-color 0.2s linear;
  width: max-content;
  display: block;

  &:hover {
    background-color: var(--blue-3);
    transition: background-color 0.2s linear;
    cursor: pointer;
  }

  ${(props) =>
    props.$small &&
    css`
      font-size: 8px;
      margin: 0;
      width: 74px;
      height: 30px;
      align-self: center;
      padding: 0;
      flex-shrink: 0;
      line-height: 12px;
      letter-spacing: -0.035em;
      position: relative;
    `}
`;
