import styled from 'styled-components';

import { Props } from './index';

export const Container = styled.div`
  width: 500px;
  height: 4px;
  margin: 10px 0;
  background: #535353;
  border-radius: 20px;
  border: 0;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.1);
`;

export const Content = styled.div<Props>`
  background: ${props => props.porc ? '#b3b3b3' : ''};
  color: #fff;
  border-radius: 20px;
  display: flex;
  align-items: center;
  height: 4px;
  width: 0;
  opacity: 0;
  text-align: start;
  position: relative;

  &:hover {
    background: ${props => props.porc ? '#1db954' : ''};
  
    &::before {
      content: '';
      position: absolute;
      right: 0;
      width: 12px;
      height: 12px;
      border-radius: 50%;

      background-color: #ffffff;
    }
  }
  
`;