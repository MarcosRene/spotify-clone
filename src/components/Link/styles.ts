import styled from 'styled-components';

interface Props {
  isLink?: boolean;
}

export const Container = styled.a<Props>`
  display: flex;
  align-items: center;

  height: 40px;

  margin: 0 8px;
  padding: 0 16px;

  color: #b3b3b3;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;

  cursor: pointer;

  &.active, &:hover {
    background-color: ${(props) => props.isLink ? '#282828' : 'transparent'};
    color: ${(props) => props.isLink ? '#ffffff' : '#ffffff'};
    
    border: 0;
    border-radius: 4px;
  }

  &:hover {
    transition: color .2s;
  }

  > span {
    margin-left: 16px;
  }

`;
