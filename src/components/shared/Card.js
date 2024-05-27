import styled, { css } from 'styled-components';

export const Card = styled.div`
  visibility: ${(props) => (props.hide ? 'hidden' : 'visible')};
  width: 400px;
  background-color: var(--light-1);
  box-shadow: 0px 4px 12px var(--shadow);
  border-radius: 12px;
  padding: 36px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

  @media screen and (max-width: 460px) {
    width: 90%;
    max-width: 400px;
  }

  @media screen and (max-height: 500px) {
    position: static;
    transform: unset;
    margin: auto;
  }
`;

export const CardHeader = styled.header`
  margin-bottom: 30px;
`;

export const CardHeading = styled.h2`
  text-align: ${(props) => (props.left ? 'left' : 'center')};
  font-family: var(--font-2);
  font-size: 18px;
  color: var(--gray-2);
  margin: 4px auto 16px;
  font-weight: 500;
`;

export const CardSubheading = styled.h4`
  text-align: center;
  font-family: var(--font-2);
  font-size: 10px;
  font-weight: 500;
  color: var(--gray-3);
`;

export const CardIcon = styled.span`
  color: var(--green-1);
  display: block;
  margin: 0 auto;
  text-align: center;
  font-size: 36px;
`;

export const CardAdditional = styled.p`
  text-align: center;
  color: var(--gray-4);
  font-family: var(--font-2);
  font-size: 12px;
  font-weight: 500;
  margin: 18px auto;
`;

export const CardBox = styled.div`
  border-radius: 12px;
  width: 100%;

  &.selected {
    background-color: var(--green-2);
    border: 1px dashed var(--green-1);
    padding: 18px;
    overflow: hidden;
    transition: background-color 0.15s linear, border 0.15s linear;
  }

  ${(props) =>
    props.drop &&
    css`
      background-color: var(--gray-7);
      border: 1px dashed var(--blue-2);
      padding: 18px;
      overflow: hidden;
      transition: background-color 0.15s linear, border 0.15s linear;
    `}

  ${(props) =>
    props.img &&
    css`
      height: 224px;
      object-fit: cover;
    `}
`;

export const CardPic = styled.img`
  display: block;
  margin: auto;
  padding: 18px;
  height: 126px;
`;

export const CardLink = styled.p`
  font-family: var(--font-2);
  font-size: 8px;
  font-weight: 500;
  display: inline-block;
  color: var(--gray-2);
  padding: 0px 7px;
  align-self: center;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
`;

export const CardLinkWrapper = styled.div`
  width: 100%;
  background-color: var(--gray-7);
  border: 1px solid var(--gray-8);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  height: 34px;
  margin-top: 25px;
  overflow: hidden;
`;
