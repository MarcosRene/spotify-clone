import styled from 'styled-components';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export const Container = styled.div`
  grid-area: PI;

  height: 60px;

  background-color: #121212;

  padding: 0 32px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  z-index: 2;
`;

export const ButtonsGroup = styled.div`
  display: flex;
`;

export const ContentButton = styled.div`
  width: 32px;
  height: 32px;
  
  margin-right: 16px;
  
  border: none;
  border-radius: 50%;
  
  background-color: #0a0a0a;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  cursor: not-allowed;
`;

export const ButtonChevronLeft = styled(FiChevronLeft)`
  width: 22px;
  height: 22px;

  color: #fff;
  opacity: .6;
`;

export const ButtonChevronRight = styled(FiChevronRight)`
  width: 22px;
  height: 22px;

  color: #fff;
  opacity: .6;
`;
