import styled from 'styled-components';

export const Loader = styled.div`
  background-color: var(--gray-6);
  border-radius: 8px;
  height: 6px;
  margin: 10px 0;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    height: 6px;
    width: 100px;
    border-radius: 8px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: -100px;
    background-color: var(--blue-1);
    animation: 3s linear 1s infinite running move;
  }
`;
