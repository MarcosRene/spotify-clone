import styled from 'styled-components';

import { Props } from './index';

export const Container = styled.div`
  position: relative;
`;

export const ListItem = styled.ul<Props>`
  position: absolute;
  right: 0;
  top: 8px;

  display: ${props => props.visible ? 'block' : 'none'};

  width: 180px;

  list-style: none;

  background-color: #282828;
  
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, .1);

  box-shadow: 0 4px 4px rgba(0, 0, 0, .7);
`;

export const Item = styled.li`
  padding: 3px 20px;

  font-size: 14px;
  line-height: 32px;
  white-space: nowrap;
  background: none;
  border: 0;

  color: #b3b3b3;
  cursor: pointer;

  &:hover {
    background-color: #333333;
    color: #ffffff;
  }  

  &.separator {
    border-top: 1px solid #404040;
  }
`;