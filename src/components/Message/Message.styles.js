import styled from 'styled-components';

export const StyledMessage = styled.p`
  background-color: var(--gray-2);
  color: var(--light-1);
  border-radius: 4px;
  font-family: var(--font-3);
  font-weight: 500;
  font-size: 12px;
  padding: 8px 16px;
  border: none;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 2;
`;
